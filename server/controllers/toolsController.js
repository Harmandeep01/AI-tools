const tools = require("../data/ai_tools_sample_data.json");

const getAllTools = (req, res) => {
  const { category } = req.query;
  if (category) {
    const filtered = tools.filter(
      (tool) => tool.category.toLowerCase() === category.toLowerCase()
    );
    return res.json(filtered); // If none found, it's just []
  }
  res.json(tools);
};

module.exports = { getAllTools };
