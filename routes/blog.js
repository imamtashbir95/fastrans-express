const express = require("express");
const router = express.Router();

router.get("/blog", (req, res) => {
    res.render("blog", {
        title: "Blog | Fastrans",
        pageTitle: "Blog",
        parentPage: null, // There is no parent page on the main page
    });
});

module.exports = router;
