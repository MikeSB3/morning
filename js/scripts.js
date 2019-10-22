$(document).ready(function() {
  $(".red-button").click(function(){
    $("body").removeClass();
    $("body").addClass("red-background");
});

  $(".blue-button").click(function(){
    $("body").removeClass();
    $("body").addClass("blue-background");
});

  $(".purple-button").click(function(){
    $("body").removeClass();
    $("body").addClass("purple-background");
});



  $(".clickable").click(function()
    {
    $("#sleepy").toggle();
    $("#awake").toggle();
  });


  $("#magic").click(function(){
    $("#disappear-img").fadeOut();
  });
  $("#muggle").click(function() {
    $("#disappear-img").fadeIn();
  });

  $("#clickable").click(function()
  {
    $("#kid-slide").slideToggle();
  });



});
