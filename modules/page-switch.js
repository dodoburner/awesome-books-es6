const navLinks = document.querySelectorAll('.nav-link');
const listPage = document.querySelector('.list');
const addPage = document.querySelector('.add');
const contactPage = document.querySelector('.contact');

const pageSwitch = () => {
  navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
      if (index === 0) {
        listPage.classList.remove('hide');
        addPage.classList.add('hide');
        contactPage.classList.add('hide');
        navLinks[0].classList.add('blue');
        navLinks[1].classList.remove('blue');
        navLinks[2].classList.remove('blue');
      } else if (index === 1) {
        listPage.classList.add('hide');
        addPage.classList.remove('hide');
        contactPage.classList.add('hide');
        navLinks[0].classList.remove('blue');
        navLinks[1].classList.add('blue');
        navLinks[2].classList.remove('blue');
      } else {
        listPage.classList.add('hide');
        addPage.classList.add('hide');
        contactPage.classList.remove('hide');
        navLinks[0].classList.remove('blue');
        navLinks[1].classList.remove('blue');
        navLinks[2].classList.add('blue');
      }
    });
  });
};

export default pageSwitch;
