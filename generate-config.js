const fs = require('fs');
const serverURL = process.env.SERVER_URL;

if (!serverURL) {
  console.error("❌ SERVER_URL nicht gesetzt!");
  process.exit(1);
}

const configContent = `window.SERVER_ADDRESS = "${serverURL}";`;
fs.writeFileSync('config.js', configContent);
