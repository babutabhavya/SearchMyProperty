import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import "./styles.scss";
import { Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";

// export default function EnquireFloatingButton(props) {
//   return (
//     <div className="floating-button">
//       <FaQuestionCircle className="enquire-floating btn btn-primary" />
//     </div>
//   );
// }

export default function EnquireFloatingButton(props) {
  return (
    <Fab
      icon={<FaQuestionCircle />}
      mainButtonStyles={{ backgroundColor: "white" }}
      event="click"
    ></Fab>
  );
}
