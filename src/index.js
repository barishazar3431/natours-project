const menuBtn = document.querySelector('.navigation__button');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', (event) => {
  navigation.classList.toggle('active');
});

const popup = document.querySelector('.popup');
const discoverBtn = document.querySelector('[data-discover-btn]');

discoverBtn.addEventListener('click', () => {
  popup.classList.add('active');
});

const cancelBtn = document.querySelector('.popup__cancel-btn');

const closePopup = function (evt) {
  if (evt.target === evt.currentTarget) {
    popup.classList.remove('active');
  }
};

cancelBtn.addEventListener('click', () => {
  popup.classList.remove('active');
});

popup.addEventListener('click', closePopup);
