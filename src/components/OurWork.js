import React from "react";
import "./OurWork.css";
import OurWorkSinglePhoto from "./OurWorkSinglePhoto";

const OurWork = () => {
  return (
    <>
      <div className="OurWork">
        <div
          className="Block1OurWork"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <h1>Our Projects</h1>
          <div className="Block1OurWorkPhotosBlock">
            <OurWorkSinglePhoto
              photoUrl={
                "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg"
              }
            />
            <OurWorkSinglePhoto
              photoUrl={
                "https://www.michiganstateuniversityonline.com/wp-content/uploads/sites/3/2014/03/build-teamwork-culture-41.jpg"
              }
            />
            <OurWorkSinglePhoto
              photoUrl={
                "https://www.incimages.com/uploaded_files/image/1920x1080/getty_927720230_371995.jpg"
              }
            />
            <OurWorkSinglePhoto
              photoUrl={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVF5Hmz5aBhtGAvWTNfJj7S528NWLxTZ4eQA&usqp=CAU"
              }
            />
            <OurWorkSinglePhoto
              photoUrl={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiazdOzqqz6noAfHw3OLyuYEjYz1paeyhhFg&usqp=CAU"
              }
            />
            <OurWorkSinglePhoto
              photoUrl={
                "https://successfulprojects.com.au/wp-content/uploads/2020/01/Project-Planning-min.png"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default OurWork;
