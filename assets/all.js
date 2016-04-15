jQuery(function(){
  var $ = jQuery;

  var $saveButton = $('form').find('input[name="action[save]"]'),
    $removeFile = $('.field-upload.required em:contains("Remove File")'),
    isValid = true,
    hasWords = true;

  var checkValidity = function($req) {
    isValid = true;
    $req.each(function() {
      if ($(this).is('textarea[class^="markdown"]')) {
        return; // defer to checkWordCount
      } else if (!$(this).is(':visible')) {
        return; // don't invalidate hidden inputs
      } else if (!$(this).val()) {
        isValid = false;
      }
    });
    enableOrDisable(isValid && hasWords);
  };

  var checkWordCount = function($wordCount) {
    hasWords = true;
    $wordCount.each(function() {
      if ($(this).text() == '0') hasWords = false;
    });
    enableOrDisable(isValid && hasWords);
  };

  var enableOrDisable = function(shouldEnable) {
    if (shouldEnable) {
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

  // listeners on required inputs to checkValidity
  var initInputListener = function() {
    var $req = $('.required').find(':input');
    checkValidity($req); // initial call
    $req.each(function() {
      $(this).on('keyup change', function() {
        checkValidity($req);
      });
    });
  };
  initInputListener();

  // listeners on removeFile link
  var initRemoveFileListener = function() {
    $removeFile.each(function() {
      $(this).click(function() {
        disableButton();
        initInputListener(); // refresh input selectors
      });
    });
  };
  initRemoveFileListener();

  // listeners for Markdown editor word count
  var initWordCountListener = function($wordCount) {
    $wordCount.each(function() {
      $(this).bind('DOMSubtreeModified', function() {
        checkWordCount($wordCount);
      });
    });
  };
  $.getScript("/extensions/editor_for_symphony/assets/editor/editor.js").done(function() {
    var $wordCount = $('.required .editor-statusbar .words');
    initWordCountListener($wordCount);
  });
});
