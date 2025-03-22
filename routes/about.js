const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
    res.render("about", {
        title: "About | Fastrans",
        pageTitle: "About",
        parentPage: null, // There is no parent page on the main page
    });
});

module.exports = router;
