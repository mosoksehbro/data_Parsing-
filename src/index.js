const path = require("path");
const client = require("../config/db");
const parseAndInsertData = require("./parser");

async function main() {
  try {
    const filePath = path.resolve(__dirname, "../data/DTE.txt");
    await parseAndInsertData(filePath);
    console.log("Data successfully inserted into the database");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.end();
  }
}

main();
