$(document).ready(function() {
    $(".hamburger-button").click(function() {
        $(this).toggleClass("active");
        $(".mobile-menu").fadeToggle()
    });

    // Animate on Scroll //
    AOS.init();

    // Lightgallery //
    lightGallery(document.getElementById('lightgallery'), {
        speed: 500,
        download: false
    });

    lightGallery(document.getElementById('lightgallery-2'), {
        speed: 500,
        download: false
    });

});