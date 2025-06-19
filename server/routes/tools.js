const express = require("express");
const router = express.Router();
const { getAllTools } = require("../controllers/toolsController");

router.get("/", getAllTools);

module.exports = router;