#!/usr/bin/env node

const { spawnSync } = require('child_process');

const result =
  spawnSync(process.platform === "win32" ? "rustup.exe" : "rustup", ["-V"]);

console.log("RUSTUP_STATUS", result.status);

if (result.status === 0) {
  process.exit(0);
}

console.info("***************************************************************");
console.info("*  Rustup needs to be installed to work with this repository  *");
console.info("***************************************************************");
console.info("");
console.info("For information how to install it, visit:")
console.info("");
console.info("  => https://rustup.rs/");
console.info("");
process.exit(1);
