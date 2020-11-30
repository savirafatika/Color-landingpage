const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')
const backToTopButton = document.querySelector("#back-to-top-btn");

// Display Mobile Menu
const mobileMenu = () => {
   menu.classList.toggle('is-active')
   menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// show active menu when scrolling
const highlightMenu = () => {
   const elem = document.querySelector('.highlight')
   const homeMenu = document.querySelector('#home-page')
   const aboutMenu = document.querySelector('#about-page')
   const servicesMenu = document.querySelector('#services-page')
   let scrollPos = window.scrollY

   // adds 'highlight' class to my menu items
   if (window.innerWidth > 960 && scrollPos < 600) {
      homeMenu.classList.add('highlight')
      aboutMenu.classList.remove('highlight')
      return
   } else if (window.innerWidth > 960 && scrollPos < 1400) {
      aboutMenu.classList.add('highlight')
      homeMenu.classList.remove('highlight')
      servicesMenu.classList.remove('highlight')
      return
   } else if (window.innerWidth > 960 && scrollPos < 2345) {
      servicesMenu.classList.add('highlight')
      aboutMenu.classList.remove('highlight')
      return
   }

   if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove('highlight')
   }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

// Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
   const menuBars = document.querySelector('.is-active')
   if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is_active')
      menuLinks.classList.remove('active')
   }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
   if (window.pageYOffset > 300) { // Show backToTopButton
      if(!backToTopButton.classList.contains("btnEntrance")) {
         backToTopButton.classList.remove("btnExit");
         backToTopButton.classList.add("btnEntrance");
         backToTopButton.style.display = "block";
      }
   }
   else { // Hide backToTopButton
      if(backToTopButton.classList.contains("btnEntrance")) {
         backToTopButton.classList.remove("btnEntrance");
         backToTopButton.classList.add("btnExit");
         setTimeout(function() {
         backToTopButton.style.display = "none";
         }, 600);
      }
   }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
   const targetPosition = 0;
   const startPosition = window.pageYOffset;
   const distance = targetPosition - startPosition;
   const duration = 450;
   let start = null;
   
   window.requestAnimationFrame(step);

   function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
   }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

new Typed('#typed',{
   strings : ['HTML','CSS','Javascript'],
   typeSpeed : 200,
   delaySpeed : 100,
   loop : true
})