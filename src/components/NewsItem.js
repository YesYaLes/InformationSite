import React from "react";
import "./NewsItem.css";

const NewsItem = (props) => {
  return (
    <>
      <div className="Block1NewsNewsContainer">
        <h1>{props.Name}</h1>
        <img src={props.TopicPhoto} className="Block1NewsPhoto"></img>
        <label>{props.Text}</label>
      </div>
    </>
  );
};
export default NewsItem;
