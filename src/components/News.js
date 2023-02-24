import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import "./News.css";
import NewsItem from "./NewsItem";
import NewsItemExtended from "./NewsItemExtended";

const News = () => {
  const News = useSelector((state) => state.toolkit.News);
  return (
    <>
      <Outlet />
      <div className="News">
        <div className="Block1News">
          <div className="Block1NewsFilters"></div>
          <div className="Block1NewsNewsBlock">
            {News.map((item) => (
              <NewsItem Content={item} key={Math.random()}></NewsItem>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default News;
