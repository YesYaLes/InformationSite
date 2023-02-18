import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="Main">
        <div
          id="myCarousel"
          className="carousel slide Block1"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item carousel-item1 active">
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Example headline.</h1>
                  <p>
                    Some representative placeholder content for the first slide
                    of the carousel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Sign up today
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item carousel-item2">
              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>
                    Some representative placeholder content for the second slide
                    of the carousel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item carousel-item3">
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>
                    Some representative placeholder content for the third slide
                    of this carousel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Browse gallery
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="Block2">
          <div className="TextBlock">
            <h1 className="TextBlockTopic">About Company</h1>
            <label>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </label>
          </div>
          <div className="IconsBlock wow bounceInUp">
            <div className="IconsItem">
              <label className="Icon">
                <>&#x210D;</>
              </label>
              <div className="IconText">
                <h4>First</h4>
                <label>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </label>
              </div>
            </div>
            <div className="IconsItem">
              <label className="Icon">
                <>&#x2115;</>
              </label>
              <div className="IconText">
                <h4>Second</h4>
                <label>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </label>
              </div>
            </div>
            <div className="IconsItem">
              <label className="Icon">
                <>&#x2117;</>
              </label>
              <div className="IconText">
                <h4>Third</h4>
                <label>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </label>
              </div>
            </div>
            <div className="IconsItem">
              <label className="Icon">
                <>&#x2119;</>
              </label>
              <div className="IconText">
                <h4>Fouth</h4>
                <label>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </label>
              </div>
            </div>
            <div className="IconsItem">
              <label className="Icon">
                <>&#x2112;</>
              </label>
              <div className="IconText">
                <h4>Fifth</h4>
                <label>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </label>
              </div>
            </div>
            <div className="IconsItem">
              <label className="Icon">
                <>&#x211D;</>
              </label>
              <div className="IconText">
                <h4>Sixth</h4>
                <label>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </label>
              </div>
            </div>
            <div className="IconsItem">
              <label className="Icon">
                <>&#x211A;</>
              </label>
              <div className="IconText">
                <h4>Seventh</h4>
                <label>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </label>
              </div>
            </div>
            <div className="IconsItem">
              <label className="Icon">
                <>&#x2126;</>
              </label>
              <div className="IconText">
                <h4>Eighth</h4>
                <label>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="Block3 ">
          <h1>Our Projects</h1>
          <div className="PhotosBlock">
            <div className="Photo1 Photo">
              <div className="Content">
                <h4>Some Topic</h4>
                <label>Some photo</label>
              </div>
            </div>
            <div className="Photo2 Photo">
              <div className="Content">
                <h4>Some Topic</h4>
                <label>Some photo</label>
              </div>
            </div>
            <div className="Photo3 Photo">
              <div className="Content">
                <h4>Some Topic</h4>
                <label>Some photo</label>
              </div>
            </div>
            <div className="Photo4 Photo">
              <div className="Content">
                <h4>Some Topic</h4>
                <label>Some photo</label>
              </div>
            </div>
            <div className="Photo5 Photo">
              <div className="Content">
                <h4>Some Topic</h4>
                <label>Some photo</label>
              </div>
            </div>
            <div className="Photo6 Photo">
              <div className="Content">
                <h4>Some Topic</h4>
                <label>Some photo</label>
              </div>
            </div>
          </div>
        </div>

        <div className="Block4">
          <div className="Block4Text">
            <h1> Our Partners </h1>
            <label>Some Text</label>
          </div>
          <div className="Block4Icons">
            <img
              src="https://www.freepnglogos.com/uploads/company-logo-png/file-mobile-apps-development-company-logo-25.png"
              className="Block4Icon"
            ></img>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png"
              className="Block4Icon"
            ></img>
            <img
              src="https://seeklogo.com/images/C/corporate-company-logo-749CEE6ADC-seeklogo.com.png"
              className="Block4Icon"
            ></img>
            <img
              src="https://companieslogo.com/img/orig/MKC_BIG-8d1e0a9f.png?t=1649181002"
              className="Block4Icon"
            ></img>
            <img
              src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-telestream-press-kit-12.png"
              className="Block4Icon"
            ></img>
          </div>
        </div>

        <div className="Block5">
          <div className="Block5Text">
            <img
              className="PhoneImg"
              src="https://cdn0.iconfinder.com/data/icons/basic-uses-symbol-vol-1/100/Call_Phone_Cell_Ring_Pick_up-512.png"
            ></img>
            <div>
              <h4>У вас з'явилися питання?</h4>
              <label>
                Будемо завжди раді відповісти на будь-які ваші запитання за
                номером телефону +38(099)123-45-67
              </label>
            </div>
          </div>

          <img
            className="Block5Photo"
            src="https://callcenterjobs.eu/wp-content/uploads/arbeiten-im-callcenter@2x-1024x683.jpg"
          ></img>
        </div>
      </div>
    </>
  );
};
export default Main;
