console.log('$ does it exists or not', `$`);
// Basic syntax is : $(selector).action()

// A $ sign to define/access jQuery
// A (selector) to query html element or object
// A jQuery action() to be performed on the elements
function hideParagraph() {
  $('p').hide(); // hides all <p> elements
  $('.header').hide(); // hide all elements with class="header"
  $('#header').hide(); // hide the element with id="header"
  $(this).hide(); // hides the currrent Element.
  //   var elements = document.getElementsByTagName('p');
  //   for (var i = 0; i < elements.length; i++) {
  //     elements[i].style.display = 'none';
  //   }
}

//  The Documet is Ready or not to run javascript code
// Option1
$(document).ready();
// Option2 - Shorter method
$(function () {});

function hideP() {
  $('p').hide();
}

function buttonEvent() {
  $('button').click(hideP);
}

$(document).ready(buttonEvent);
