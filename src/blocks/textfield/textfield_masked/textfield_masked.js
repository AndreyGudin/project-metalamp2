  function textfieldMasked(query) {
    let selector = document.querySelector(query);
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