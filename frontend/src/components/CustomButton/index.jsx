import React from "react";
import "./styles.scss";

export default function CustomButton(props) {
  const { buttonText, customClassName, onClick } = props;
  return (
    <div
      className={`${
        customClassName || ""
      } border-primary border custom-btn from-left`}
      onClick={onClick}
    >
      {buttonText}
    </div>
  );
}
