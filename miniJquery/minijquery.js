// Basic syntax is : $(selector).action()
// $ == mj

//  mj(selector).action()

var minijquery = function (htmlElement) {
  return {
    customDipenHide: function () {
      htmlElement.style['display'] = 'none';
      return minijquery(htmlElement);
    },
    customCss: function (cssProperty, value) {
      htmlElement.style[cssProperty] = value;
      return minijquery(htmlElement);
    },
    animateCustom: function () {
      htmlElement.innerHTML = 'Add through Chaining System';
      return minijquery(htmlElement);
    },
    customClick: function (callback) {
      htmlElement.addEventListener('click', callback);
      return minijquery(htmlElement);
    },
  };
};
var mj = function (selectorName) {
  console.log('element --- ', selectorName);
  return minijquery(document.querySelector(selectorName));
};
// setTimeout(function () {
//   //   $('p').hide(); // hides all <p> elements
//   //   mj('.example').customDipenHide();

//   //$("p").css("background-color", "yellow");
//   mj('.example').customCss('background-color', 'green').animateCustom();
// }, 5000);
//   $('button').click(hideP);
mj('#myBtn').customClick(function () {
  mj('.example').customCss('background-color', 'green').animateCustom();
});
