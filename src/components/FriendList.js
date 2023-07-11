import axios from "axios";
import { useEffect, useState } from "react";
import { token } from "../mocks/credentials";

function FriendsList() {
  
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends", {headers: {
        Authorization: token
      }})
      .then((res) => setFriends(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="friendList">
      <h1>FRIENDS LIST</h1>
      {friends.map((friend, key) => (
        <div className="friend" key={key}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}
  
  export default FriendsList;