export function foo(){
$(document).ready(function () {
  $(".guest-dropdown").iqDropdown({
    setSelectionText: function (itemCount, totalItems) {
      let t = ["гость", "гостя", "гостей"];
      let returnString='';
      let guestsCount=itemCount['item1'] + itemCount['item2'];
      if (totalItems == 0) return "Сколько гостей";
      if (totalItems == 1) return "1 гость";
      if ((guestsCount > 1)&&  (guestsCount < 5)) 
        returnString += `${itemCount['item1'] + itemCount['item2']} гостя`; 
        if (guestsCount > 4) returnString += `${itemCount['item1'] + itemCount['item2']} гостей`;
      if (itemCount['item3']==1) returnString +=`, ${itemCount['item3']} младенец`;
      if (itemCount['item3']>1) returnString +=`, ${itemCount['item3']} младенца`;
      return returnString;
    },
  });
});
}