import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

class ProfileCard extends React.Component {
  render() {
    return (
      <div id="card">
        <div className="personal">
          <Avatar image="https://raw.githubusercontent.com/JustMonk/codepen-resource-project/master/img/pixel%20avatar.png" />
          <NameHolder name={this.props.name} career={this.props.career} />
        </div>
        <Info
          pens={this.props.pens}
          posts={this.props.posts}
          projects={this.props.projects}
        />
        <Skills skills={this.props.skills} />
        <Followers
          followers={this.props.followers}
          following={this.props.following}
        />
        <RandomizeButton />
      </div>
    );
  }
}

function RandomizeButton() {
  let rand = Math.random;
  let maxSkills = 3 + getRandom(2);

  function getRandom(arg) {
    if (Array.isArray(arg))
      return arg[Math.round((rand() * (arg.length - 1)).toFixed(2))];
    return Math.round((rand() * arg).toFixed(2)) || 1;
  }

  function randomize() {
    let names = ["Mike", "Andrew", "Tom", "Jack", "Garry", "Nick", "Daniel"];
    let surnames = [
      "Vazovsky",
      "Anderson",
      "Archer",
      "Armstrong",
      "Ash",
      "Bradley",
      "Collins",
    ];
    let careers = [
      "Frontend developer",
      "Backend developer",
      "Designer",
      "Data scientist",
      "Engineer",
      "Painter",
    ];
    let skills = [
      "CSS3",
      "Ruby",
      "PHP",
      "JavaScript",
      "React",
      "HTML5",
      "Vue.js",
      "Angular",
      "Python",
      "C#",
      "C++",
      "Java",
      "Node.JS",
    ];
    let randomSkils = [];
    while (randomSkils.length <= maxSkills) {
      randomSkils.push(skills.splice(getRandom(skills.length - 1), 1));
    }
    ReactDOM.render(
      <ProfileCard
        name={getRandom(names) + " " + getRandom(surnames)}
        career={getRandom(careers)}
        pens={getRandom(60)}
        posts={getRandom(20)}
        projects={getRandom(10)}
        skills={randomSkils}
        followers={getRandom(44)}
        following={getRandom(27)}
      />,
      document.getElementById("root")
    );

    //anim changeable data
    let changeNodes = document.querySelectorAll(
      ".nameHolder, .info span, .skills, .followers h2"
    );
    changeNodes.forEach((val) => {
      val.classList.add("animate-change");
    });

    changeNodes[0].addEventListener("animationend", animationEnd);
    changeNodes[0].addEventListener("webkitAnimationEnd", animationEnd);
    function animationEnd(e) {
      changeNodes.forEach((val) => {
        val.classList.remove("animate-change");
      });
    }
  }

  return (
    <a className="randomizeButton" onClick={randomize}>
      Randomize
    </a>
  );
}

function Followers(props) {
  return (
    <div className="followers">
      <div>
        <h1>followers</h1>
        <h2>{props.followers}</h2>
      </div>
      <div>
        <h1>following</h1>
        <h2>{props.following}</h2>
      </div>
    </div>
  );
}

function Skills(props) {
  let startKey = 0;
  return (
    <div className="skills">
      {props.skills.map((elem) => {
        return <span key={startKey++}>{elem}</span>;
      })}
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.image} alt="user avatar" />
    </div>
  );
}

function NameHolder(props) {
  return (
    <div className="nameHolder">
      <h1>{props.name}</h1>
      <h2>{props.career}</h2>
    </div>
  );
}

function Info(props) {
  return (
    <div className="info">
      <span>Pens: {props.pens}</span>
      <span>Posts: {props.posts}</span>
      <span>Projects: {props.projects}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
       
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
