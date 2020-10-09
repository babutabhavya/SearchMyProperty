import React from "react";
import "./styles.scss";

export default function ResaleRow(props) {
  const { resale } = props;
  const { title } = resale;
  return (
    <div className="resale-row pt-2 pl-4">
      <div className="text-left">
        <p>{title}</p>
      </div>
    </div>
  );
}
