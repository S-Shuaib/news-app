import React from "react";
import NewsBoard from "../components/NewsBoard";

function Entertainment() {
  return (
    <div>
      <h3>
        Entertainment <span>News</span>
      </h3>
      <NewsBoard category={"entertainment"} />
    </div>
  );
}

export default Entertainment;
