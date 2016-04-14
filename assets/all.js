jQuery(function(){
  var $ = jQuery;

  var $requiredInputs = $('.required').find('input');
  $requiredInputs.each(function() {
    $(this).attr('required', 'required');
  });

});
