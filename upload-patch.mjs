import SftpClient from "ssh2-sftp-client";

const sftp = new SftpClient();

await sftp.connect({
  host: "node6.lunes.host",
  port: 2022,
  username: "migzloves420.ec617eb4",
  password: "redwafer11213R!",
});

const files = [
  { local: "index.js", remote: "/index.js" },
  { local: "next.config.ts", remote: "/next.config.ts" },
];

for (const f of files) {
  console.log(`Uploading ${f.local} -> ${f.remote}`);
  await sftp.put(f.local, f.remote);
}

console.log("Done!");
await sftp.end();
