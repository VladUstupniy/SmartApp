let contactsLink = document.querySelector('.nav__contacts--link');
let contacts = document.querySelector('.nav__contacts');
contactsLink.addEventListener('click', ()=> {
    contacts.classList.toggle('open');
})
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("slider__item");

    if (n > slides2.length) {
        slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides2.length
    }
    for (i=0; i<slides2.length; i++) {
        slides2[i].style.display="none";
    }
    slides2[slideIndex2-1].style.display = "flex";
}
let burgerBtn = document.querySelector('.burger');
let popup = document.querySelector('.popupMobile');
let closePopup = document.querySelector('.close__popup');
let wrapperPopup = document.querySelector('.popup__wrapper');

burgerBtn.addEventListener('click', () => {
    wrapperPopup.classList.toggle('popupOpen');
    popup.classList.toggle('popupOpen');
});

closePopup.addEventListener('click', () => {
    wrapperPopup.classList.remove('popupOpen');
    popup.classList.remove('popupOpen');
});
let linkOne = document.querySelector(".features__link--one");
let linkTwo = document.querySelector(".features__link--two");
let linkThree = document.querySelector(".features__link--three");
let linkFour = document.querySelector(".features__link--four");
let linkFive = document.querySelector(".features__link--five");
let stick = document.querySelector(".features__stick");
let cardOne = document.querySelector(".features__card--one");
let cardTwo = document.querySelector(".features__card--two");
let cardThree = document.querySelector(".features__card--three");
let cardFour = document.querySelector(".features__card--four");
let cardFive = document.querySelector(".features__card--five");
function firstStep() {
  cardOne.style.display = "flex";
}
linkOne.addEventListener("click", function (e) {
  e.preventDefault();
  stick.style.top = 45 + "px";
  cardOne.style.display = "flex";
  cardTwo.style.display = "none";
  cardThree.style.display = "none";
  cardFour.style.display = "none";
  cardFive.style.display = "none";
  linkOne.classList.add("features__link--active");
  linkTwo.classList.remove("features__link--active");
  linkThree.classList.remove("features__link--active");
  linkFour.classList.remove("features__link--active");
  linkFive.classList.remove("features__link--active");
});
linkTwo.addEventListener("click", function (e) {
  e.preventDefault();
  stick.style.top = 165 + "px";
  cardOne.style.display = "none";
  cardTwo.style.display = "flex";
  cardThree.style.display = "none";
  cardFour.style.display = "none";
  cardFive.style.display = "none";
  linkOne.classList.remove("features__link--active");
  linkTwo.classList.add("features__link--active");
  linkThree.classList.remove("features__link--active");
  linkFour.classList.remove("features__link--active");
  linkFive.classList.remove("features__link--active");
});
linkThree.addEventListener("click", function (e) {
  e.preventDefault();
  stick.style.top = 285 + "px";
  cardOne.style.display = "none";
  cardTwo.style.display = "none";
  cardThree.style.display = "flex";
  cardFour.style.display = "none";
  cardFive.style.display = "none";
  linkOne.classList.remove("features__link--active");
  linkTwo.classList.remove("features__link--active");
  linkThree.classList.add("features__link--active");
  linkFour.classList.remove("features__link--active");
  linkFive.classList.remove("features__link--active");
});
linkFour.addEventListener("click", function (e) {
  e.preventDefault();
  stick.style.top = 405 + "px";
  cardOne.style.display = "none";
  cardTwo.style.display = "none";
  cardThree.style.display = "none";
  cardFour.style.display = "flex";
  cardFive.style.display = "none";
  linkOne.classList.remove("features__link--active");
  linkTwo.classList.remove("features__link--active");
  linkThree.classList.remove("features__link--active");
  linkFour.classList.add("features__link--active");
  linkFive.classList.remove("features__link--active");
});
linkFive.addEventListener("click", function (e) {
  e.preventDefault();
  stick.style.top = 520 + "px";
  cardOne.style.display = "none";
  cardTwo.style.display = "none";
  cardThree.style.display = "none";
  cardFour.style.display = "none";
  cardFive.style.display = "flex";
  linkOne.classList.remove("features__link--active");
  linkTwo.classList.remove("features__link--active");
  linkThree.classList.remove("features__link--active");
  linkFour.classList.remove("features__link--active");
  linkFive.classList.add("features__link--active");
});
firstStep();
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("clients__slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
