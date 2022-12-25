import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});
hero.addEventListener('click', function () {
  drawer.classList.remove('open');
});
main.addEventListener('click', function () {
  drawer.classList.remove('open');
});

document.addEventListener('DOMContentLoaded', function () {
  const listdata = data.restaurants;
  listdata.forEach(element => {
    const cardlist = document.querySelector('.card-list');
    cardlist.innerHTML += `
        <div id="card-list">
        <article class="card-content">
        <img class="thumbnail"src="${element.pictureId}" alt="restaurant image">
          <div class="card" tabindex="0">
            <span>&starf; ${element.rating}</span>
            <h3>Name: ${element.name}<br>City: ${element.city}</h3>
            <p class="description">${element.description}</p>
          </div>
          </article>
        </div>
        `
  });
});