const express = require("express");
const router = express.Router();

router.get("/team", (req, res) => {
    res.render("team", {
        title: "Team | Fastrans",
        pageTitle: "Team",
        parentPage: null, // There is no parent page on the main page
    });
});

module.exports = router;
