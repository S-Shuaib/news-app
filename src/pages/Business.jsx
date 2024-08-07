import React from "react";

import NewsBoard from "../components/NewsBoard";

function Business() {
  return (
    <div>
      <h3>Business <span>News</span></h3>
      <NewsBoard category={"business"} />
    </div>
  );
}

export default Business;
