import React from "react";
import {
  FaCity,
  FaLocationArrow,
  FaRupeeSign,
  FaRulerCombined,
  FaPersonBooth,
  FaUnlockAlt,
} from "react-icons/fa";

export function getAttributeIcon(title, color) {
  return {
    Type: <FaCity size={60} color={color} />,
    Location: <FaLocationArrow size={55} color={color} />,
    Price: <FaRupeeSign size={55} color={color} />,
    Sizes: <FaRulerCombined size={50} color={color} />,
    Bedrooms: <FaPersonBooth size={50} color={color} />,
    Possession: <FaUnlockAlt size={50} color={color} />,
  }[title];
}
