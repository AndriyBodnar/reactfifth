import React from "react";
import Photo from "./Photos.js";
import "./photo.css";

const FIRST_IMAGE = "https://eskipaper.com/images/poppy-field-hd-1.jpg";
const SECOND_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/8/80/Artist’s_impression_of_the_deep_blue_planet_HD_189733b.jpg";
const THIRD_IMAGE =
  "https://c4.wallpaperflare.com/wallpaper/303/868/872/landscape-rocks-road-car-wallpaper-preview.jpg";
const DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue placerat pretium. Nam at pretium tellus. Morbi vitae dapibus ipsum. ";

function App() {
  return (
    <div className="photos__wrapper">
      <Photo image={FIRST_IMAGE} title={"Poppy field"} subtitle={DESCRIPTION} />
      <Photo image={SECOND_IMAGE} title={"Earth"} subtitle={DESCRIPTION} />
      <Photo
        image={THIRD_IMAGE}
        title={"American road"}
        subtitle={DESCRIPTION}
      />
    </div>
  );
}

export default App;
