$('#captcha').sliderCaptcha({
    repeatIcon: 'fas fa-redo',
    onSuccess: function() {
        window.location.href = 'https://www.google.com/';
    }
});