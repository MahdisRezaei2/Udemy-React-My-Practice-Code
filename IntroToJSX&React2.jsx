// import dependencies

import React from "react";
import ReactDOM from "react-dom";

// use render method, need two things :(WHAT TO SHOW, WHERE TO SHOW IT)
/**
 * render method can only accept one element for WHAT TO SHOW part, so you can add all of them in
 * one div, o then you will only render a single element, now one html element  have 2
 * children
 */
/**
 *  <li />  self closing tag, similar to img and link
 */

ReactDOM.render(
  <div>
    <h1>My favourite foods</h1>
    <ul>
      <li>Kabab</li>
      <li>Ghormeh sabzi</li>
      <li>pizza</li>
    </ul>
  </div>,

  document.getElementById("root")
);
