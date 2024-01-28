import React from "react";
import ReactDOM from "react-dom";
//**values for each of the properties gets passed along when this card component is created and when we outpur this
//** html element we can incorparate those properties into the creation of that elemtn and that's why via an input is called props*/ */
function Card(props) {
  console.log(props); //{name: 'Beyonce'}name: "Beyonce"[[Prototype]]: Object
  // currently the object just has one property with a value set to Beyonce
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel=" + 123 568 45"
      email="b@beyonce.com"
    />
    {/**when this card component gets created, it will have a property called name that's set to equal to Beyonce
     * and we can get hold of it by adding a name to the inputs to access those things that sent over, it's customary
     * to call this props
     */}
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel=" + 123 568 45"
      email="j@jackobje.com"
    />
    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel=" + 123 568 45"
      email="c@chucknorrise.com"
    />
  </div>,
  document.getElementById("root")
);

///**about the css classname in the div in the functiion, we can not do the same thing in the custom card component
//** bc inside our custom components, it sees each of these as a custom property, so it thinks that you're making up
//**a name called claasName and would like to access it inside card components, under the props obj instead of seeing it as an HTML attrobute
//so whenever you're using HTML predeterminded attributes, they always have to go into the HTML elements like div, h1
//** yes, classNmae is HTML attribute inside jsx */ */
