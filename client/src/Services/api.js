import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080/api" });

export const fetchTools = (category = "") =>
  API.get("/tools", { params: category ? { category } : {} });

export const saveFavorite = (toolId) => API.post("/favorites", { toolId });

export const fetchFavorites = () => {
  return API.get("/favorites");
};

export const deletefavorite = (toolId) => API.delete(`/favorites/${toolId}`);
