import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */
import moment from "moment";

console.log(moment().startOf("day").fromNow());

fetch("https://api.github.com/users/karolwasemann/repos")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { name, html_url } = repo;
      const repositoryList = document.querySelector(".api__list--js");
      const myTemplate = `<li>
      ${name} <a href= '${html_url}' title= 'link do repozytorium ${name} na githubie'> link do githuba </a>
      </li>`;
      repositoryList.innerHTML += myTemplate;
    }
  })
  .catch((error) => {
    console.log(error);
  });
