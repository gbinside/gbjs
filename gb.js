(function(window, document, undefined) {

  function ready() {

    var x = document.getElementsByClassName("setcookie");
    var i;
    for (i = 0; i < x.length; i++) {
      ver elem = x[i];
      // @todo set cookie from data-name and data-value
    }
  
  }

  function ready_state_change() {
      if ( document.readyState === "complete" ) {
          ready();
      }
  }

  if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", ready, false);
      window.addEventListener("load", ready, false);
  } else {
      // IE
      document.attachEvent("onreadystatechange", ready_state_change);
      window.attachEvent("onload", ready);
  }

}).call({}, typeof(window) !== "undefined" ? window : undefined, typeof(document) !== "undefined" ? document : undefined);
