const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav');
var res = window.matchMedia("(max-width: 575.98px)")
if(res.matches){
  menu.style.display = 'none';
}



menuBtn.addEventListener('click', function() {
  if (menu.style.display === 'none') {
    menu.style.display = 'grid';
    menu.style.position = 'fixed';
    menuBtn.style.background = "#8bc543"
  } else {
    menu.style.display = 'none';
    menuBtn.style.background = "#8043c5"
  }
});
