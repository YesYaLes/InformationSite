import React from "react";
import "./OurWork.css";

const OurWork = () => {
  const Expand = (event) => {};

  return (
    <>
      <div className="OurWork">
        <div className="Block1OurWork">
          <h1>Our Projects</h1>
          <div className="Block1OurWorkPhotosBlock">
            <div className="Block1OurWorkPhoto1 Block1OurWorkPhoto">
              <div className="Block1OurWorkContent">
                <h4>Some Topic</h4>
                <label>Some photo</label>
              </div>
              <button className="Block1OurWorkContentExpand" onClick={Expand}>
                Expand
              </button>
            </div>
            <div className="Block1OurWorkPhoto2 Block1OurWorkPhoto">
              <div className="Block1OurWorkContent">
                <h4>Some Topic</h4>
                <label>Some photo</label>
              </div>
              <button className="Block1OurWorkContentExpand">Expand</button>
            </div>
            <div className="Block1OurWorkPhoto3 Block1OurWorkPhoto">
              <div className="Block1OurWorkContent">
                <h4>Some Topic</h4>
                <label>Some photo</label>
              </div>
              <button className="Block1OurWorkContentExpand">Expand</button>
            </div>
            <div className="Block1OurWorkPhoto4 Block1OurWorkPhoto">
              <div className="Block1OurWorkContent">
                <h4>Some Topic</h4>
                <label>Some photo</label>
              </div>
              <button className="Block1OurWorkContentExpand">Expand</button>
            </div>
            <div className="Block1OurWorkPhoto5 Block1OurWorkPhoto">
              <div className="Block1OurWorkContent">
                <h4>Some Topic</h4>
                <label>Some photo</label>
              </div>
              <button className="Block1OurWorkContentExpand">Expand</button>
            </div>
            <div className="Block1OurWorkPhoto6 Block1OurWorkPhoto">
              <div className="Block1OurWorkContent">
                <h4>Some Topic</h4>
                <label>Some photo</label>
              </div>
              <button className="Block1OurWorkContentExpand">Expand</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurWork;
