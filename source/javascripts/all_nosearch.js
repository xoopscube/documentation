//= require ./lib/_energize
//= require ./lib/_iconify
//= require ./app/_toc
//= require ./app/_lang
$(window).on('load', function() {

$(function() {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2, .toc-list-h3', 10);
  setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });
});

window.onpopstate = function() {
  activateLanguage(getLanguageFromQueryString());
};
var el = document.getElementById('overlayBtn');
if(el){
  el.addEventListener('click', swapper, false);
}
});
