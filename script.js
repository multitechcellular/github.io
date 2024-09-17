document.addEventListener("DOMContentLoaded", function () {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarNav = document.querySelector("#navbarNav");

  document.querySelectorAll("#navbarNav .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.getComputedStyle(navbarNav).display !== "none") {
        navbarToggler.click(); // Simulate click to close the menu
      }
    });
  });
});

// Menyembunyikan konten ketika pengguna menekan Control + U
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'u') {
      event.preventDefault();
      document.getElementById('hidden-content').style.display = 'none';
  }
});