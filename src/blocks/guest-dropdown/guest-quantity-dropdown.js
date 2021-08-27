$(document).ready(function() {
  $(".no-config").iqDropdown({
    setSelectionText: function (itemCount, totalItems) {
      let t=['гость','гостя','гостей'];
      if (totalItems == 0) return 'Сколько гостей';
      if (totalItems == 1) return totalItems + ' ' + t[0];
      if (totalItems >1 && totalItems < 5) return totalItems + ' ' + t[1];
      if (totalItems > 4) return totalItems + ' ' + t[2];
    }
  });
});