// export function foo4(){$(document).ready(function(){
//   $('.textfield__input.textfield_masked__input').inputmask({
//     alias:"datetime",
//     inputFormat:"dd.mm.yyyy",
//     placeholder:"ДД.ММ.ГГГГ",
//     min:"01.01.1900",
//     max:"31.12.3000",
//     clearIncomplete: true,
//   });
//   })}
  
  function textfieldMasked(query) {
    let selector = document.getElementById(query);
    Inputmask({
      alias:"datetime",
      inputFormat:"dd.mm.yyyy",
      placeholder:"ДД.ММ.ГГГГ",
      min:"01.01.1900",
      max:"31.12.3000",
      clearIncomplete: true,
    })
    .mask(selector);
  } 

export {textfieldMasked};