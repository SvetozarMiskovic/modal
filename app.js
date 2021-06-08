// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector('.modal-btn');
const modalOvr = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function () {
  modalOvr.classList.add('open-modal');
});

closeBtn.addEventListener('click', function () {
  modalOvr.classList.remove('open-modal');
});

modalOvr.addEventListener('click', function () {
  modalOvr.classList.remove('open-modal');
});
