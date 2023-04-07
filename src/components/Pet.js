import React, { useState } from "react";

export default function Pet({ pet }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="pet-friends container">
      <p>
        {pet.name} ({pet.type})
      </p>

      <button onClick={() => setLiked(!liked)}>{liked ? "❤️" : "Begen"}</button>
    </div>
  );
}
