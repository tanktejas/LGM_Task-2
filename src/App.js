import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import ProfileCard from "./card";
import { useEffect } from "react";
import { useState } from "react";

function Appp() {
  const [user, setuser] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (data) => data.json())
      .then((data) => {
        setuser(data.data);
      });
  }, [page]);

  if (user.length == 0) {
    return <h1>Loading...</h1>;
  }
  // console.log(user);
  return (
    <>
      <div className="mainuser">
        {user.map((item) => {
          return (
            <ProfileCard
              name={item.first_name}
              career={item.last_name}
              cover={item.avatar}
              email={item.email}
              projects="5"
              skills={["CSS3", "HTML5", "JavaScript", "PHP"]}
              followers="45"
              following="12"
            />
          );
        })}
      </div>
      <div className="but">
        <input
          className="but2"
          type="button"
          value="prevpage"
          disabled={page == 3 || page == 1}
          onClick={() => {
            if (page < 3) {
              setpage(page - 1);
            } else {
              setpage(1);
            }
          }}
        ></input>
        <input
          className="but"
          type="button"
          value="nextpage"
          disabled={page == 2}
          onClick={() => {
            if (page < 3) {
              setpage(page + 1);
            } else {
              setpage(1);
            }
          }}
        ></input>
      </div>
    </>
  );
}

export default Appp;
