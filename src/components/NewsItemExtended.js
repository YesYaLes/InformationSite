import React from "react";
import { useLocation } from "react-router-dom";
import "./NewsItemExtended.css";
const NewsItemExtended = (props) => {
  const location = useLocation();
  const data = location.state;
  return (
    <>
      <div
        className="NewsItemExtended"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <img src={data.TopicPhotoUrl} className="NewsItemExtendedPhoto"></img>
        <div className="NewsItemExtendedContent">
          <h1>{data.Name}</h1>
          <article>{data.Text}</article>
        </div>
      </div>
    </>
  );
};

export default NewsItemExtended;
