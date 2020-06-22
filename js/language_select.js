(function ($) {
  var sl = window.location.pathname.replace('/en', '');
  if (sl == '') sl = '/';
  var el = '/en'+window.location.pathname.replace('/en', '');
  $('#spanish_link').attr('href', sl);
  $('#english_link').attr('href', el);
})(jQuery);

