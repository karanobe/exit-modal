$(function() {
  function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
      obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
      obj.attachEvent("on" + evt, fn);
    }
  }

  addEvent(document, "mouseout", function(e) {
    e = e ? e : window.event;
    var from = e.relatedTarget || e.toElement;
    if ((!from || from.nodeName == "HTML") && e.pageY < $(window).scrollTop()) {
      $('#myModal').modal() 
    }
  });

});
