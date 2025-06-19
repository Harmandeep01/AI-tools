import React, { useEffect, useState } from "react";
import { deletefavorite, fetchFavorites } from "../Services/api";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites()
      .then((res) => {
        setFavorites(res.data);
      })
      .catch((err) => {
        console.error("Error fetching favorites:", err);
      });
  }, []);
  function removeTool(toolId) {
    deletefavorite(toolId)
      .then(() => {
        setFavorites(favorites.filter((fav) => fav.id !== toolId));
        alert("Deleted Successfully!");
      })
      .catch(() => alert("Something went wrong."));
  }

  return (
    <div className="favorites">
      <h2>Your Favorite AI Tools</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="tool-grid">
          {favorites.map((tool) => (
            <div className="tool-card" key={tool.id}>
              <h3>{tool.name}</h3>
             <p className="card-top">
                <span>{tool.pricing}</span>
                <span>{tool.category}</span>
              </p>
              <p>{tool.excerpt}</p>
              <div className="card-bottom">
                <a href={tool.url} target="_">
                  <button>Visit</button>
                </a>
                <button onClick={() => removeTool(tool.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
