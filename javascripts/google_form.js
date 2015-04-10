(function ($) {
  $(document).ready(function() {
    //clean up empty tags
    $('.google-form-wrapper p, .google-form-wrapper br')
      .filter(function() {
        return $(this).html() == '';
      })
      .remove();
    $('div.ss-password-warning').remove();
    $('div.required-message').remove();

    //add required class to required elements
    $('.google-form-wrapper form')
      .find('.ss-item-required input, .ss-item-required textarea')
      .filter(function() {
        return jQuery(this).attr('name').match(/entry\.\d\.single/);
      })
      .addClass('required');

    $('.google-form-wrapper form').submit(function(event){
      event.preventDefault();
      $(this).ajaxSubmit();
      $(this).hide();
      $('.success-msg').fadeIn('slow');
    });
  });
})(jQuery);


