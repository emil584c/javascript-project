window.addEventListener("load", lol);

// Declarations 
function lol() {
  const btnHamburger = document.querySelector('#btnHamburger');
  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  const overlay = document.querySelector('.overlay');
  const fadeElements = document.querySelectorAll('.has-fade')
  const hbmenu = document.querySelector('#hbmenu')

  btnHamburger.addEventListener('click', function () {
    console.log('click hamburger');


    // Close Hamburger menu
    if (header.classList.contains('open')) {
      body.classList.remove('noscroll');
      header.classList.remove('open');
      fadeElements.forEach(function (element) {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
      });

    }

    // Open Hamburger Menu
    else {
      body.classList.add('noscroll');
      header.classList.add('open');
      fadeElements.forEach(function (element) {
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
      });

    }

  });

  // Close Hamburger menu on link
  hbmenu.addEventListener('click', function () {
    console.log('click hb link');


    if (header.classList.contains('open')) {
      body.classList.remove('noscroll');
      header.classList.remove('open');
      fadeElements.forEach(function (element) {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
      });

    }

  });

};


// toggle between hiding and showing the dropdown content
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if click outside of it
onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}