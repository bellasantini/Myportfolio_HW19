console.log("your index.js file is loaded correctly!");

$(document).ready(function(){
    $("navbar-brand img").click(function(){
      $("a").animate({left: '250px'})
    });
  });