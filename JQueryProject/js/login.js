console.log('Login page is active');

function emailValidation(element) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(element.value)) {
    element.style.border = '3px solid green';
  } else {
    element.style.border = '3px solid red';
    element.focus();
  }
}
function loginApi() {
  console.log('Login APi is called');
  var emailEle = $('#exampleInputEmail1');
  console.log(emailEle);
  emailValidation(emailEle);
}

$(document).ready(function () {
  $('#submit-btn').click(loginApi);
  console.log('Document is ready');
});
