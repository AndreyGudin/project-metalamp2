$(document).ready(function () {
  $(".guest-dropdown_rooms").iqDropdown({
    setSelectionText: function (itemCount, totalItems) {
      let t = ["гость", "гостя", "гостей"];
      let spln = ["спальня", "спальни"];
      let beds = ["кровать", "кровати"];
      let vankom = ["ванная комнаты", "ванные комнаты"];
      let sum = "";
      if (totalItems == 0) return "";
      if (itemCount["item1"] == 1)
        sum = sum + itemCount["item1"] + " " + spln[0] + ",";
      if (itemCount["item1"] > 1)
        sum = sum + itemCount["item1"] + " " + spln[1] + ",";
      if (itemCount["item2"] == 1)
        sum = sum + itemCount["item2"] + " " + beds[0] + ",";
      if (itemCount["item2"] > 1)
        sum = sum + itemCount["item2"] + " " + beds[1] + ",";
      if (itemCount["item3"] == 1)
        sum = sum + itemCount["item3"] + " " + vankom[0];
      if (itemCount["item3"] > 1)
        sum = sum + itemCount["item3"] + " " + vankom[1];
      if (sum.length > 20) sum = sum.slice(0, 20) + "...";
      return sum;
    },
  });
});
