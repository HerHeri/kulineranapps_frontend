import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import restaurant from '../public/DATA.json';
import cheff from '../public/cheff.json'

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');

hamburgerButtonElement.addEventListener('click', event => {
    drawerElement.classList.toggle('open');
    event.stopPropagation();
});

mainElement.addEventListener('click', event => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
})

const daftarRest = document.getElementById('post-restaurant')

restaurant.restaurants.forEach(daftar => {
    // console.log(daftar);

    const createArticle = document.createElement('article');
    createArticle.innerHTML =
        `<img
            class="post-item__thumbnail"
            src="${daftar.pictureId}"
            alt="Gambar Restaurant ${daftar.name}"
            style="font-size: 12px;"
        />
        <div class="post-item__content">
            <p class="post-item__date">
                <a href="javascript:void(0)" class="post-item__date__author">${daftar.city}</a>
            </p>
            <h1 class="post-item__title">
                <a href="#">${daftar.name} <small style="font-size: 20px">⭐ ${daftar.rating}</small></a>
            </h1>
            <p class="post-item__description">
                ${daftar.description}
            </p>
        </div>`

    createArticle.classList.add('post-item');
    daftarRest.appendChild(createArticle);
});

cheff.cheff.forEach(list => {
    // console.log(list);
})