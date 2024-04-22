document.addEventListener('DOMContentLoaded', (event) => {
  var offcanvasLinks = document.querySelectorAll('#offcanvasNavbar .dropdown-item');

  offcanvasLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          var bsOffcanvas = document.getElementById('offcanvasNavbar');
          var bootstrapOffcanvas = bootstrap.Offcanvas.getInstance(bsOffcanvas);
          bootstrapOffcanvas.hide();
      });
  });
});