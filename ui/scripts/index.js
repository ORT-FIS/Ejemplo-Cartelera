import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTabBar} from '@material/tab-bar';
import {MDCTextField} from '@material/textfield';
import {MDCSelect} from '@material/select';
import MovieLogic from '../../business-logic/movie-logic.mjs';
import Movie from '../../domain/movie.mjs';

const movieLogic = new MovieLogic();

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
tabBar.listen("MDCTabBar:activated", (activatedEvent) => {
  document.querySelectorAll(".content").forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove("sample-content--hidden");
    } else {
      element.classList.add("sample-content--hidden");
    }
  });
});

const textFieldTitle = new MDCTextField(document.getElementById('title'));
const textFieldYear = new MDCTextField(document.getElementById('year'));
const selectGenre = new MDCSelect(document.querySelector('.mdc-select'));

const addButton = new MDCRipple(document.getElementById('addButton'));
addButton.listen('click', () => {
    let title = textFieldTitle.value;
    let year = textFieldYear.value;
    let genre = selectGenre.value;
    try {
        let newMovie = new Movie(title, genre, year);
        movieLogic.add(newMovie); 
    } catch (error) {
        alert(error.message);
    } finally{
        let movies = movieLogic.getAll();
        console.log(movies);
    }
})