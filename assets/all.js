jQuery(function(){
  var $ = jQuery;

  var $saveButton = $('form').find('input[name="action[save]"]'),
    $removeFile = $('.field-upload em:contains("Remove File")');

  var checkValidity = function($req) {
    var isValid = true;
    $req.each(function() {
      if (!$(this).val()) isValid = false;
    });
    if (isValid) {
      enableButton();
    } else {
      disableButton();
    }
  };

  var disableButton = function() {
    $saveButton.attr('disabled', 'disabled');
  };

  var enableButton = function() {
    $saveButton.removeAttr('disabled');
  };

  // add listeners on required inputs to checkValidity
  var initInputListeners = function() {
    var $req = $('.required').find(':input');
    $req.each(function() {
      $(this).on('keyup change', function() {
        checkValidity($req);  
      });
    });
  };
  initInputListeners();

  // add listeners on removeFile link
  var initRemoveFileListeners = function() {
    $removeFile.each(function() {
      $(this).click(function() {
        disableButton();
        initInputListeners(); // refresh input selectors
      });
    });
  };
  initRemoveFileListeners();

});
