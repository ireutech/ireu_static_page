var std_name = document.forms['rform']['std_name'];
var std_email = document.forms['rform']['std_email'];
var std_password1 = document.forms['rform']['std_password1'];
var std_confirm_password = document.forms['rform']['std_confirm_password'];
var std_nationality=document.forms['rform']['std_nationality'];
var std_mobile_number=document.forms['rform']['std_mobile_number']

var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');
var mobile_erroe= document.getElementById('mobile_error');
var nationility_error=document.getElementById('nation_error');

std_nationality.addEventListener('blur',nationVerify,true);
std_name.addEventListener('blur', nameVerify, true);
std_email.addEventListener('blur', emailVerify, true);
std_password1.addEventListener('blur', passwordVerify, true);
std_mobile_number.addEventListener('blur',mobileVerify,true);


function Validate() {
if(std_nationality.value=="0"){
     document.getElementById('nationality_div').style.color = "red";
    nation_error.textContent = "nationality is required";
    std_nationality.focus();
    return false;
}
  // validate username
  if (std_name.value == "") {
    // std_name.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username is required";
    std_name.focus();
    return false;
  }
  // validate username
  if (std_name.value.length < 6) {
    // std_name.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username must be at least 6 characters";
    std_name.focus();
    return false;
  }
  // validate email
  if (std_email.value == "") {
    // std_email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Email is required";
    std_email.focus();
    return false;
  }

  //validate number
if(std_mobile_number.value==""){
    document.getElementById('mobile_div').style.color = "red";
    mobile_error.textContent = "mobile number is required";
    std_mobile_number.focus();
    return false;
}

  // validate password
  if (std_password1.value == "") {
//    std_password1.style.border = "1px solid red";
    document.getElementById('passwrd_div').style.color = "red";
    // std_confirm_password.style.border = "1px solid red";
    password_error.textContent = "Password is required";
   std_password1.focus();
    return false;
  }
  
  // check if the two passwords match
  if (std_password1.value !=std_confirm_password.value) {
    // std_password1.style.border = "1px solid red";
    document.getElementById('conf_pass_div').style.color = "red";
    // std_confirm_password.style.border = "1px solid red";
    password_error.innerHTML = "The two passwords do not match";
    return false;
  }


}
function nationVerify() {
  if (std_nationality.value !== "0") {
   std_nationality.style.border = "1px solid #5e6e66";
   document.getElementById('nationality_div').style.color = "#5e6e66";
   nation_error.innerHTML = "";
   return true;
  }
}

function nameVerify() {
  if (std_name.value != "") {
   std_name.style.border = "1px solid #5e6e66";
   document.getElementById('username_div').style.color = "#5e6e66";
   name_error.innerHTML = "";
   return true;
  }
}
function emailVerify() {
  if (std_email.value != "") {
  	std_email.style.border = "1px solid #5e6e66";
  	document.getElementById('email_div').style.color = "#5e6e66";
  	email_error.innerHTML = "";
  	return true;
  }
}

function mobileVerify() {
  if (std_mobile_number.value != "") {
   std_mobile_number.style.border = "1px solid #5e6e66";
   document.getElementById('mobile_div').style.color = "#5e6e66";
   mobile_error.innerHTML = "";
   return true;
  }
}
function passwordVerify() {
  if (std_password1.value != "") {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('conf_pass_div').style.color = "#5e6e66";
  	document.getElementById('passwrd_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	return true;
  }
  if (std_password1.value === std_confirm_password.value) {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('conf_pass_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	return true;
  }
}

