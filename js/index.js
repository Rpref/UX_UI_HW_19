console.log("Your index.js file is loaded correctly!");

/*$(".linkToMore").on("hover", function() {
    $(".linkToMore").css("font-size", "24px");
});*/

/*$(".linkToMore").on("hover", function() {
    $(this).css("font-size", "24px");
});*/

/*var size = $(".linkToMore").css("fontSize");
    $(".linkToMore").on("hover", function() {
        $(this).find("p").css("fontSize", "14px");
    },
    function() {
        $(this).find("p").css("fontSize", "24px");
    }
    );*/

$(".button").hover(function(){
    $(this).css("font-size", "18px");
    }, function(){
    $(this).css("font-size", "14px");
});

// Get the modal
/*var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("linkToMore");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/

$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}