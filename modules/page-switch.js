const navLinks = document.querySelectorAll('.nav-link');
const listPage = document.querySelector('.list');
const addPage = document.querySelector('.add');
const contactPage = document.querySelector('.contact');

export default () => {
  navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
      if (index === 0) {
        listPage.classList.remove('hide')
        addPage.classList.add('hide')
        contactPage.classList.add('hide')
      } else if (index === 1) {
        listPage.classList.add('hide')
        addPage.classList.remove('hide')
        contactPage.classList.add('hide')
      } else {
        listPage.classList.add('hide')
        addPage.classList.add('hide')
        contactPage.classList.remove('hide')
      }
    })
  });
}
