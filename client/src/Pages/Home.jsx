import React, { useEffect, useState } from "react";
import { fetchTools } from "../Services/api";
import { saveFavorite } from "../Services/api";
import Spinner from "../Components/Spinner";
import confetti from "canvas-confetti";
const Home = ({searchTerm}) => {
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  // const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const searchbar = document.getElementById("search-bar");
  useEffect(() => {
    fetchTools()
      .then((res) => {
        const data = res.data;
        setTools(data);
        setFilteredTools(data);

        const categoryList = [
          "All",
          ...new Set(data.map((tool) => tool.category)),
        ];
        setCategories(categoryList);
        setLoading(false);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [searchbar]);

  useEffect(() => {
    let filtered = [...tools];
    if (selectedCategory === "All") {
      setFilteredTools(tools);
    } else {
      const filtered = tools.filter(
        (tool) => tool.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredTools(filtered);
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((tool) =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredTools(filtered);
  }, [selectedCategory, tools, searchTerm]);

  function addToFavorite(toolId) {
    saveFavorite(toolId)
      .then(() => {
        alert("Added to Favorites!");

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      })
      .catch((err) => {
        if (err.response?.status === 409) {
          alert("Tool Already Favorite!");
        } else {
          console.error("Failed to save:", err);
          alert("Something went wrong.");
        }
      });
  }

  return (
    <div className="home">
      <h2>AI Tools</h2>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="category-dropdown"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {loading ? (
        <Spinner />
      ) : filteredTools.length === 0 ? (
        <p>No tools found.</p>
      ) : (
        <div className="tool-grid">
          {filteredTools.map((tool) => (
            <div className="tool-card" key={tool.id}>
              {/* {console.log(tool.name)} */}
              <h3>{tool.name}</h3>
              <p className="card-top">
                <span>{tool.pricing}</span>
                <span>{tool.category}</span>
              </p>
              {/* <img src={tool} alt="" /> */}

              <p>{tool.excerpt}</p>
              <div className="card-bottom">
                <a href={tool.url} target="_blank" rel="noreferrer">
                  <button>Visit</button>
                </a>
                <button onClick={() => addToFavorite(tool.id)}>
                  ❤️ Add to Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
