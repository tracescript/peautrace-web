// Set current year in footer
(function(){
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();