import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { token } from "../mocks/credentials";
import axios from "axios";

function AddFriend() {
  const [friend, setFriend] = useState(
    {
      name: '',
      email: ''
      
    });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "post",
      url: "http://localhost:9000/api/friends",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      data: friend,
    };
    axios(config)
      .then(function (response) {
        history.push("/friends-list");
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFriend({ ...friend, [name]: value });
  };


  return (
    <div>
      <h1>ADD FRİEND</h1>
      <form onSubmit={handleSubmit}>
      <label>
        Friend Name
        <br />
        <input
          type="text"
          name="name"
          value={friend.name}
          onChange={handleChange}
          style={{
            color: "white",
            backgroundColor: "black",
          }}
        />
      </label>
      <br />
      <label>
        Friend Email
        <br />
        <input
          type="email"
          name="email"
          value={friend.email}
          onChange={handleChange}
          style={{
            color: "white",
            backgroundColor: "black",
          }}
        />
      </label>
      <br />
      <button
      style={{
        color: "white",
        backgroundColor: "black",
      }}>
      SUBMİT
      </button>
      </form>
    </div>
  );
};

export default AddFriend;


