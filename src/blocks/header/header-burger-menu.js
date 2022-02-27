function headerBurgerMenu(query = '.header') {
  const iconMenu = document.querySelector(`${query}__burger`);
  if (iconMenu) {
    const headerNav=document.querySelector(`${query}__nav`);
    iconMenu.addEventListener("click",function(e){
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      headerNav.classList.toggle('_active');
  })
}
}

export {headerBurgerMenu};
