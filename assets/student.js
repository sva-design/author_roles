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
    $tagsList = $('#field-10').find('.tags'),
    approvedTagsList = [
      '3D Design',
      'Advertising',
      'Branding',
      'Data Visualization',
      'Editorial Design',
      'Film',
      'Illustration',
      'Installation',
      'Interaction Design',
      'Motion Design',
      'Packaging',
      'Photography',
      'Print Design',
      'Typography',
      'Web Design'
      ];

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

  // remove unapproved tags from tagsList
  // ------------------------------------
  if ($tagsList.length) {
    $tagsList.find('li').each(function() {
      var $tag = $(this);
      if ($.inArray($tag.text(), approvedTagsList) == '-1') {
        $tag.remove();
      }
    });
  }
});
