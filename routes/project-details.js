const express = require("express");
const router = express.Router();

router.get("/project-details", (req, res) => {
    res.render("project-details", { title: "Project Details | Fastrans" });
});

module.exports = router;
