import React from "react";
import PetsList from "./PetsList";

export default function Friend({ friend, setFriends }) {
  const handleMarriedChange = () => {
    setFriends((prev) =>
      prev.map((obj) => {
        if (obj.id === friend.id) {
          return { ...obj, married: !friend.married };
        }
        return obj;
      })
    );
  };

  return (
    <div className="friend-friends container">
      <div className="friend-info">
        <div>
          <h3>Adı: {friend.name} </h3>
          <p>Yaş: {friend.age} </p>
          <p>
            Evli mi?: {friend.married ? "Evet" : "Hayir"}{" "}
            <button onClick={() => handleMarriedChange()}>Değiştir</button>
          </p>
          <div>
            Hobileri:
            <ul>
              {friend.hobbies.map((hobby) => (
                <li key={hobby}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <PetsList pets={friend.pets} />
        </div>
      </div>
    </div>
  );
}
