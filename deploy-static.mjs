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

function collectFiles(dir, relativeTo, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
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
  console.log("Connecting...");
  await sftp.connect(SFTP_CONFIG);
  console.log("Connected!\n");

  // Clean old files from previous deploy
  console.log("Cleaning old files...");
  const oldDirs = ["/src", "/public", "/node_modules", "/.next"];
  for (const d of oldDirs) {
    try {
      await sftp.rmdir(d, true);
      console.log("  Removed " + d);
    } catch {
      // doesn't exist, that's fine
    }
  }
  const oldFiles = [
    "/package.json", "/package-lock.json", "/tsconfig.json",
    "/next.config.ts", "/postcss.config.mjs", "/eslint.config.mjs",
    "/components.json", "/next-env.d.ts", "/.gitignore", "/README.md",
  ];
  for (const f of oldFiles) {
    try {
      await sftp.delete(f);
      console.log("  Removed " + f);
    } catch {
      // doesn't exist
    }
  }

  // Upload index.js (the static server)
  console.log("\nUploading index.js...");
  await sftp.put(path.join(__dirname, "index.js"), "/index.js");

  // Upload out/ directory
  const outDir = path.join(__dirname, "out");
  const items = collectFiles(outDir, outDir);
  const dirs = items.filter((i) => i.type === "dir");
  const files = items.filter((i) => i.type === "file");

  console.log(`\nCreating ${dirs.length} directories...`);
  for (const dir of dirs) {
    const remote = "/out" + dir.remote;
    try {
      await sftp.mkdir(remote, true);
    } catch {
      // exists
    }
    console.log("  DIR  " + remote);
  }
  // ensure /out root exists
  try { await sftp.mkdir("/out", true); } catch {}

  console.log(`\nUploading ${files.length} files...\n`);
  let count = 0;
  for (const file of files) {
    count++;
    const remote = "/out" + file.remote;
    const kb = (fs.statSync(file.local).size / 1024).toFixed(1);
    console.log(`  [${count}/${files.length}] ${remote} (${kb} KB)`);
    await sftp.put(file.local, remote);
  }

  console.log(`\nDone! Uploaded ${files.length + 1} files.`);
  await sftp.end();
}

deploy().catch((err) => {
  console.error("Deploy failed:", err.message);
  process.exit(1);
});
