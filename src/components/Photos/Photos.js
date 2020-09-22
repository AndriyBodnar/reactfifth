import React from "react";

function Photo(props) {
  return (
    <div className="photos">
      <div className="image__wrapper-">
        <img src={props.image} alt="photo_img" className="photo__post-img" />
      </div>

      <div className="photo__post-title"><p>{props.title}</p></div>
      <div className="photo__post-subtitle"><p>{props.subtitle}</p></div>
    </div>
  );
}

export default Photo;
