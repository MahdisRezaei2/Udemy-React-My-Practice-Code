
/**Attributes in the jsx should be written in camelcase, even if there is an attibute
 * in htlm that is all in lowercase like conteneditable, it should be in came;case in jsx
 * it should be contentEditable
*/

//** the class attribute in html should be className in JSX */
 
/**in the CSS, you can target classes, ids and html elements just like before 
 * also notice one importatn key that for  html elements like ul, you dont need to bring any attribute to the jsx
*/

/**name convention in css is kebab case, which means all in lower case, seperated in 
 * -
 */

// js as the value of the attribute 


import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellingCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
