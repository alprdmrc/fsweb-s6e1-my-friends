import React from "react";
import Pet from "./Pet";

export default function PetsList({ pets }) {
  return (
    <div className="list-pets-friends container">
      {pets.map((pet) => {
        return <Pet key={pet.id} pet={pet} />;
      })}
      {/* 👉 Buraya hangi component gelmeli ve daha önemlisi nasıl gelmeli? */}
    </div>
  );
}
