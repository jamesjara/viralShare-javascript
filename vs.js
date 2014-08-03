
var ShareToUse = (function() {
  var data;
  var unlock = function() {};
  var setData = function( data ){
	this.data = data;	
  };
  var publishFB = function() {
    FB.ui({
      method: "stream.publish",
      attachment: this.data ,
      user_prompt_message: "userMessagePrompt"
    }, function(response) {
      if (response != null) {
        if (response.post_id != null) {
          $.unblockUI();
          $.cookie("ShareToUse-Key", 0);
        } //UPDATE
      } else {
        alert("OK, Si no la colaboras, no continuas.");
      };
    });
  };
  var lock = function() {
    if ($.cookie("ShareToUse-Key") > 2) {
      $.blockUI({
        css: {
          "z-index": "9000",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0
        },
        message: $("#domMessage")
      });
    }
  };
  var count = function() {
	console.log($.cookie("ShareToUse-Key"));
    if ($.cookie("ShareToUse-Key") != null) {
      var val = $.cookie("ShareToUse-Key");
      val++;
      $.cookie("ShareToUse-Key", val);
    } else $.cookie("ShareToUse-Key", 0);
  }
  return {
    countPage: count,
    unlock: unlock,
    publish: publishFB,
    LockFullPage: lock,
    setData: setData
  }
}()); 