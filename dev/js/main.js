$(document).ready(function() {

  var elements = {
    $navBar:      $('nav.nav-bar'),
    $bio:         $('#bio'),
    $img:         $('header .img'),
    $anchorLinks: $('a[href*="#"]:not([href="#"])'),
    $loadSpinner: $('.loading'),
    $docBtn:      $('#doc'),
    $pdfBtn:      $('#pdf'),
    $cvButtons:   $('.download button')
  };

  setupScroll();
  setupAnchors();

  var url = '../dest/images/for_main.png',
    docUrl = '';

  elements.$docBtn.data('link', '../../CV/test.doc');
  elements.$docBtn.on('click', function() {
    window.location.href = $(this).data('link');
  });

  $('<img/>').attr('src', url).on('load', function() {
    console.debug('loaded');
    elements.$loadSpinner.remove();
    elements.$img.show();
    elements.$img.addClass('shown');
    elements.$img.css('background-image', 'url(' + url + ')');
  });

  function setupScroll() {
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > elements.$bio.offset().top - parseInt(elements.$navBar.outerHeight())) {
        elements.$navBar.addClass('shown');
      } else {
        elements.$navBar.removeClass('shown');
      }
    });
  }

  function setupAnchors() {
    elements.$anchorLinks.on('click' ,function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - parseInt(elements.$navBar.outerHeight()) + 10
          }, 800);
          return false;
        }
      }
    });
  }

});
