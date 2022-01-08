const iconMenu = document.querySelector('.header__burger');
if (iconMenu) {
  const headerNav=document.querySelector('.header__nav');
  iconMenu.addEventListener("click",function(e){
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    headerNav.classList.toggle('_active');
  })
}