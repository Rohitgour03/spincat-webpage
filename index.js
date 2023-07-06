const toggleBtn = document.querySelector('.menu-icon')
const navLinks = document.querySelector('.nav-links')
const navCtaCtn = document.querySelector('.nav-cta-ctn')


toggleBtn.addEventListener('click', (e) => {
  navLinks.classList.toggle('show')
  navCtaCtn.classList.toggle('show')
})