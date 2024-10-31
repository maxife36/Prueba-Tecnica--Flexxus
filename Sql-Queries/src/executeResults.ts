import fs from "fs";
import path from "path";
import connectDb from "./dbConection";

async function executeResults() {
  const numQueries = [];

  for (let i = 1; i <= 11; i++) {
    if (i < 10) {
      numQueries.push(`0${i}`);
    } else {
      numQueries.push(`${i}`);
    }
  }

  const db = await connectDb();
  
  let template = fs.readFileSync(
    path.join(__dirname, "../../src/templateResults.md"),
    "utf-8"
  );

  for (const queryId of numQueries) {
    const sqlFilePath = path.join(
      __dirname,
      `../../queries/${queryId}-query.sql`
    );

    if (!fs.existsSync(sqlFilePath)) {
      throw new Error("Archivo de consulta no encontrado");
    }

    const query = fs.readFileSync(sqlFilePath, "utf8");

    const [results] = await db.query(query);

    const jsonResults = JSON.stringify(results);

    template = template.replace(`{{${queryId}-query}}`, query);
    template = template.replace(`{{${queryId}-query-result}}`, jsonResults);    
  }

  // Escribir el resultado en un nuevo archivo Markdown
  const outputFilePath = path.join(__dirname, "../../RESULTS.md");

  fs.writeFileSync(outputFilePath, template, "utf-8");

  console.log("Markdown generado exitosamente como RESULTS.md");

  await db.close();
}

export default executeResults;
