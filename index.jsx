/**
 * Components : make the code more usable
 * The function name for creating components should be in Pascal case : first letter of words in upper case, this is what helps react to distinguish react component from html component
 */


import React from "react";
import ReactDOM from "react-dom";

function Heading () {
    // returning htm element
    // use this custom heading component inside my React code as if it was an HTML  element 
    return <h1>My favourite foods</h1>;
}

ReactDOM.render(
    // if we have a html element that has no children, which means nothing in between the opening and closing tags, the best practice is to actually have a self closing 
    // so the name of the component, a space, a forward slash and the closing angle bracket, so instead of <Heading></Heading>  having this :  <Heading /> 
    <div>
      <Heading /> 
      <ul>
        <li>Kabab</li>
        <li>Ghormeh sabzi</li>
        <li>pizza</li>
      </ul>
    </div>,
  
    document.getElementById("root")
  );
  