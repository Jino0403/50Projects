const toggle = document.querySelector('.toggle')
const container = document.querySelector('.container')

toggle.addEventListener('click', () => {
  container.classList.toggle('dark')
    ? (toggle.firstElementChild.className = 'far fa-moon')
    : (toggle.firstElementChild.className = 'far fa-sun')
})
