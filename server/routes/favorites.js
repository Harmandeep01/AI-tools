const express = require("express");
const router = express.Router();
const {
  addFavorite,
  getFavorites,
  deleteFav,
} = require("../controllers/favoritesController");

router.post("/", addFavorite);
router.get("/", getFavorites);
router.delete("/:id", deleteFav);

module.exports = router;
