import React, { useEffect, useState } from "react";
import axios from "axios";

function Friends({ history }) {
  const [message, setMessage] = useState("");
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
          setMessage(response.data.message);
        })
        .catch(e => {
          console.log(e.response.data);
        //   localStorage.removeItem("token");
          history.push("/");
        });
    }
  }, [history]);
  return (
    <>
      <div>Friends</div>
      <div>{message}</div>
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
