const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware setup
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

// Serve the static files from the "FrontEnd" folder
app.use(express.static(path.join(__dirname, "../FrontEnd")));

// API Route: Handle form submissions
app.post("/api/submit", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Name and Email are required!" });
    }

    res.status(200).json({ message: `Received name: ${name}, email: ${email}` });
});

// Serve the `test.html` for the root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../FrontEnd/test.html"));
});

// Catch-all for invalid routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
