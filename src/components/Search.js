import React from "react";

export default function Search({ handleSearch }) {
  return (
    <div className="search-friends container">
      <input onChange={(e) => handleSearch(e.target.value)} type="text" />
    </div>
  );
}
