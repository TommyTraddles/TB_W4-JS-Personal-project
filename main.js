'use strict'



// --------------------- Objeto ✅
let projects = [
	{
		id: 1,
		name: "Mundo ácido",
		urlProd: "https://tommytraddles.github.io/TheBridge_W2-CSS-mundo-acido/",
		urlRepo: "https://github.com/TommyTraddles/TheBridge_W2-CSS-mundo-acido",
		tags: [
			"html",
			"css"
		],
		description: "Sed molestie egestas ex. Sed et massa a ex tristique hendrerit. Duis ipsum erat, ornare ut mauris quis, mattis bibendum eros. ",
		kpiHour: 10,
		kpiLines: 30,
		kpiWeigth: 200
	},
	{
		id: 2,
		name: "Contactos copleros",
		urlProd: "https://tommytraddles.github.io/TheBridge_W2-CSS-contactos-copleros/",
		urlRepo: "https://github.com/TommyTraddles/TheBridge_W2-CSS-contactos-copleros",
		tags: [
			"html",
			"css"
		],
		description: "Sed molestie egestas ex. Sed et massa a ex tristique hendrerit. Duis ipsum erat, ornare ut mauris quis, mattis bibendum eros. ",
		kpiHour: 10,
		kpiLines: 30,
		kpiWeigth: 200
	},
	{
		id: 3,
		name: "Quiz app",
		urlProd: "https://tommytraddles.github.io/TB_W3-JS_4-Quiz/",
		urlRepo: "https://github.com/TommyTraddles/TB_W3-JS_4-Quiz",
		tags: [
			"javascript",
			"html",
			"css"
		],
		description: "Sed molestie egestas ex. Sed et massa a ex tristique hendrerit. Duis ipsum erat, ornare ut mauris quis, mattis bibendum eros. ",
		kpiHour: 10,
		kpiLines: 30,
		kpiWeigth: 200
	},
	{
		id: 4,
		name: "Sandbox project",
		urlProd: "https://tommytraddles.github.io/",
		urlRepo: "https://github.com/TommyTraddles/TommyTraddles.github.io",
		tags: [
			"javascript",
			"html",
			"css"
		],
		description: "Sed molestie egestas ex. Sed et massa a ex tristique hendrerit. Duis ipsum erat, ornare ut mauris quis, mattis bibendum eros. ",
		kpiHour: 10,
		kpiLines: 30,
		kpiWeigth: 200
	}
];









// --------------------- Shell card ✅
const gallery = document.querySelector(".gallery");
function seeProjects() {
	for (const project in projects) {
		const shell_gallery_card = document.createElement('div');
		shell_gallery_card.className = 'gallery__card';
		shell_gallery_card.innerHTML =
			'<div class="gallery__card-title">' /* + projects[project].id + '. '*/ + projects[project].name + '</div>'
			+ '<div class="gallery__card-buttons">'
			+ '<button class="gallery__card-play btn--s" id="'+projects[project].id+'" onClick="playOnSandbox(this.id)">Play</button>'
			+ '<button class="gallery__card-modal btn--s btn--white" id="'+projects[project].id+'" onClick="defineModal(this.id)">More info</button> '
			+ '</div>';
		gallery.prepend(shell_gallery_card);
	};
};
seeProjects();









// -------------------- Modal 
const gallery_card_modal = document.querySelectorAll('.gallery__card-modal');
const modal_container = document.querySelector('.modal__container');
const modal_info = document.querySelector('.modal__info');
const modal_close = document.querySelector('.modal__close');
const modal_overlay = document.querySelector('.modal__overlay');
const gallery_card_title = document.querySelector('.gallery__card-title');


/* for each tag ❌ */

function defineModal(id) {
	let shell_modal_card = document.createElement('div');
	shell_modal_card.className = 'modal__info';
	shell_modal_card.innerHTML =
		'<div class="modal__info-title""> <a href="' + projects[id-1].urlRepo + '" target="_blank"> ' + projects[id-1].name + ' 🔗 </a> </div>'
		+ '<div class="modal__info-badges"> <span> ' + projects[id-1].tags[0] + ' </span> </span></div>'
		+ '<div class="modal__info-desc"> <p> ' + projects[id-1].description + ' </p> </div>'
		+ '<div class="modal__info-kpi">'
		+ '<div class="modal__info-kpi-hours"><div class="--number"> ' + projects[id-1].kpiHour + ' </div><div class="--footnote">hours</div></div>'
		+ '<div class="modal__info-kpi-lines"><div class="--number"> ' + projects[id-1].kpiLines + ' </div><div class="--footnote">commented lines of code</div></div>'
		+ '<div class="modal__info-kpi-weight"><div class="--number"> ' + projects[id-1].kpiWeigth + ' </div><div class="--footnote">file weight</div></div>'
		+ '</div>';
	modal_container.appendChild(shell_modal_card); /* anunca deja de aparcer objeto  */
	openModal()
}


// abrir y cerrar ✅
function openModal() {
	modal_container.classList.add('modal__container--active');
	modal_overlay.classList.add('modal__overlay--active');
};


function closeModal() {
	modal_container.classList.remove('modal__container--active');
	modal_overlay.classList.remove('modal__overlay--active');
	// Revisar mejor solución
	let modal_info = document.querySelector('.modal__info');
	modal_container.removeChild(modal_info);
};


// gallery_card_modal.forEach(selector => {
// 	selector.addEventListener('click', defineModal);
// });
modal_close.addEventListener('click', closeModal);









// --------------------- Random project ✅
const sandbox_random = document.querySelector('.sandbox__buton');
const sandbox_url = document.querySelector('.sandbox__iframe');
const sandbox_name = document.querySelector('.sandbox__name');
function randomProject() {
	let roll_the_dice = ~~(Math.random() * projects.length);
	let shell_sandbox_url = '<iframe src="' + projects[roll_the_dice].urlProd + '"></iframe>'
	let shell_sandbox_name = '<p>' + projects[roll_the_dice].name + '</p>'
	sandbox_url.innerHTML = shell_sandbox_url;
	sandbox_name.innerHTML = shell_sandbox_name;
}
sandbox_random.addEventListener('click', randomProject);








// --------------------- Shell sandbox ❌

function playOnSandbox(id){
	console.log(id);
}









// -------------------- Sticky header ✅
const header = document.querySelector('.header');
function stickyHeader() {
	header.classList.toggle('sticky', window.scrollY > 0);
}
window.addEventListener('scroll', stickyHeader)










// -------------------- Dark theme ✅
const switcher_toggle = document.querySelector('.header__switcher-toggle-switcher');
function switchTheme() {
	if (switcher_toggle.checked) {
		document.documentElement.setAttribute('data-theme', 'light')
	} else {
		document.documentElement.setAttribute('data-theme', 'dark')
	}
};
switcher_toggle.addEventListener('click', switchTheme);










// -------------------- Fab ✅
const floating_button = document.querySelector('.floating__button');
const floating_box = document.querySelector('.floating__box');
function openFab() {
	floating_box.classList.toggle('floating__box-active')
};
floating_button.addEventListener('click', openFab);






