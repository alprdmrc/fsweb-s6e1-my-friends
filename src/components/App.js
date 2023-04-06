import React, { useState } from "react";
import FriendsList from "./FriendsList";
import Search from "./Search";
import friendsData from "../dummy-data/friends";

export default function App() {
  const [friends, setFriends] = useState(friendsData);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="app-friends container">
      <Search setSearchQuery={setSearchQuery} />
      <FriendsList
        friends={friends}
        searchQuery={searchQuery}
        setFriends={setFriends}
      />
    </div>
  );
}
