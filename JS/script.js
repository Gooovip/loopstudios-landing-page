$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggle("is-active");
        $(".navbar-menu").css(
            {"background-color":"black",
            "z-index":"999",
            "display":"flex",
        });
  
    });
  });