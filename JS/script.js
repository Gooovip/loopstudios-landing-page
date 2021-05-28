$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
        $(".navbar-menu").css(
            {"background-color":"black",
            "height":"658px",
            "position":"relative",
            "z-index":"999",
            "width":"440px",
        });
  
    });
  });