$('.departamentos li:has(ul) > a').click(function(event) {
    event.preventDefault();
    $(this).next('ul').slideToggle('fast');
});