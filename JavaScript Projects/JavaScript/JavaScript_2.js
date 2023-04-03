function validateForm() {
    let x = document.forms["myForm"]["Email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
  }