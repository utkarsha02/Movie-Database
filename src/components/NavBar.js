import React from "react";
import "../styles/navbar.css";

export default function NavBar({ setInputValue, inputValue, search }) {
  console.log(inputValue);
  return (
    <div className="navbar">
      <span className="heading">MOVIE DB</span>
      <input
        //event is typing text in searchbar, search here is the function written in App.js
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyPress={search}
        className="search-bar"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}
