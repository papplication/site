$('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
          if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
          ) {
            var element = document.getElementById("toggleMenu");
            element.innerHTML="Menu";
            
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              event.preventDefault();
              $('html, body').animate({
                scrollTop: target.offset().top * 0.9
              }, 1000, function() {});
            }
          }
        });