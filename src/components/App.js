import React, { useState } from "react";
import FriendsList from "./FriendsList";
import Search from "./Search";
import friendsData from "../dummy-data/friends";

export default function App() {
  const [friends, setFriends] = useState(friendsData);

  const handleSearch = (query) => {
    const filteredFriends = friendsData.filter((fr) => {
      if (query === "") {
        return fr;
      } else {
        return fr.name.toLowerCase().includes(query.toLowerCase());
      }
    });
    setFriends(filteredFriends);
  };

  const handleMarriedChange = (friendId) => {
    setFriends((prev) =>
      prev.map((obj) => {
        if (obj.id === friendId) {
          obj.married = !obj.married;
        }
        return obj;
      })
    );
  };

  return (
    <div className="app-friends container">
      <Search handleSearch={handleSearch} />
      <FriendsList
        friends={friends}
        handleMarriedChange={handleMarriedChange}
      />
    </div>
  );
}
