const fs = require('fs');
const serverURL = process.env.SERVER_URL;


console.log("DEBUG: serverURL =", serverURL);


const configContent = `window.SERVER_ADDRESS = "${serverURL}";`;
fs.writeFileSync('config.js', configContent);
