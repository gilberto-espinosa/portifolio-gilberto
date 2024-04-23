document.addEventListener('DOMContentLoaded', (event) => {
  var navbarLinks = document.querySelectorAll('#navbarSupportedContent .nav-link');

  navbarLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          var bsCollapse = document.getElementById('navbarSupportedContent');
          var bootstrapCollapse = new bootstrap.Collapse(bsCollapse);
          bootstrapCollapse.hide();
      });
  });
});
