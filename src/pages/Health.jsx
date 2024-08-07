import React from "react";
import NewsBoard from "../components/NewsBoard";

function Health() {
  return (
    <div>
      <h3>
        Health <span>News</span>
      </h3>
      <NewsBoard category={"health"} />
    </div>
  );
}

export default Health;
