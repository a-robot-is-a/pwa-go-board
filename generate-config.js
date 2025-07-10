const fs = require('fs');
const path = require('path');

const serverURL = process.env.SERVER_URL;
console.log("DEBUG: serverURL =", serverURL);

if (!serverURL) {
  console.error("❌ SERVER_URL ist nicht gesetzt!");
  process.exit(1);
}

const configContent = `window.SERVER_ADDRESS = "${serverURL}";`;
const targetPath = path.join(__dirname, 'config.js');

fs.writeFileSync(targetPath, configContent);
console.log("✅ config.js erfolgreich nach pwa-go-board geschrieben.");
