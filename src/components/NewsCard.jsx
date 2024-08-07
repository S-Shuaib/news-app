import React from "react";
import sample from "../assets/chat_wallpaper.jpg";

function NewsCard({ title, description, author, urlToImage, urlToStory }) {
  const article = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            vitae culpa? A commodi, aliquam assumenda suscipit magni ab
            asperiores nesciunt provident, vero mollitia ut animi fugiat
            sapiente fuga. Enim, voluptate.`;
  return (
    <div className="news-card-container">
      <div className="sub-container">
        <div className="image-container">
          <img src={sample} alt="" />
        </div>
        <div className="texts-container">
          <h4>
            {title.length > 56 ? title.slice(0, 50).concat(".....") : title}
          </h4>
          <p>
            {article.length > 100
              ? article.slice(0, 120).concat(".....")
              : article}
          </p>
          <a href={urlToStory}>Read More</a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
