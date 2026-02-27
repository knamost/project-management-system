import dotenv from "dotenv/config";
import app from "./app.js";

const port = process.env.PORT ?? 8000;

//? server listening
app.listen(port, () => console.log(`Server is listening on PORT: ${port}`));
