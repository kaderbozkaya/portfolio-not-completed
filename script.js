const navMenu = document.getElementById('navbar-menu'),
    navToggle = document.getElementById('navbar-toogle'),
    navClose = document.getElementById('navbar-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const swiper= new Swiper(".project_swiper", {
    loop:true,
    spaceBetween:32,
    grabCursor:true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets:true,
        clickable:true,
    },

})




const themeButton = document.getElementById('theme-button')
let darkTheme = 'dark-theme'
let iconTheme = 'ri-moon-fill' 
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
themeButton.classList.add(localStorage.getItem('selected-icon'))


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => {
  if(localStorage.getItem('selected-icon')=='ri-sun-line')
  {
    return 'ri-moon-fill'
  }
  else{
    return 'ri-sun-line'
  }

}

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
 

}



themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    if(localStorage.getItem('selected-icon')=='ri-moon-fill')
    {
      themeButton.classList.add('ri-sun-line');
      themeButton.classList.remove('ri-moon-fill');
    }
    else{
      themeButton.classList.add('ri-moon-fill');
      themeButton.classList.remove('ri-sun-line')
    }
   
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


