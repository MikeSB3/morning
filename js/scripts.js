$(document).ready(function() {
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
