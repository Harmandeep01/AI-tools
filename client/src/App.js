import React, { useState } from "react";
import Home from "./Pages/Home";
import "./App.css";
import Navbar from "./Components/Navbar";
import Favorites from "./Pages/Favorite";
import Footer from "./Components/Footer";
// import Favorites from "./Pages/Favorites";

function App() {
  const [togglePages, setTogglePages] = useState("Home");
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="body">
      <div className="wrapper">
        <Navbar setTogglePages={setTogglePages} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

        {togglePages === "Home" && <Home searchTerm={searchTerm}/>}
        {togglePages === "Favorites" && <Favorites />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
