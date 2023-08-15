let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

// Auto Typing Effect
const typed = document.querySelector('.typed');

if(typed){
  let typed_strings = typed.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',');
  new Typed('.typed',{
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}

// Skills Section Starts
$('.technical-container').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTime:6000,
  margin:10,
  nav:true,
  navText:["<i class='fa-solid fa-arrow-left'></i>",
           "<i class='fa-solid fa-arrow-right'></i>"],
  responsive:{
      0:{
          items:1,
          nav:false
      },
      450:{
        items:2,
        nav:true
      },
      700:{
          items:3,
          nav:true
      },
      960:{
          items:4,
          nav:true
      },
      1400:{
        items:5,
        nav:true
    }
  }
})

document.addEventListener("DOMContentLoaded", function() {
  const whatsappButton = document.getElementById("whatsapp-button");

  whatsappButton.addEventListener("click", function(event) {
    event.preventDefault();

    const phoneNumber = "+94762676832";
    const message = "Hi";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  });
});