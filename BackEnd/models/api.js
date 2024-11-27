// backend/routes/api.js
const express = require("express");
const router = express.Router();

router.get("../FrontEnd/index.html", (req, res) => {
    res.json({ message: "Hello from the API!" });
});

module.exports = router;
