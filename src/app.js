/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = [
    "My neighbor ",
    "The dog ",
    "Spiderman ",
    "The Principal ",
    "My dad "
  ];
  let action = ["ate ", "peed on ", "crushed ", "broke ", "tore up "];

  let what = [
    "my homework ",
    "my laptop ",
    "the car ",
    "my shoes ",
    "my clothes "
  ];

  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let whaIndx = Math.floor(Math.random() * what.length);
  let wheIndx = Math.floor(Math.random() * when.length);

  return (
    who[whoIndx] +
    "" +
    action[actIndx] +
    "" +
    what[whaIndx] +
    "" +
    when[wheIndx]
  );
};
