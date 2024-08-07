import React from "react";
import NewsBoard from "../components/NewsBoard";

function Sport() {
  return (
    <div>
      <h3>
        Sport <span>News</span>
      </h3>
      <NewsBoard category={"sport"} />
    </div>
  );
}

export default Sport;
