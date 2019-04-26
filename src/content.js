import React from "react";

const Content = () => {
  return (
    <div className="page-content">
      <img src="https://source.unsplash.com/random" id="art-pic" alt="artpic" />
      <div id="headline" />
      <div id="subheading" />
      <div id="open-text" />

      <div class="text-pic">
        <div id="text1" />
        <img src="https://source.unsplash.com/random" id="pic1" alt="pic1" />
      </div>

      <div class="pic-text">
        <img src="https://source.unsplash.com/random" id="pic2" alt="pic2" />
        <div id="text2" />
      </div>

      <button id="b2t">Back to top</button>

      <div className="social-links">
        <button>N</button>
        <button>O</button>
        <button>P</button>
        <button>E</button>
      </div>

      <div id="copyright">Copyright</div>
    </div>
  );
};

export default Content;
