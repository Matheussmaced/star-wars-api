import app from "./app.js";
import connectToDatabase from "./config/database.js";

const port = 3000;

app.listen(port, async () => {
  await connectToDatabase();
  console.log(`A aplicação está rodando na porta ${port}`);
  console.log("Documentação disponível em http://localhost:3000/api-docs");
});
