import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Made with 💗 By Harmandeep &trade; </p>
      <p> &copy; {new Date().getFullYear()} AI Tools Explorer</p>
      <div className="footer-links">
        <a
          href="https://github.com/Harmandeep01"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/harmandeep01/" target="_">
          About
        </a>
      </div>
    </footer>
  );
};

export default Footer;
