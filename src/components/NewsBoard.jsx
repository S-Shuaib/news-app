import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";
import NewsCoursel from "./NewsCoursel";

function NewsBoard({ category }) {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=ng&category=${category}&apiKey=926f6a2f5d944ecabad378830bafe979`;
    try {
      fetch(url).then((response) => {
        response.json().then((data) => setArticle(data.articles));
      });
    } catch (error) {
      console.log(error);
    }
  }, [category]);
  return (
    <div>
      {
        <NewsCoursel
          title={article.length > 0 ? article[0].title : ""}
          title2={article.length > 0 ? article[1].title : ""}
          title3={article.length > 0 ? article[2].title : ""}
          title4={article.length > 0 ? article[3].title : ""}
        />
      }
      <div className="latest-news-container">
        {article.slice(4,19).map((news, index) => {
          const { title, url, author, urlToImage } = news;
          return (
            <NewsCard
              key={index}
              title={title}
              urlToStory={url}
              author={author}
              urlToImage={urlToImage}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewsBoard;
