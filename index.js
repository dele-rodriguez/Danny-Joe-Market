$(document).ready(function() {
    activeLinkControl();
    toggler();
    unavailable();
});

function activeLinkControl() {
    $(".nav-link").on("click" , function() {
        $(".nav-link").removeClass("active");
    
        $(this).addClass("active");
    }); 
}
function toggler() {
    $(".fa-bars").on("click" , function() {
        $(".site-nav-menu").toggleClass("mobile-menu");
    });
}
function unavailable() {
    $(".disabled").on("click" , function() {
        alert("Sorry, this feature is unavailable!");
    });
}
