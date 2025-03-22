const express = require("express");
const router = express.Router();

router.get("/project", (req, res) => {
    res.render("project", {
        title: "Project | Fastrans",
        pageTitle: "Project",
        parentPage: null, // There is no parent page on the main page
    });
});

module.exports = router;
