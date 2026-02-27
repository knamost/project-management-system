import express from "express";

const app = express();

//? Middlewares
app.use(express.json);
//? Routes
app.get("/", (req, res) => {
	return res.send("Welcome to basecampy");
});

export default app;
