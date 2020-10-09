import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./styles.scss";

export default function SocialMediaButtons(props) {
  const { isMobile } = props;
  const iconSize = isMobile ? 35 : 40;
  return (
    <div className="social-media">
      <a href="#">
        <article>
          <span>
            <FaFacebookF size={iconSize} />
          </span>
        </article>
      </a>
      <a href="#">
        <article>
          <span>
            <FaTwitter size={iconSize} />
          </span>
        </article>
      </a>
      <a href="#">
        <article>
          <span>
            <FaInstagram size={iconSize} />
          </span>
        </article>
      </a>
    </div>
  );
}
