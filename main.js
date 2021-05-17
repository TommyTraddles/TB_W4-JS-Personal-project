// import 'https://kit.fontawesome.com/7da115cf56.js';


// -------------------- Objeto -----------------------



// -------------------- Selectores -------------------
// sticky header
const header = document.querySelector('.header');
// dark theme
const switcher_toggle = document.querySelector('.header__switcher-toggle-switcher');
// Fab
const floating_button = document.querySelector('.floating__button');
const floating_box = document.querySelector('.floating__box');
// Modal
const gallery_card_modal = document.querySelectorAll('.gallery__card-modal');
const modal_overlay = document.querySelector('.modal__overlay');
const modal_container = document.querySelector('.modal__container');
const modal_close= document.querySelector('.modal__close');




// -------------------- Funciones --------------------


// -------------------- Sticky header
function stickyHeader(){
	header.classList.toggle('sticky', window.scrollY > 0);
}
// -------------------- Dark theme
function switchTheme() {
	if (switcher_toggle.checked) {
		document.documentElement.setAttribute('data-theme', 'light')
	} else {
		document.documentElement.setAttribute('data-theme', 'dark')
	}
};
// -------------------- Modal
function openFab() {
	floating_box.classList.toggle('floating__box-active')
};
// -------------------- Modal 
function openModal(){
	console.log('> Probando Modal');
	modal_container.classList.add('modal__container--active');
	modal_overlay.classList.add('modal__overlay--active');
};
function closeModal(){
	console.log('> Probando Close');
	modal_container.classList.remove('modal__container--active');
	modal_overlay.classList.remove('modal__overlay--active');
};




// -------------------- Eventos ---------------------

// sticky
window.addEventListener('scroll', stickyHeader)
// dark
switcher_toggle.addEventListener('click', switchTheme);
// Fab
floating_button.addEventListener('click', openFab);
// Modal
gallery_card_modal.forEach(selector => {
	selector.addEventListener('click', openModal);
}); 
modal_close.addEventListener('click', closeModal);
