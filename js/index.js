console.log('yo');
const studyButtonActive = document.querySelector('.study__tab-bar_btn_active');
const studyButtonAspirant = document.querySelector(
  '.study__tab-bar_btn_aspirant'
);
const studyButtonMagistr = document.querySelector(
  '.study__tab-bar_btn_magistr'
);
const studyCardImage = document.querySelector('.study-card__img');
//
studyButtonAspirant.addEventListener('click', () => {
  studyButtonAspirant.classList.toggle('study__tab-bar_btn_active');
  studyButtonMagistr.classList.remove('study__tab-bar_btn_active');
  studyCardImage.src = './images/Study/Aspirant.png';
});
studyButtonMagistr.addEventListener('click', () => {
  studyButtonAspirant.classList.remove('study__tab-bar_btn_active');
  studyButtonMagistr.classList.toggle('study__tab-bar_btn_active');
  studyCardImage.src = './images/Study/Magistr.png';
});
