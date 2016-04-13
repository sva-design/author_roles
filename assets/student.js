jQuery(function(){
  var $ = jQuery;

  var projectsPageId = '#publish',
    authorsPageId = '#system-authors',
    $studentsDiv = $(projectsPageId + ' #field-3'),
    $yearsDiv = $(projectsPageId + ' #field-9'),
    $emailDiv = $(projectsPageId + ' #field-17'),
    $studentsInput = $(projectsPageId + ' input[name="fields[students]"]'),
    $yearsInput = $(projectsPageId + ' input[name="fields[years]"]'),
    $emailInput = $(projectsPageId + ' input[name="fields[email]"]'),
    name = (typeof nameFromScript == 'undefined') ? '' : nameFromScript,
    year = '2016', // change with yearly updates
    email = (typeof emailFromScript == 'undefined') ? '' : emailFromScript;

  // hide elements
  // -------------

  $('#nav .structure').hide(); // system dropdown
  $(authorsPageId + ' .notifier a').hide(); // notifier links after saving author
  $yearsDiv.hide();
  $emailDiv.hide();

  // populate inputs on projects page
  // --------------------------------

  if ($studentsInput.val() == '') {
    $studentsInput.val(name);
  }  
  $yearsInput.val(year);
  $emailInput.val(email);

});
