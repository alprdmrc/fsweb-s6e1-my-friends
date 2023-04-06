import React from "react";

export default function Search({ setSearchQuery }) {
  const handleSearch = (e) => {
    let query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };
  return (
    <div className="search-friends container">
      <input onChange={handleSearch} type="text" />
    </div>
  );
}
