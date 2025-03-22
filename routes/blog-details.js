const express = require("express");
const router = express.Router();

router.get("/blog-details", (req, res) => {
    res.render("blog-details", { title: "Blog Details | Fastrans" });
});

module.exports = router;