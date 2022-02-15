import React from "react";
import SolidButton from "../SolidButton/SolidButton";
import feedback from "../../img/feedback.svg";
import comeBackLater from "../../img/comeBackLater.svg";
import "./ComeBackFeedback.css";

const ComeBackFeedback = () => {
  return (
    <div className="comeback-feedback">
      <div className="comeback-container">
        <div className="comeback-text">
          <p>
            <strong>Come back later?</strong>
            <br />
            You can come back later and your pathway will be saved!
            <br />
            Alternatively, you can{" "}
            <a href="/quiz" rel="noreferrer noopener">
              start over
            </a>{" "}
            or export it.
          </p>
        </div>

        <img
          id="comeback-image"
          src={comeBackLater}
          alt="design of a person walking in a forest"
        />
      </div>

      <div className="feedback-container">
        <img
          src={feedback}
          alt="design of a person holding a purple message box"
        />

        <div className="feedback-text">
          <p id="feedback-paragraph">
            <strong>Have any feedback?</strong>
            <br />
            We want to hear from you!
          </p>

          <a id="contact-us" href="https://forms.gle/ANBjEcXLut27WAgc7">
            <SolidButton
              className="contact-us-button"
              text="Contact Us"
              onClick={() => {}}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComeBackFeedback;
