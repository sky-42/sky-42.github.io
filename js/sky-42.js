$(function() {
    //page scroll
    $(".page-scroll").click(function(){
        console.log("scroll");
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//i18next
    function translate(){
      $(".navbar").i18n();
      $("#landing").i18n();
      $("#about").i18n();
      $("#pilot").i18n();
      $("#prices").i18n();
      $("#contact").i18n();
      $("#customer").i18n();
      $("#booking").i18n();

    }

    var userLang = navigator.language || navigator.userLanguage; 

    //init i18next
    var option = {
      lng               : userLang,
      fallbackLng       : "en",
      resGetPath        : "locales/__lng__/__ns__.json"
    };

    i18n.init(option, function(err, t) {
        translate();
    });


    function changeToDE() {
        i18n.setLng('de', function(err ,t){
          console.log("set to de");
          userLang = "de";
          translate();
        });

        $(".en").removeClass("active");
        $(".de").addClass("active");

    }

    function changeToEN() {
        i18n.setLng('en', function(err ,t){
          userLang = "en";
          console.log("set to en");
          translate();
        });

        $(".de").removeClass("active");
        $(".en").addClass("active");
    }

    var contactform =  document.getElementById('contactform');
    contactform.setAttribute('action', '//formspree.io/' + 'sky' + '-' + '42' + '@' + 'sol' + '.' + 'at');



