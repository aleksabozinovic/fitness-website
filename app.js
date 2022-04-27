'use strict';

const learnMore = document.querySelector('.learn--more');
const secondSection = document.querySelector('.second--section');
const header = document.querySelector('.header');
const nav = document.querySelector('nav');
const navHeight = nav.getBoundingClientRect().height;
const sections = document.querySelectorAll('.section');
const navLink = document.querySelector('.nav__link');
const radio = document.querySelector('.third--section__radio');
const cards = document.querySelectorAll('.third--section__card');
const preCards = document.querySelector('.third--section__cards');
const leftBtn = document.querySelector('.fourth--section__left');
const rightBtn = document.querySelector('.fourth--section__right');
const fSecCards = document.querySelector('.fourth--section__cards');
const fSecAllCards = document.querySelectorAll('.fourth--section__card');
const fifthButton = document.querySelector('.fifth--section__button');
const navFLine = document.querySelector('.line1');
const navSLine = document.querySelector('.line2');
const navRight = document.querySelector('.nav--right');
const burger = document.querySelector('.burger');

burger.addEventListener('click', function (e) {
  navFLine.classList.toggle('active');
  navSLine.classList.toggle('active');
  burger.classList.toggle('iks');
  if (burger.classList.contains('iks')) {
    navRight.classList.add('active');
  } else {
    navRight.classList.remove('active');
  }
});

learnMore.addEventListener('click', function (e) {
  e.preventDefault();
  secondSection.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav--right').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
navObserver.observe(header);

// SECTION REVEAL
const sectionsReveal = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(sectionsReveal, {
  root: null,
  threshold: 0.15,
});

sections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// BLUR IMAGES
const blurredImages = document.querySelectorAll('div[data-track]');

const lazyReveal = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('lazy-img');

  observer.unobserve(entry.target);
};

const imagesObserver = new IntersectionObserver(lazyReveal, {
  root: null,
  threshold: 0.7,
});

blurredImages.forEach(image => {
  image.classList.add('lazy-img');
  imagesObserver.observe(image);
});

// NAV BLUR
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('h1');
    siblings.forEach(e => {
      if (e !== link) e.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.3));
nav.addEventListener('mouseout', handleHover.bind(1));

//
radio.classList.add('active');

radio.addEventListener('click', function (e) {
  const name = e.target;

  name.classList.toggle('active');
  // preCards.innerHTML = '';
  if (!name.classList.contains('active')) {
    const html = ` <!-- FIRST CARD -->
    <div class="first--card third--section__card">
      <h3><span>Student</span> Plan</h3>
      <p id = "third--section__p"><span id = "third--section__span">€250</span>/ Year</p>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>Free wi-fi</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>Unlimited gym access</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>Free fitness consultation</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>10% off drinks</p>
      </div>
      <button class="third--section__btn btn">Join now</button>
    </div>
  
    <!-- SECOND CARD -->
    <div class="second--card third--section__card">
      <h3><span>Basic </span>Plan</h3>
      <p id = "third--section__p"><span id = "third--section__span">€350</span>/ Year</p>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>Free wi-fi</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>Unlimited gym access</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>Free fitness consultation</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>10% off drinks</p>
      </div>
      <button class="third--section__btn btn">Join now</button>
    </div>
  
    <!-- THIRD CARD -->
    <div class="third--card third--section__card">
      <h3><span >Premium </span>Plan</h3>
      <p id = "third--section__p"><span id = "third--section__span">€600</span>/ Year</p>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>All features</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>35% off drinks</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>Personal trainers</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>All training programs</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>35% off clothes & equipments</p>
      </div>
      <button class="third--section__btn btn">Join now</button>
    </div>
    `;
    preCards.innerHTML = html;
  } else {
    const html = ` <!-- FIRST CARD -->
    <div class="first--card third--section__card">
      <h3><span>Student</span> Plan</h3>
      <p id = "third--section__p"><span id = "third--section__span">€25</span>/ Month</p>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>Free wi-fi</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>Unlimited gym access</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>Free fitness consultation</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>10% off drinks</p>
      </div>
      <button class="third--section__btn btn">Join now</button>
    </div>
  
    <!-- SECOND CARD -->
    <div class="second--card third--section__card">
      <h3><span>Basic </span>Plan</h3>
      <p id = "third--section__p"><span id = "third--section__span">€35</span>/ Month</p>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>Free wi-fi</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>Unlimited gym access</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>Free fitness consultation</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>10% off drinks</p>
      </div>
      <button class="third--section__btn btn">Join now</button>
    </div>
  
    <!-- THIRD CARD -->
    <div class="third--card third--section__card">
      <h3><span >Premium </span>Plan</h3>
      <p id = "third--section__p"><span id = "third--section__span">€60</span>/ Month</p>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>All features</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>35% off drinks</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>Personal trainers</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>All training programs</p>
      </div>
      <div class="third--section__text">
        <img src="./Images/true-img.png" alt="" />
        <p>35% off clothes & equipments</p>
      </div>
      <button class="third--section__btn btn">Join now</button>
    </div>
    `;
    preCards.innerHTML = html;
  }
});

//
const maxSlides = fSecAllCards.length;
let curSlide = 0;

const goSlide = function (slide) {
  fSecAllCards.forEach((e, i) => {
    e.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

leftBtn.addEventListener('click', function (e) {
  if (curSlide === 0) {
    curSlide = maxSlides - 1;
  } else {
    curSlide--;
  }
  goSlide(curSlide);
});

rightBtn.addEventListener('click', function (e) {
  if (curSlide === maxSlides - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goSlide(curSlide);
});

// ADD DOTS

//
fifthButton.addEventListener('click', function (e) {
  const email = document.querySelector('.email-input').value;
  const confirmEmail = document.querySelector('.confirm-email').value;

  if (email === confirmEmail) {
    document
      .querySelectorAll('.fifth-section input')
      .forEach(e => (e.value = ''));
  } else {
    alert('E-mail does not match, Check it!');
  }
});
