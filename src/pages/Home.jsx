import React from "react";
import NewsBoard from "../components/NewsBoard";

function Home({ category }) {
  return (
    <div>
      <h3>
        Latest <span>News</span>
      </h3>

      <NewsBoard category={category} />
    </div>
  );
}

export default Home;
