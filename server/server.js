const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({ message: "Server is running successfully!" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});