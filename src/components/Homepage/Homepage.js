import React from "react";

import s from "./homepage.module.css";

const Homepage = () => {
  return (
    <div className={s.homepage}>
      <div className={s.imgWrapper}>
        <img
          src="https://www.wallpapertip.com/wmimgs/31-316301_nature-mountains-snow-winter-mountain-wallpapers-hd-full.jpg"
          alt="homepage_img"
        />
      </div>
      <div className={s.homepage__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue
        placerat pretium. Nam at pretium tellus. Morbi vitae dapibus ipsum.
        Vivamus ultricies euismod felis, nec consectetur erat porttitor quis. Ut
        tincidunt sem eget ligula tincidunt posuere at in ipsum. Suspendisse
        bibendum sit amet arcu sed lobortis. Integer ut viverra ex. Ut iaculis
        diam sed tortor imperdiet maximus. Sed non dictum nisi. Nulla in
        eleifend massa, scelerisque tempus lectus. Nullam justo massa, imperdiet
        non velit ut, maximus posuere nisl. Quisque viverra ipsum ac metus
        pellentesque venenatis. Vivamus fermentum aliquet interdum. Vivamus
        varius euismod massa, sit amet malesuada arcu varius in. Duis luctus
        elit libero, eget bibendum libero maximus quis. Mauris et sem nisi.
        Phasellus urna ex, porttitor vitae sapien eu, rhoncus gravida nisl. Ut
        placerat eros eu dignissim accumsan. Vestibulum nunc dui, tempor
        vulputate vestibulum vitae, tempus suscipit orci. Nullam vel dolor quam.
      </div>
    </div>
  );
};

export default Homepage;
