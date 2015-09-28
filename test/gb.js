(function(window, document, undefined) {

  var root = window ||
             typeof self == 'object' && self.self === self && self ||
             typeof global == 'object' && global.global === global && global ||
             this;

  root._id = document.getElementById;
  root._tags = document.getElementsByTagName;

  root._fadeOut = function (e, speed) { //speed=40
    if (speed==undefined) {
      speed=40
    }
    var s = e.style;
    s.opacity = 1;
    (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,speed)})();
  }

  root._post = function (url, data, successCallback, allCallback) {
    var r = new XMLHttpRequest();
    r.open("POST", url, true);
    r.onreadystatechange = function () {
        if (allCallback) {
          allCallback(r)
        }
        if (r.readyState != 4 || r.status != 200) return;
        if (successCallback) {
          successCallback(r);
        }
    };
    r.send(data);
  }

  root._getCookie = function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split('; ');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
  }

  function ready() {
    var i;
    var x;
//           _                  _    _
//          | |                | |  (_)
//  ___  ___| |_ ___ ___   ___ | | ___  ___
// / __|/ _ \ __/ __/ _ \ / _ \| |/ / |/ _ \
// \__ \  __/ || (_| (_) | (_) |   <| |  __/
// |___/\___|\__\___\___/ \___/|_|\_\_|\___|
    x = document.getElementsByClassName("setcookie");
    for (i = 0; i < x.length; i++) {
      var elem = x[i];
      // set cookie from data-name,data-value,data-expires,data-path        es data-expires="Thu, 18 Dec 2013 12:00:00 UTC"  data-path="/"
      elem.addEventListener('click', function() {
        var s = this.dataset.name+"="+this.dataset.value;
        if(typeof this.dataset.expires != 'undefined') {
          s+="; expires="+this.dataset.expires
        }
        if(typeof this.dataset.path != 'undefined') {
          s+="; path="+this.dataset.path
        }
        document.cookie=s+";";
      }, false);
    }
//             _                  _    _
//            | |                | |  (_)
//   __ _  ___| |_ ___ ___   ___ | | ___  ___
//  / _` |/ _ \ __/ __/ _ \ / _ \| |/ / |/ _ \
// | (_| |  __/ || (_| (_) | (_) |   <| |  __/
//  \__, |\___|\__\___\___/ \___/|_|\_\_|\___|
//   __/ |
//  |___/
    x = document.getElementsByClassName("getcookie");
    for (i = 0; i < x.length; i++) {
      var elem = x[i];
      elem.addEventListener('click', function() {
        this.dataset.value = _getCookie(this.dataset.name);
      }, false);
    }
//        _           _
//       | |         | |
//   __ _| | ___ _ __| |_
//  / _` | |/ _ \ '__| __|
// | (_| | |  __/ |  | |_
//  \__,_|_|\___|_|   \__|
    x = document.getElementsByClassName("alert");
    for (i = 0; i < x.length; i++) {
      var elem = x[i];
      elem.addEventListener('click', function() {
        alert(this.dataset.value);
      }, false);
    }
  }

  function ready_state_change() {
      if ( document.readyState === "complete" ) {
          ready();
      }
  }

  if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", ready, false);
      //window.addEventListener("load", ready, false);
  } else {
      // IE
      document.attachEvent("onreadystatechange", ready_state_change);
      //window.attachEvent("onload", ready);
  }

}).call({}, typeof(window) !== "undefined" ? window : undefined, typeof(document) !== "undefined" ? document : undefined);
