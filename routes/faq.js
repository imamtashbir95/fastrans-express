const express = require("express");
const router = express.Router();

router.get("/faq", (req, res) => {
    res.render("faq", {
        title: "FAQ | Fastrans",
        pageTitle: "FAQ",
        parentPage: null, // There is no parent page on the main page
    });
});

module.exports = router;
