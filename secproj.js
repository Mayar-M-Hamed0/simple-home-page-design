let searchform = document.querySelector(".searchForm");
document.getElementById("searchbtn").onclick = () => {
  searchform.classList.toggle("active");
  shopping.classList.remove("active");
  login.classList.remove("active");
  menebyn.classList.remove("active");
};
let shopping = document.querySelector(".shopping-cart");
document.getElementById("shopping-cartbtn").onclick = () => {
  shopping.classList.toggle("active");
  searchform.classList.remove("active");
  login.classList.remove("active");
  menebyn.classList.remove("active");
};
let login = document.querySelector(".login");
document.getElementById("loginbtn").onclick = () => {
  login.classList.toggle("active");
  searchform.classList.remove("active");
  shopping.classList.remove("active");
  menebyn.classList.remove("active");
};
let menebyn = document.querySelector(".navbar");
document.getElementById("menubtn").onclick = () => {
  menebyn.classList.toggle("active");
  searchform.classList.remove("active");
  shopping.classList.remove("active");
  login.classList.remove("active");
};
window.onscroll = () => {
  searchform.classList.remove("active");
  shopping.classList.remove("active");
  login.classList.remove("active");
  menebyn.classList.remove("active");
};

var swiper = new Swiper(".prod-container", {
  loop: true,
    spaceBetween: 20,
  autoplay:{
    delay:7500,
    disableOnInteraction:false,
  },
  centeredSlides:true,
  breakpoints: {
   0: {
      slidesPerView: 1,
    
    },
    768: {
      slidesPerView: 2,
    
    },
    1020: {
      slidesPerView: 3,
   
    },
  },
});
var swiper = new Swiper(".review-container", {
  loop: true,
    spaceBetween: 20,
  autoplay:{
    delay:7500,
    disableOnInteraction:false,
  },
  centeredSlides:true,
  breakpoints: {
   0: {
      slidesPerView: 1,
    
    },
    768: {
      slidesPerView: 2,
    
    },
    1020: {
      slidesPerView: 3,
   
    },
  },
});
