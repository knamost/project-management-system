import { ApiResponse } from "../utils/api-response.js";

const healthcheck = (req, res) => {
	try {
		res.status(200).json(
			new ApiResponse(200, { message: "server is running.." }),
		);
	} catch (error) {
		console.error("Healthcheck error:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export { healthcheck };
