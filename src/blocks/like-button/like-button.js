 $(document).on("click",".butt.add",function() {
    $(".butt").addClass("active").removeClass("add");
    $(".spanb").html(function(numberp){
      numberp=parseInt($(".spanb").html());
      console.log(numberp+' add');
      numberp++;
      console.log(numberp);
      return numberp.toString();
    });
  })

  $(document).on("click",".active",function() {
    $(".spanb").html(function(numberp){
      numberp=parseInt($(".spanb").html());
      console.log(numberp+' min');
      if (numberp>0) {numberp--;console.log(numberp);return numberp.toString();}
    });
    $(".butt").removeClass("active").addClass("add");
  })