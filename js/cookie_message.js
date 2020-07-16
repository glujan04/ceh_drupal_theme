function setCookie(cname) {
  var d = new Date();
  var exdays = 7;
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname+"=true;" + expires + ";domain=smartcostadelsol.es";
}

function checkCookie(cname) {
 var cookies = document.cookie;
 cookies = cookies.split('; ');
 for(var i = 0; i <cookies.length; i++) {
  if(cookies[i].includes(cname)) {return true;} 
 }
 return false;
}

(function ($) {
 var cname = "accept_cookies";
 console.log(cname);
 if(!checkCookie(cname)){
  $('#cookie_message').css('display', 'flex');
 }
 $('#accept_cookie').click(function() {
  setCookie(cname)
  $('#cookie_message').css('display', 'none');
 });
 $('#close_cookie').click(function() {
  $('#cookie_message').css('display', 'none');
 });
})(jQuery);
