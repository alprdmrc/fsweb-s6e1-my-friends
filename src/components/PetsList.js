import React from "react";
import Pet from "./Pet";

export default function PetsList({ pets, handlePetLike }) {
  return (
    <div className="list-pets-friends container">
      {pets.map((pet) => {
        return <Pet key={pet.id} pet={pet} handlePetLike={handlePetLike} />;
      })}
    </div>
  );
}
