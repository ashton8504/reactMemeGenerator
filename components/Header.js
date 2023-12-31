import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header--content">
        <img
          src="./images/troll-face.png"
          alt="Troll Face"
          className="header--image"
        />
        <div className="header--text">
          <h2 className="header--title">Meme Generator</h2>
          <h4 className="header--project">React Course - Project 3</h4>
        </div>
      </div>
    </header>
  );
}
