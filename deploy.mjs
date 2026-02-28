import SftpClient from "ssh2-sftp-client";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SFTP_CONFIG = {
  host: "node6.lunes.host",
  port: 2022,
  username: "migzloves420.ec617eb4",
  password: "redwafer11213R!",
};

const SKIP_DIRS = new Set(["node_modules", ".next", ".git"]);
const SKIP_FILES = new Set(["deploy.mjs"]);

function collectFiles(dir, relativeTo, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name) || SKIP_FILES.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    const rel = path.relative(relativeTo, full).replace(/\\/g, "/");

    if (entry.isDirectory()) {
      results.push({ type: "dir", remote: "/" + rel });
      collectFiles(full, relativeTo, results);
    } else {
      results.push({ type: "file", local: full, remote: "/" + rel });
    }
  }
  return results;
}

async function deploy() {
  const sftp = new SftpClient();

  console.log("Connecting to", SFTP_CONFIG.host + ":" + SFTP_CONFIG.port, "...");
  await sftp.connect(SFTP_CONFIG);
  console.log("Connected!\n");

  const items = collectFiles(__dirname, __dirname);
  const dirs = items.filter((i) => i.type === "dir");
  const files = items.filter((i) => i.type === "file");

  console.log("Found " + dirs.length + " directories, " + files.length + " files.\n");

  for (const dir of dirs) {
    try {
      await sftp.mkdir(dir.remote, true);
      console.log("  DIR  " + dir.remote);
    } catch {
      console.log("  SKIP " + dir.remote + " (exists)");
    }
  }

  console.log("\nUploading files...\n");
  let count = 0;
  for (const file of files) {
    count++;
    const size = fs.statSync(file.local).size;
    const kb = (size / 1024).toFixed(1);
    console.log("  [" + count + "/" + files.length + "] " + file.remote + " (" + kb + " KB)");
    await sftp.put(file.local, file.remote);
  }

  console.log("\nDone! Uploaded " + files.length + " files successfully.");
  await sftp.end();
}

deploy().catch((err) => {
  console.error("\nDeploy failed:", err.message);
  process.exit(1);
});
