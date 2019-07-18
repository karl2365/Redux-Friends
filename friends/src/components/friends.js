import React, { useEffect, useState } from "react";
import axios from "axios";
import './component.css';




function Friends({ history }) {
const [friendsList, setFriendsList] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const url =
      "http://localhost:5000/api/friends";

    if (token) {
      axios
        .get(url, {
          headers: {
            Authorization: `${token}` // for the project just set it to token
          }
        })
        .then(response => {
            console.log(response.data)
          setFriendsList(response.data);
        })
        .catch(e => {
          console.log(e.response);
          localStorage.removeItem("token");
          history.push("/");
        });
    }
  }, [history]);
  if (!friendsList) return <div>Loading</div>
  return (
    <>
      <div>Friends</div>
   
      {friendsList.map(friend => 
      <div className="friendList">
        <p className="friendName">Name: {friend.name}</p>
        <p className="friendAge">Age: {friend.age}</p>
        <p className="friendEmail">Email: {friend.email}</p>
      </div>)}
      <button
        className="btn"
        onClick={() => {
          localStorage.removeItem("token");
          history.push("/");
        }}
      >
        Logout
      </button>
    </>
  );
}

export default Friends;
