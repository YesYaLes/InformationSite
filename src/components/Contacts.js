import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <>
      <div className="Contacts">
        <div
          className="Block1Contacts"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <div className="Block1ContactsContent">
            <h2>Contacts</h2>
            <div className="Block1ContactsInfo">
              <img
                src="https://cdn0.iconfinder.com/data/icons/basic-uses-symbol-vol-1/100/Call_Phone_Cell_Ring_Pick_up-512.png"
                className="Block1ContactsInfoImg"
              ></img>
              <label>+380669842615</label>
            </div>
            <div className="Block1ContactsInfo">
              <img
                src="https://cdn-icons-png.flaticon.com/512/666/666162.png"
                className="Block1ContactsInfoImg"
              ></img>
              <label>yesyales04@gmail.com</label>
            </div>

            <div className="Block1ContactsInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                className="Block1ContactsInfoImg"
              ></img>
              <label>+380669842615</label>
            </div>
            <div className="Block1ContactsInfo">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111705.png"
                className="Block1ContactsInfoImg"
              ></img>
              <label>+380669842615</label>
            </div>
          </div>
          <div className="Block1ContactsMapBlock">
            <iframe
              className="Block1ContactsMap"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4267.476223964819!2d30.494741375819203!3d50.507071571694176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1677172345552!5m2!1sru!2sua"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contacts;
