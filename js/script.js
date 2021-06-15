const selColor = document.querySelector(".select-goods__select-colors");
const topImage = document.querySelector('.select-goods__top-image');

selColor.addEventListener('click', function (ev) {
  let removeActiveClass = document.querySelectorAll(".good__color");
  let selImage = ev.target.getAttribute('data-link');
  if (selImage !== null) {
    topImage.setAttribute('src', selImage);
  }
  removeActiveClass.forEach(function (item) {
    item.classList.remove("good__color--active");
    ev.target.classList.add('good__color--active');
    selColor.classList.remove("good__color--active");
  })
})
