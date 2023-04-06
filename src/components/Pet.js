import React from "react";

export default function Pet({ pet }) {
  /* 👉 Buraya prop lazım mı? state lazım mı? */
  const handlePetLike = (id) => {
    console.log(id);
  };
  return (
    <div className="pet-friends container">
      <p>
        {pet.name} ({pet.type})
      </p>
      {/* 👉 tasarıma dikkat. buraya bir şey lazım sanki? */}
      <button onClick={() => handlePetLike(pet.id)}>Begen</button>
    </div>
  );
}
