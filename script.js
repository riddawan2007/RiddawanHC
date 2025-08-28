// เลือกปุ่ม toggle และ ul menu
const menuToggle = document.querySelector('.menu-toggle');
const menuUl = document.querySelector('.menu ul');

menuToggle.addEventListener('click', () => {
    menuUl.classList.toggle('show');
});
