const fs = require('fs');

// Umgebungsvariable auslesen
const serverURL = process.env.SERVER_URL;

// Debug-Ausgabe für GitHub Actions Log
console.log("DEBUG: serverURL =", serverURL);

// Prüfung: Ist die URL gesetzt?
if (!serverURL) {
  console.error("❌ SERVER_URL ist nicht gesetzt! Abbruch.");
  process.exit(1);
}

// Inhalt der Datei erstellen
const configContent = `window.SERVER_ADDRESS = "${serverURL}";`;

// Datei im aktuellen Verzeichnis speichern
try {
  fs.writeFileSync('config.js', configContent);
  console.log("✅ config.js erfolgreich geschrieben.");
} catch (error) {
  console.error("❌ Fehler beim Schreiben der Datei:", error);
  process.exit(1);
}
