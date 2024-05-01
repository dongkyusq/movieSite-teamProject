const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modal_btn');
const modalClose = document.querySelector('.modal_close');


const loginForm = document.getElementById('loginForm');

const idInput = document.getElementById('idInput');
const pwInput = document.getElementById('pwInput');

modalOpen.addEventListener('click', function() {
    modal.classList.add('on');
});

modalClose.addEventListener('click', function() {
    modal.classList.remove('on');
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(idInput.value);
    console.log(pwInput.value);
});