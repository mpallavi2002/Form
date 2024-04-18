/* 
Student name : Pallavi Mishra
Student number :301294886
COMP 125 MIDTERM -->
*/

function copyAddress() {
  var billingFirstName = document.getElementById("billingFirstName").value;
  var billingLastName = document.getElementById("billingLastName").value;
  var billingStreetAddress = document.getElementById("billingStreetAddress").value;
  var billingCity = document.getElementById("billingCity").value;
  var billingState = document.getElementById("billingState").value;
  var billingZip = document.getElementById("billingZip").value;
  var billingPhone = document.getElementById("billingPhone").value;

  var deliveryFirstName = document.getElementById("deliveryFirstName");
  var deliveryLastName = document.getElementById("deliveryLastName");
  var deliveryStreetAddress = document.getElementById("deliveryStreetAddress");
  var deliveryCity = document.getElementById("deliveryCity");
  var deliveryState = document.getElementById("deliveryState");
  var deliveryZip = document.getElementById("deliveryZip");
  var deliveryPhone = document.getElementById("deliveryPhone");



  if (document.getElementById("copyBillingAddress").checked) {
    deliveryFirstName.value = billingFirstName;
    deliveryLastName.value = billingLastName;
    deliveryStreetAddress.value = billingStreetAddress;
    deliveryCity.value = billingCity;
    deliveryState.value = billingState;
    deliveryZip.value = billingZip;
    deliveryPhone.value = billingPhone;
    
   

//Use of setCustomValidity()
    deliveryFirstName.setCustomValidity("");
    deliveryLastName.setCustomValidity("");
    deliveryStreetAddress.setCustomValidity("");
    deliveryCity.setCustomValidity("");
    deliveryState.setCustomValidity("");
    deliveryZip.setCustomValidity("");
    deliveryPhone.setCustomValidity("");
  }
}

// Setting placeholder for the input fields
document.getElementById("billingFirstName").placeholder = "Enter your First Name";
document.getElementById("billingLastName").placeholder = "Enter your Last Name";
document.getElementById("billingStreetAddress").placeholder = "Enter your Street Address";
document.getElementById("billingCity").placeholder = "Enter your City";
document.getElementById("billingState").placeholder = "Select a state";
document.getElementById("billingZip").placeholder = "Enter your Zip Code";
document.getElementById("billingPhone").placeholder = "Enter your Phone Number";
document.getElementById("deliveryFirstName").placeholder = "Enter your First Name";
document.getElementById("deliveryLastName").placeholder = "Enter your Last Name";
document.getElementById("deliveryStreetAddress").placeholder = "Enter your Street Address";
document.getElementById("deliveryCity").placeholder = "Enter your City";
document.getElementById("deliveryState").placeholder = "Select a state";
document.getElementById("deliveryZip").placeholder = "Enter your Zip Code";
document.getElementById("deliveryPhone").placeholder = "Enter your Phone Number";



// Setting selectedIndex to -1 for the select elements

document.getElementById("billingState").selectedIndex = -1;
document.getElementById("deliveryState").selectedIndex = -1;

function resetForm() {
  document.getElementById("myForm").reset();
}



//Use of checkValidity()

function validateForm() {
  var form = document.querySelector("form");
  
  if (form.checkValidity()) {
    form.submit();
  } else {
    form.reportValidity();
  }
}





function validatePhoneNumber() {
  var phoneInput = document.getElementById("billingPhone");
  var phoneNumber = phoneInput.value;

  // This is used to check if the input provided is number or not 
  var regex = /^[0-9]+$/;

  if (!regex.test(phoneNumber)) {
    phoneInput.setCustomValidity("Please enter a valid phone number. Only numbers are allowed.");
  } else {
    phoneInput.setCustomValidity("");
  }
}

// Used to add event listener to the phone number input field
document.getElementById("billingPhone").addEventListener("input", validatePhoneNumber);
document.getElementById("deliveryPhone").addEventListener("input", validatePhoneNumber);
