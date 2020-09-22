import React from "react";
import Post from "./components/Post.js";
import "./posts.css"

const ANAKIN_IMAGE =
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const FATHER_IMAGE =
"https://pa1.narvii.com/6389/154706d5ba09c668dd1c8a938f0a1fd18faf6637_hq.gif"



function App() {
  return (
    <div className="post__wrapper">
      <Post
        author={{
          name: "Anakin Skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader",
        }}
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image={RAY_IMAGE}
        date={"26 февр."}
        likecount={"775"}
        actioncount={"340"}
        repcount={"486"}
      />
      <Post
        author={{
          name: "Anakin Skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader",
        }}
        content="Father and son..."
        image={FATHER_IMAGE}
        date={"24 февр."}
        likecount={"875"}
        actioncount={"140"}
        repcount={"286"}
      />
    </div>
  );
}

export default App;
