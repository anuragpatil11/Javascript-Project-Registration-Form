function validation() {
  if (document.Formfill.Username.value == "") {
    document.getElementById("result").innerHTML = "Enter Username*";
    return false;
  } else if (document.Formfill.Email.value == "") {
    document.getElementById("result").innerHTML = "Enter Email*";
    return false;
  } else if (document.Formfill.Password.value == "") {
    document.getElementById("result").innerHTML = "Enter Password*";
    return false;
  } else if (document.Formfill.CPassword.value == "") {
    document.getElementById("result").innerHTML = "Enter Confirm Password*";
    return false;
  } else if (
    document.Formfill.CPassword.value != document.Formfill.Password.value
  ) {
    document.getElementById("result").innerHTML = "Password doesn't matched*";
    return false;
  } else if (
    document.Formfill.Password.value == document.Formfill.CPassword.value
  ) {
    popup.classList.add("open-slide");
    return false;
  }
}
function closeSlide() {
  popup.classList.remove("open-slide");
}
var popup = document.getElementById("popup");
