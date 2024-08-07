import React from "react";
import NewsBoard from "../components/NewsBoard";

function Technology() {
  return (
    <div>
      <h3>
        Technology <span>News</span>
      </h3>
      <NewsBoard category={"technology"} />
    </div>
  );
}

export default Technology;
