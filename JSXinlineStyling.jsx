import React from "react";
import ReactDOM from "react-dom";

/**
 * if you write <h1 style="color: red">Hello World!</h1>, it isactually providing a string as the value to the style attribute, it works fine in html
 * but in js, it want the value (color: "red") for the style property as a JS object (not a string), so infact, in js the style is not an attribute it is a property
 * js objects exists in the {}, and they have key value pairs, in this case, they key is the color, which will behave like a variable not a str9ing , the value
 * which is "red" it will be string similar to in terms of css
 * key value pairs are sepeated by comma not semicolons
 * so we end up to : <h1 style={{color: "red"}}>Hello World!</h1>    the value of style property is js obj
 *
 * REMINDER: css properties are kebab cased: lower case lower case seperated by a hyphen, but to use them in js you need to convert them to camal case,
 * example : instead of font-size in css we write font-Size in js
 *
 * values in the key value pairs in the js obj should be string, so instaed of -> border: 1px solid black   it should be "border: 1px solid black"
 */

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

customStyle.color = "hotpink";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
