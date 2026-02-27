import dotenv from "dotenv/config";
import app from "./app.js";
import connectDB from "./db/index.js";

const PORT = process.env.PORT ?? 8000;

connectDB()
	.then(() => {
		app.listen(PORT, () => {
			console.log(
				`Example app listening on port http://localhost:${PORT}`,
			);
		});
	})
	.catch((err) => {
		console.error("MongoDB connection error", err);
		process.exit(1);
	});
