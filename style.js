const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav #UI').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
  })

  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500)
  })
  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.navbar');
    scroll.classList.toggle("shadow-sm", window.scrollY > 100)
  })
  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.navbar1');
    scroll.classList.toggle("reduce", window.scrollY > 60)
  })
  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.navbar1 h1');
    scroll.classList.toggle("reduce", window.scrollY > 60)
  })
  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.backtop');
    scroll.classList.toggle("bg-transparent", window.scrollY > 100)
  })

  function openNav(){
    document.getElementById("myNav").classList.toggle("open");
    }

    var mice = document.querySelector('.more');
    mice.style.transition = "1s";
    mice.addEventListener("mouseenter", function(){
      mice.innerHTML = "<b>Shop</b> for more <i class='fa fa-shopping-cart'></i>";
      var micey = document.querySelector('.more i');
    micey.style.transitiondelay = "5s";
    micey.style.transform = "translateX(7px)";

    });
      mice.addEventListener("mouseleave", function(){
        mice.innerHTML = "<b>Shop</b> for more";
    });
    
   

const activepage = window.location.pathname;
const navlinks = document.querySelectorAll('.navbar #UD').forEach(link => {
  if(link.href.includes(`${activepage}`)){
    link.classList.add('active');
  }
  })


  const Page = window.location.pathname;
console.log(Page);
const navs = document.querySelectorAll('.BOW #BET').forEach(link => {
  if(link.href.includes(`${Page}`)){
    link.classList.add('active');
  }
  })



// SIDNAV

let sidebarBtn = document.getElementById("sidebarBtn");
function openSide(){
  document.getElementById("mySidebar").classList.toggle("open");
  
  if(document.getElementById("mySidebar").classList.contains("open")){
    sidebarBtn.innerHTML= "<i class='fa fa-times'></i>";
    }else{
      sidebarBtn.innerHTML= "<i class='fa fa-bars'></i>"   
    }
  }

// SIDNAV