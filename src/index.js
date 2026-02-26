import dotenv from "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

//? Routes
app.get("/", (req, res) => {
	res.send("Hello world");
});

//? server listening
app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
