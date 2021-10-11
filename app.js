const front = $(".front");
const back = $(".back");
front.on('click',function(){
    $(this).addClass('invisibale');
    back.removeClass('invisibale');
})
back.on('click',function(){
    $(this).addClass('invisibale');
    front.removeClass('invisibale');
    }
)

const containerLeft = $(".containerLeft");
const photoL = $(".imgLeft");
const lettersL = $(".lettersLeft");

containerLeft.hover(function(){
    photoL.toggleClass('change');
    lettersL.toggleClass('visible');
})
const container = $(".container");
const photo = $(".img");
const letters = $(".letters");

container.hover(function(){
    photo.toggleClass('change');
    letters.toggleClass('visible');
})
const containerRight = $(".containerRight");
const photoR = $(".imgRight");
const lettersR = $(".lettersRight");

containerRight.hover(function(){
    photoR.toggleClass('change');
    lettersR.toggleClass('visible');
})

// button to the topFunction//Get the button
var toTop = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
