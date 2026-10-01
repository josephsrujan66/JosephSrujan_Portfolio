/**
* Template Name: Personal - v2.1.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Nav Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if (hash == '#header') {
          $('#header').removeClass('header-top');
          $("section").removeClass('section-show');
          return;
        }

        if (!$('#header').hasClass('header-top')) {
          $('#header').addClass('header-top');
          setTimeout(function() {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');
          }, 350);
        } else {
          $("section").removeClass('section-show');
          $(hash).addClass('section-show');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        return false;

      }
    }
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $('#header').addClass('header-top');
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      setTimeout(function() {
        $("section").removeClass('section-show');
        $(initial_nav).addClass('section-show');
      }, 350);
    }
  }

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });


/* =======================================================
     DYNAMIC PPT SLIDESHOW LOGIC (Supports Multiple Projects)
  ========================================================== */

  // 1. Store all your projects here
  var projectData = {
    'mpe': {
      repo: "https://github.com/josephsrujan66/Multi_purpose_E-card_system",
      slides: [
        "assets/img/project/mpe/1.png", "assets/img/project/mpe/2.png",
        "assets/img/project/mpe/3.png", "assets/img/project/mpe/4.png",
        "assets/img/project/mpe/5.png", "assets/img/project/mpe/6.png",
        "assets/img/project/mpe/7.png", "assets/img/project/mpe/8.png"
      ]
    },
    'gate': {
      repo: "https://github.com/josephsrujan66/SMART_GATE_KEEPING",
      slides: [
        "assets/img/project/smg/1.png", "assets/img/project/smg/2.png",
        "assets/img/project/smg/3.png", "assets/img/project/smg/4.png",
        "assets/img/project/smg/5.png", "assets/img/project/smg/6.png",
        "assets/img/project/smg/7.png", "assets/img/project/smg/8.png"
      ]
    },
    'hcp': {
      repo: "https://github.com/josephsrujan66/Hotel-booking-status-using-ML/",
      slides: [
        "assets/img/project/hcp/1.png", "assets/img/project/hcp/2.png",
        "assets/img/project/hcp/3.png", "assets/img/project/hcp/4.png",
        "assets/img/project/hcp/5.png", "assets/img/project/hcp/6.png",
        "assets/img/project/hcp/7.png"
      ]
    },
    'ldh':{
      repo: "https://github.com/josephsrujan66/linux-system-health-monitor",
      slides: [
        "assets/img/project/ldh/1.png", "assets/img/project/ldh/2.png",
        "assets/img/project/ldh/3.png", "assets/img/project/ldh/4.png",
        "assets/img/project/ldh/5.png", "assets/img/project/ldh/6.png",
        "assets/img/project/ldh/7.png", "assets/img/project/ldh/8.png",
        "assets/img/project/ldh/9.png", "assets/img/project/ldh/10.png"
      ]
    },
      'despr':{
       repo: "https://github.com/josephsrujan66/edge_ai_face_mask_detection_system",
       slides: [
         "assets/img/project/despr/1.png", "assets/img/project/despr/2.png",
         "assets/img/project/despr/3.png", "assets/img/project/despr/4.png",
         "assets/img/project/despr/5.png", "assets/img/project/despr/6.png",
         "assets/img/project/despr/7.png", "assets/img/project/despr/8.png",
         "assets/img/project/despr/9.png", "assets/img/project/despr/10.png"
	]
	},
    'fmd':{
       repo: "https://github.com/josephsrujan66/edge_ai_face_mask_detection_system",
       slides: [
         "assets/img/project/fmd/1.png", "assets/img/project/fmd/2.png",
         "assets/img/project/fmd/3.png", "assets/img/project/fmd/4.png",
         "assets/img/project/fmd/5.png", "assets/img/project/fmd/6.png",
         "assets/img/project/fmd/7.png", "assets/img/project/fmd/8.png",
         "assets/img/project/fmd/9.png", "assets/img/project/fmd/10.png"
	]
	}
  };


  var currentActiveProject = null;
  var currentIdx = 0;

  // 2. Updated Open Function (accepts a project name)
  window.openPPT = function(projectName) {
    currentActiveProject = projectData[projectName]; // Get data based on name
    currentIdx = 0;
    updatePPTUI();
    $('#pptOverlay').css('display', 'flex').hide().fadeIn(300);
    $('body').css('overflow', 'hidden');
  };

  window.closePPT = function() {
    $('#pptOverlay').fadeOut(300);
    $('body').css('overflow', 'auto');
  };

  window.changeSlide = function(n) {
    if (!currentActiveProject) return;
    var total = currentActiveProject.slides.length;
    currentIdx = (currentIdx + n + total) % total;
    updatePPTUI();
  };

  function updatePPTUI() {
    var slides = currentActiveProject.slides;
    $('#pptSlide').attr('src', slides[currentIdx]);
    $('#currentNum').text(currentIdx + 1);
    $('#repoBtn').attr('href', currentActiveProject.repo);
  }

  $(document).keydown(function(e) {
    if ($('#pptOverlay').is(':visible')) {
      if (e.keyCode == 37) changeSlide(-1);
      if (e.keyCode == 39) changeSlide(1);
      if (e.keyCode == 27) closePPT();
    }
  });  
})(jQuery);




  /* =======================================================
     CERTIFICATE FULL-VIEW MODAL
  ========================================================== */
  window.openCert = function(src) {
    $('#certModalImg').attr('src', src);
    $('#certModal').addClass('active');
    $('body').css('overflow', 'hidden');
  };

  window.closeCert = function(e) {
    if (e && e.target && e.target.id === 'certModalImg') return;
    $('#certModal').removeClass('active');
    $('body').css('overflow', 'auto');
  };

  $(document).keydown(function(e) {
    if (e.key === 'Escape' && $('#certModal').hasClass('active')) {
      closeCert();
    }
  });
