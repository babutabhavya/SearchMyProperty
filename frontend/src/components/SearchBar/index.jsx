import React from "react";
import "./styles.scss";

export default function SearchBar(props) {
  return (
    <div id="cover">
      <form method="get" action="">
        <div class="tb">
          <div class="td">
            <input
              className="searchbar-input"
              type="text"
              placeholder="Search my property"
              required
            />
          </div>
          <div class="td" id="s-cover">
            <button className="searchbar-button" type="submit">
              <div id="s-circle" />
              <span></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
