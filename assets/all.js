jQuery(function(){
  var $ = jQuery;

  var $req = $('.required').find(':input'); // find inputs, textareas, selects
  $req.each(function() {
    $(this).attr('required', 'required');
  });

  // for browsers that do not support required attribute
  $('form').submit(function(e) {
    if (!e.target.checkValidity()) {
      e.preventDefault();
      alert('Please fill out all required fields.');
      return false;
    }
  });

});
