const express = require("express");
const router = express.Router();

router.get("/coming-soon", (req, res) => {
    res.render("coming-soon", { title: "Coming Soon | Agata Kargo Utama" });
});

module.exports = router;
