$(document).ready(function() {

  var elements = {
    $navBar:      $('nav.nav-bar'),
    $bio:         $('#bio'),
    $img:         $('header .img'),
    $anchorLinks: $('a[href*="#"]:not([href="#"])'),
    $loadSpinner: $('.loading'),
    $docBtn:      $('#doc'),
    $pdfBtn:      $('#pdf'),
    $toggleMenu:  $('.mobile-nav-toggle'),
    $mobileNav:   $('.mobile-nav'),
    $helloBlock:  $('.hello-block')
  };

  setupScroll();
  setupAnchors();

  var url = '../dest/images/for_main.png';

  elements.$pdfBtn.on('click', function() {
    window.location.href = '../../CV/Junior_Front-end_CV_Maksym_Lysenko.pdf';
  });
  elements.$docBtn.on('click', function() {
    window.location.href = '../../CV/Junior_Front-end_CV_Maksym_Lysenko.docx';
  });
  elements.$toggleMenu.on('click', function() {
    $(this).toggleClass('opened');
    elements.$mobileNav.toggleClass('opened');
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

      var wScroll = $(this).scrollTop();

      if (wScroll > elements.$bio.offset().top - parseInt(elements.$navBar.outerHeight())) {
        elements.$navBar.addClass('shown');
      } else {
        elements.$navBar.removeClass('shown');
        if (elements.$mobileNav.hasClass('opened')) {
          elements.$mobileNav.removeClass('opened');
          elements.$toggleMenu.removeClass('opened');
        }

        // elements.$helloBlock.css({
        //   'transform': 'translate(0px, '+ wScroll / 2.5 +'px)'
        // });
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
