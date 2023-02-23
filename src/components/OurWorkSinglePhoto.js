import React from "react";
import "./OurWorkSinglePhoto.css";

const OurWorkSinglePhoto = (props) => {
  const Expand = (event) => {
    document.body.children
      .item(3)
      .children.item(0)
      .children.item(0).style.display = "block";

    event.target.parentElement.style.zIndex = "5";
    event.target.parentElement.classList.add("Block1OurWorkPhotoExpand");
    event.target.parentElement.children.item(0).className =
      "Block1OurWorkContentCloseActive";
    event.target.parentElement.children.item(2).style.visibility = "hidden";
  };
  const Close = (event) => {
    document.body.children
      .item(3)
      .children.item(0)
      .children.item(0).style.display = "none";

    event.target.parentElement.style.zIndex = "0";
    event.target.parentElement.classList.remove("Block1OurWorkPhotoExpand");
    event.target.parentElement.children.item(0).className =
      "Block1OurWorkContentClose";
    event.target.parentElement.children.item(2).style.visibility = "visible";
  };
  const ChangeBack = (event) => {
    event.target.style.backgroundImage = `url("https://pimmedia.egger.com/l/decor/U788_9/s/Detail/f/881x513/8803438166046")`;
  };
  const ReturnBack = (event) => {
    event.target.style.backgroundImage = `url("${props.photoUrl}")`;
  };
  return (
    <>
      <div
        className="Block1OurWorkPhoto"
        style={{ backgroundImage: `url("${props.photoUrl}")` }}
        // onMouseEnter={ChangeBack}
        // onMouseLeave={ReturnBack}
      >
        <button className="Block1OurWorkContentClose" onClick={Close}>
          X
        </button>
        <div className="Block1OurWorkContent">
          <h4>Some Topic</h4>
          <label>Some photo</label>
        </div>
        <img
          src="https://icons.veryicon.com/png/o/application/font-awesome/expand-11.png"
          className="Block1OurWorkContentExpand"
          onClick={Expand}
        ></img>
      </div>
    </>
  );
};
export default OurWorkSinglePhoto;
