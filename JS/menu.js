const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger")

const mobileMenu = document.querySelector(".header .nav-bar .nav-list ul")

const header = document.querySelector(".header.container")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    mobileMenu.classList.toggle("active")
})

document.addEventListener("scroll" , () => {
    const scrollPosition = window.scrollY
    if(scrollPosition > 250){
        header.style.backgroundColor = "#29323c"
    } else {
        header.style.backgroundColor = "transparent"
    }
})


// CAROUSEL

var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        },
    }
  });