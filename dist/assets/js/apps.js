$(document).ready(function () {
    /***********************************************************************
    MODAL PLANTAS
    ***********************************************************************/
   
    
    
     $("section.modal-content").hide();
     $("section.modal-content .modal-form").hide();
    
    $("a#planta").on('click', function (e) {
        event.preventDefault();
        initFlexSliders();
        $("section.modal-content").show();       
        $("section.modal-content div#mod-a").show();

    });
    
    
     $("#a1-planta").on('click', function (e) {
         console.log('depto a-1');
        event.preventDefault();
        initFlexSliders();
        //        $("section.modal-content").css("opacity","1");       
        $("section.modal-content").show();
        $("section.modal-content div#mod-a1").show();
    });
    
       $("#a2-planta").on('click', function (e) {
         console.log('depto a-2');
        event.preventDefault();
        initFlexSliders();
        //        $("section.modal-content").css("opacity","1");       
        $("section.modal-content").show();
        $("section.modal-content div#mod-a2").show();
    });
    
     $("#b-planta").on('click', function (e) {
         console.log('depto b');
        event.preventDefault();
        initFlexSliders();
        //        $("section.modal-content").css("opacity","1");       
        $("section.modal-content").show();
        $("section.modal-content div#mod-b").show();
    });
    
    $("#b1-planta").on('click', function (e) {
         console.log('depto b');
        event.preventDefault();
        initFlexSliders();
        //        $("section.modal-content").css("opacity","1");       
        $("section.modal-content").show();
        $("section.modal-content div#mod-b1").show();
    });
    
     $("#c-planta").on('click', function (e) {
         console.log('depto c');
        event.preventDefault();
        initFlexSliders();
        //        $("section.modal-content").css("opacity","1");       
        $("section.modal-content").show();
        $("section.modal-content div#mod-c").show();
    });
    
    $("#d-planta").on('click', function (e) {
         console.log('depto d');
        event.preventDefault();
        initFlexSliders();
        //        $("section.modal-content").css("opacity","1");       
        $("section.modal-content").show();
        $("section.modal-content div#mod-d").show();
    });
    
    $("#e-planta").on('click', function (e) {
         console.log('depto e');
        event.preventDefault();
        initFlexSliders();
        //        $("section.modal-content").css("opacity","1");       
        $("section.modal-content").show();
        $("section.modal-content div#mod-e").show();
    });
    
    $('div.modal-form img#close').on('click', function () {
        console.log('estoy cerrando');
        $("section.modal-content").hide();
         $("section.modal-content").css("display","none"); 

    });

     $("#f-planta").on('click', function (e) {
         console.log('depto f');
        event.preventDefault();
        initFlexSliders();
        //        $("section.modal-content").css("opacity","1");       
        $("section.modal-content").show();
        $("section.modal-content div#mod-f").show();
    });
    
     $("#g-planta").on('click', function (e) {
         console.log('depto g');
        event.preventDefault();
        initFlexSliders();
        //        $("section.modal-content").css("opacity","1");       
        $("section.modal-content").show();
        $("section.modal-content div#mod-g").show();
    });
    
    $("#h-planta").on('click', function (e) {
         console.log('depto h');
        event.preventDefault();
        initFlexSliders();
        //        $("section.modal-content").css("opacity","1");       
        $("section.modal-content").show();
        $("section.modal-content div#mod-h").show();
    });
    
    $('div.modal-form img#close').on('click', function () {
        console.log('estoy cerrando');
        $("section.modal-content").hide();
         $("section.modal-content").css("display","none"); 

    });
    
    function initFlexSliders() {
        $('.flexslider-fot-depto').flexslider({
            animation: "slide"
            , minItems: 1
            , maxItems: 1
            , animation: "slide"
            , slideshow: true
            , prevText: "←"
            , nextText: "→"
            
        });
    };
    /***********************************************************************
    CIERRE MODAL PLANTAS
    ***********************************************************************/
    /***********************************************************************
    Spy Menu
    ***********************************************************************/
    $('nav ul li').click(function (e) {
        $('nav ul li').removeClass('active');
        $(this).addClass('active');
    });
    /***********************************************************************
    Cierre Spy Menu
    ***********************************************************************/
    /***********************************************************************
    SUAVIZADO ANCLA MENU
    ***********************************************************************/
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]').not('[href="#0"]').click(function (event) {
            // Grab height of fixed header
            var headHeight = $('header').outerHeight();
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - headHeight - 20
                    }, 1000, function () {
                        // Callback after animation
                        // Don't scroll on focus!
                        $.fn.focusNoScroll = function () {
                            var x = window.scrollX
                                , y = window.scrollY;
                            this.focus();
                            window.scrollTo(x, y);
                            return this; //chainability
                        };
                        // Must change focus, but don't scroll!
                        var $target = $(target);
                        $target.focusNoScroll();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        }
                        else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focusNoScroll(); // Set focus again
                        };
                    });
                }
            }
        });
    /***********************************************************************
    CIERRE SUAVIZADO ANCLA MENU
    ***********************************************************************/
    /***********************************************************************
    COLLAPSE NAVBAR ON SCROLL
    ***********************************************************************/
    $(window).scroll(function (e) { //event(e)
        //console.log('usuario hiso scroll');
        //console.log(
        var w = $(window).width();
        var desdeTop = $(window).scrollTop();
        if (desdeTop > 50) {
            $('.menu').addClass('menu-fixed');
            $('section.slider').css('margin-top', '0');
        }
        else {
            $('.menu').removeClass('menu-fixed');
            $('section.slider').css('margin-top', '-110px');
        }
    });
    /***********************************************************************
    CIERRE COLLAPSE NAVBAR ON SCROLL
    ***********************************************************************/
    /******************************************************************************************
    FLEXSLIDER
    *******************************************************************************************/
    $('.flexslider').flexslider({
        animation: "slide"
    });
    /************************************************************************
    CIERRE FLEXSLIDER
    *************************************************************************/
    /************************************************************************************
    FLEXSLIDER DEPTOS
    *************************************************************************************/
    $('.flexslider-deptos').flexslider({
        animation: "slide"
        , animationLoop: false
        , itemWidth: 210
        , itemMargin: 0
        , minItems: 1
        , maxItems: 3
    });
    /************************************************************************************
    CIERRE FLEXSLIDER DEPTOS
    *************************************************************************************/
    /************************************************************************************
    FLEXSLIDER SERVICIOS
    *************************************************************************************/
    $('.flexslider-servicios').flexslider({
        animation: "slide"
    });
    /************************************************************************************
    CIERRE FLEXSLIDER SERVICIOS
    *************************************************************************************/
    /************************************************************************************
    GOOGLE MAP
    *************************************************************************************/
    function initMap() {
        var uluru = {
            lat: -33.5253045
            ,lng: -70.5979749
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17
            , center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru
            , map: map
        });
    }
    initMap();
    /************************************************************************************
    CIERRE GOOGLE MAP
    *************************************************************************************/
});
/************************************************************************************
    RESPONSIVE MENU
    *************************************************************************************/
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
}
/************************************************************************************
   CIERRE RESPONSIVE MENU
    *************************************************************************************/