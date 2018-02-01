// set the cookie for 1 hour 
function setCookie(cname, cvalue, exhours) { 
  var d = new Date(); 
// add cookie expiry date to be one hour from the current time 
d.setTime(d.getTime() + (exhours * 60 * 60 * 1000)); 
var expires = "expires=" + d.toGMTString(); 
// Pass the name, cookie value and expiry time into the cookie 
document.cookie = cname + "=" + cvalue + "; " + expires; 
} 

function getCookie(cname) { 
  var name = cname + "="; 
  var ca = document.cookie.split(';'); 
  for (var i = 0; i < ca.length; i++) { 
    var c = ca[ i ]; 
    while (c.charAt(0) == ' ') { 
      c = c.substring(1); 
    } 
    if (c.indexOf(name) == 0) { 
      return c.substring(name.length, c.length); 
    } 
  } 
  return ""; 
} 

function checkCookie() { 
  var popUp = getCookie("poppedUp"); 
  // if the cookie isn't empty, then don't show the modal, otherwise show the modal 
    if (popUp != "") {} else { 
    // show modal 
    $('#exitModal').modal('show'); 
    // Send event to Google Analytics 
    ga('send', 'event', 'exitModal', 'Modal Displayed', 'exitModal'); 
    // change the value of the cookie so that we know the visitor has seent the cookie 
    var popUp = 1; 
    setCookie("poppedUp", popUp, 1); 
  } 
} 

$("html").mouseleave(function() { 
  checkCookie(); 
}); 





//Start the DOM ready 
$(document).ready(function($) { 
// Make sure that the modal isn't already showing 
  $('#exitModal').modal({ 
    show: false
  }) 

  // $("html").mouseleave(function() { 
  //     $('#exitModal').modal('show');
  // })

});