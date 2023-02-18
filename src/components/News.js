import React from "react";
import { useSelector } from "react-redux";
import "./News.css";
import NewsItem from "./NewsItem";

const News = () => {
  const News = useSelector((state) => state.toolkit.News);
  return (
    <>
      <div className="News">
        <div className="Block1News">
          <div className="Block1NewsFilters"></div>
          <div className="Block1NewsNewsBlock">
            {News.map((item) => (
              <NewsItem
                TopicPhoto={item.TopicPhotoUrl}
                Name={item.Name}
                Text={item.Text}
                key={Math.random()}
              ></NewsItem>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default News;
