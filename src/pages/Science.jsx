import React from "react";
import NewsBoard from "../components/NewsBoard";

function Science() {
  return (
    <div>
      <h3>
        Science <span>News</span>
      </h3>
      <NewsBoard category={"science"} />
    </div>
  );
}

export default Science;
