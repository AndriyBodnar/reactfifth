import React from "react";
import "./contacts.css";
const Contact = (props) => {
  return (
    <div className="contact">
      <div className="contact__block">
        <div className="contact__info">
          <div className="contact__info-details">
            <h4>
              {props.firstName} {props.lastName}
            </h4>
          </div>
          <div className="contact__info-number">
            <h4>{props.phone}</h4>
          </div>
        </div>
      </div>
      <img src={props.gender} className="contact__gender" alt="gender" />
    </div>
  );
};
export default Contact;
