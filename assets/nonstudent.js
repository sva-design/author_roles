jQuery(function(){
  var $ = jQuery;

  var publishPageId = '#publish',
    $newsAuthorDiv = $(publishPageId + ' #field-81'),
    $authorsInput = $newsAuthorDiv.find('input[name="fields[authors]"]'),
    name = (typeof nameFromScript == 'undefined') ? '' : nameFromScript;

  // populate author input on news page
  // ----------------------------------

  if ($authorsInput.val() == '') {
    $authorsInput.val(name);
  }

});
