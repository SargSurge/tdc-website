// Menu close
$("#close-icon").click(function() {
    $(this).parent().parent().fadeOut();
});

// Menu open
$("#hamburger-icon").click(function() {
    $(this).siblings('#navbar-large-container').fadeIn();
});