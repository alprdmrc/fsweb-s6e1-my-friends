import React from "react";
import Friend from "./Friend";

export default function FriendsList({ friends, handleMarriedChange }) {
  return (
    <div className="list-friends container">
      {friends ? (
        friends.map((friend) => {
          return (
            <Friend
              key={friend.id}
              friend={friend}
              handleMarriedChange={handleMarriedChange}
            />
          );
        })
      ) : (
        <p>arkadas yok</p>
      )}
    </div>
  );
}
