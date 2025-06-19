const tools = require("../data/ai_tools_sample_data.json");
let favorites = [];

const addFavorite = (req, res) => {
  const { toolId } = req.body;
  if (!toolId) return res.status(400).json({ message: "toolId is required" });

  const tool = tools.find((t) => t.id === toolId);
  if (!tool) return res.status(404).json({ message: "Tool not found" });

  //Edge Case Covered - If already exists
  const exists = favorites.find((fav) => fav.id === toolId);
  if (exists)
    return res.status(409).json({ message: "Tool already in favorites" });

  favorites.push(tool);
  res.status(201).json({ message: "Tool added to favorites" });
};

const getFavorites = (req, res) => {
  res.json(favorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  const toolId = parseInt(id);

  const index = favorites.findIndex((tool) => tool.id === toolId);

  if (index === -1) {
    return res.status(404).json({ message: "Favorite not found." });
  }

  favorites.splice(index, 1);

  res.status(200).json({ message: "Removed from favorites." });
};

module.exports = { addFavorite, getFavorites, deleteFav };
