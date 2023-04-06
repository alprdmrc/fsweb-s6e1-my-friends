import React from "react";
import Friend from "./Friend";

export default function FriendsList({ friends, searchQuery, setFriends }) {
  return (
    <div className="list-friends container">
      {friends ? (
        friends
          .filter((el) => {
            if (searchQuery === "") {
              return el;
            } else {
              return el.name.toLowerCase().includes(searchQuery);
            }
          })
          .map((friend) => {
            return (
              <Friend key={friend.id} friend={friend} setFriends={setFriends} />
            );
          })
      ) : (
        <p>arkadas yok</p>
      )}
    </div>
  );
}
