import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  console.log(props); //{name: 'Beyonce'}name: "Beyonce"[[Prototype]]: Object
  // currently the object just has one property with a value set to Beyonce
  return (
    <div>
      <h2>Beyonce</h2>
      <img
        src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        alt="avatar_img"
      />
      <p>+123 456 789</p>
      <p>b@beyonce.com</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Beyonce" />
    {/**when this card component gets created, it will have a property called name that's set to equal to Beyonce
     * and we can get hold of it by adding a name to the inputs to access those things that sent over, it's customary
     * to call this props
     */}
    <input id="fName" />
  </div>,
  document.getElementById("root")
);
