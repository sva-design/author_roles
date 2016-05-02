jQuery(function(){
  var $ = jQuery;

  var publishPageId = '#publish',
    authorsPageId = '#system-authors',
    $studentsDiv = $(publishPageId + ' #field-3'),
    $yearsDiv = $(publishPageId + ' #field-9'),
    $emailDiv = $(publishPageId + ' #field-17'),
    $studentsInput = $(publishPageId + ' input[name="fields[students]"]'),
    $yearsInput = $(publishPageId + ' input[name="fields[years]"]'),
    $emailInput = $(publishPageId + ' input[name="fields[email]"]'),
    name = (typeof nameFromScript == 'undefined') ? '' : nameFromScript,
    year = '2016', // change with yearly updates
    email = (typeof emailFromScript == 'undefined') ? '' : emailFromScript,
    $projectsFilter = $('#drawer-filtering-2'),
    projectsIndexPath = '/admin/publish/projects/',
    $authorEmailInput = $(authorsPageId + ' input[name="fields[email]"');

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

  // redirect to filtered projects index
  // -----------------------------------

  $projectsFilter.hide();
  if (window.location.pathname == projectsIndexPath && window.location.search == '') {
    window.location.replace('?filter[email]=' + email);
  }

  // add @sva.edu email messaging on edit authors page
  // -------------------------------------------------
  if ($authorEmailInput.length) {
    var $authorEmailLabel = $authorEmailInput.parent(),
      $oldLabel = $authorEmailLabel.html(),
      $newLabel = $oldLabel.replace('Email Address', 'Email Address (@sva.edu)');
    $authorEmailLabel.html($newLabel);
  }
});
