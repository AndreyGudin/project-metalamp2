function textfieldDateDropdown(query = '.textfield__input.textfield_date-dropdown__input') {
  let dp1,dp2;
  let button = {
    content: 'Применить',
    className: 'textfield_date-dropdown__button-apply',
    onClick: (dp) => {
        dp.hide();
    }}
  
  dp1 = new AirDatepicker(query,{
    classes:'textfield_date-dropdown',
    dateFormat:'dd.MM.yyyy',
    navTitles: { days: "MMMM yyyy" },
    buttons:['clear',button],
    range: true,
    multipleDatesSeparator:'-',
    nextHtml:
      '<svg xmlns="http://www.w3.org/2000/svg"><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/></svg>',
    prevHtml:
      '<svg xmlns="http://www.w3.org/2000/svg"><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/></svg>',
    onSelect({formattedDate}){
      document.querySelector('.date1__input').value = formattedDate[0];
      document.querySelector('.date2__input').value = (formattedDate[1] === undefined) ? 'ДД.ММ.ГГГГ' : formattedDate[1];
    }
});
  document.querySelector('.date2').onClick = function(){console.log('жмяк')};
}
export {textfieldDateDropdown};
