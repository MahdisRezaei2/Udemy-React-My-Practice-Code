/**
 * 1. install dependencies
 * 2. require dependencies
 */

var React = require("react");
var ReactDOM = require("react-dom");

/**
 * render function requires 3 elements, 1.what to show 2.where to show 3. a callbacl to
 * tell us when that render function has completed.
 */

ReactDOM.render(
  <div>
    <h1>hellooo</h1>
    <p>this is a pargraph</p>
  </div>,

  document.getElementById("root")
);

// This is as same as writing this : pure java script

var h1 = document.createElement("h1");
h1.innerHTML = "hellooo";
document.getElementById("root").appendChild(h1);
