// generate-config.js
const fs = require('fs');
const serverURL = process.env.SERVER_URL;

const configContent = `window.SERVER_ADDRESS = "${serverURL}";`;
fs.writeFileSync('config.js', configContent);
