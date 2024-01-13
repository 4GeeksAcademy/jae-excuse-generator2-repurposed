/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
};



let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pinecone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let posession = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];



  function random(Indx) {
    return Math.floor(Math.random() * Indx.length);
  }

  

  return (
    pronoun[random(pronoun)] +
    " " +
    subject[random(subject)] +
    " " +
    action[random(action)] +
    " " +
    posession[random(posession)] +
    " " +
    where[random(where)]
  );
};
