$(document).ready(function () {
    // function to show our popups
    function showPopup(whichpopup) {
        var docHeight = $(document).height(); // page height
        var scrollTop = $(window).scrollTop(); //grab the px value from the top of the page to where you're scrolling
        $('.overlay-bg').show().css({ 'height': docHeight }); //display your popup background and set height to the page height
        $('.popup' + whichpopup).show().css({ 'top': scrollTop + 20 + 'px' }); //show the appropriate popup and set the content 20px from the window top
    }

    // function to close our popups
    function closePopup() {
        $('.overlay-bg, .overlay-content').hide();
    }

    // onclick open popup
    $('.show-popup').click(function (event) {
        event.preventDefault(); // don't refresh
        var selectedPopup = $(this).data('showpopup'); // 1 = div 1 etc.

        showPopup(selectedPopup); //we'll pass in the popup number to our showPopup() function to show which popup we want
    });

    // hide popup when user clicks on close button or if user clicks anywhere outside the container
    $('.close-btn, .overlay-bg').click(function () {
        closePopup();
    });

    // hide the popup when user presses the esc key
    $(document).keyup(function (e) {
        if (e.keyCode == 27) { // 27 = ESC
            closePopup();
        }
    });
});