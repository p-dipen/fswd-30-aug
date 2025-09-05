console.log('Login page is active');
function validateFields(element) {
  if (element.val() == '') {
    element.removeClass('is-valid').addClass('is-invalid');
  } else {
    element.removeClass('is-invalid').addClass('is-valid');
  }
}
function emailValidation(element) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(element.val())) {
    element.removeClass('is-invalid').addClass('is-valid');
    return true;
  } else {
    element.removeClass('is-valid').addClass('is-invalid');
    element.focus();
    return false;
  }
}
function loginApi(event) {
  event.preventDefault();
  console.log('LoginAPi IS called');
  var emailEle = $('#exampleInputEmail1'); // get first DOM element
  var password = $('#exampleInputPassword1');
  validateFields(emailEle);
  validateFields(password);
  var loginForm = $('.form-signin')[0];
  if (loginForm.checkValidity() === false) {
    return;
  }

  console.log('Login APi is called');
  console.log(emailEle);
  emailEle.removeClass('in-valid');
  if (emailValidation(emailEle)) {
    console.log('Password', password.val());
    console.log('email ', emailEle.val());
    if (
      password.val() == 'dipen' &&
      emailEle.val() == 'parihar.dipen@gmail.com'
    ) {
      alert('Successfully login');
      window.location.replace('subpages/index.html');
    } else {
      alert('Password or email is incorrect');
    }
  }
}

$(document).ready(function () {
  $('#submit-btn').click(loginApi);
  console.log('Document is ready');
});
