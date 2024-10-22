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
    scroll.classList.toggle("reduce", window.scrollY )
  })
  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.navbar1 h1');
    scroll.classList.toggle("reduce", window.scrollY)
  })


    function openNav(){
    document.getElementById("myNav").classList.toggle("open");
    }

   

const activepage = window.location.pathname;
const navlinks = document.querySelectorAll('.sidebar #UD').forEach(link => {
  if(link.href.includes(`${activepage}`)){
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
