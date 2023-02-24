import React from "react";
import { Link } from "react-router-dom";
import "./NewsItem.css";

const NewsItem = (props) => {
  return (
    <>
      <div
        className="Block1NewsNewsContainer"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <h1>{props.Content.Name}</h1>
        <img
          src={props.Content.TopicPhotoUrl}
          className="Block1NewsPhoto"
        ></img>
        <label>{props.Content.Text}</label>
        <Link to={`/news/${props.Content.Name}`} state={props.Content}>
          More
        </Link>
      </div>
    </>
  );
};
export default NewsItem;
