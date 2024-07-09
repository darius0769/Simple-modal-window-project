'use strict';

//INITIALISING
const btnShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//FUNCTION TO CLOSE MODAL WINDOW
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

//WHEN CLICKING ON SHOW MODAL BUTTONS
for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

btnCloseModal.addEventListener('click', closeModal); //CLICKING CLOSE BUTTON TO CLOSE MODAL WINDOW

overlay.addEventListener('click', closeModal); //CLICKING ON OVERLAY TO CLOSE MODAL WINDOW

//CLICKING 'Esc' KEY ON KEYBOARD TO CLOSE MODAL WINDOW
document.addEventListener('keydown', function (e) {
  //   console.log(e.code);
  if (e.code === 'Escape') {
    if (!modal.classList.contains('hidden')) closeModal();
  }
});
