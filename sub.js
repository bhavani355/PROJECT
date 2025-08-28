function validateForm() {
  let valid = true;

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  const requiredFields = [
    { id: "firstName", message: "First Name is required" },
    { id: "lastName", message: "Last Name is required" },
    { id: "fatherName", message: "Father's Name is required" },
    { id: "motherName", message: "Mother's Name is required" },
    { id: "dob", message: "Date of Birth is required" },
    { id: "address", message: "Address is required" },
    { id: "education", message: "Education is required" },
    { id: "email", message: "Email is required" },
    { id: "phone", message: "Phone number is required" },
  ];

  requiredFields.forEach(field => {
    const value = document.getElementById(field.id).value.trim();
    if (value === "") {
      document.getElementById(field.id + "Error").textContent = field.message;
      valid = false;
    }
  });

  // Gender validation
  if (!document.querySelector('input[name="gender"]:checked')) {
    document.getElementById("genderError").textContent = "Please select gender";
    valid = false;
  }

  // Email format
  const email = document.getElementById("email").value;
  if (email && (!email.includes("@") || !email.includes("."))) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    valid = false;
  }

  // Phone validation
  const phone = document.getElementById("phone").value;
  if (phone && (phone.length !== 10 || isNaN(phone))) {
    document.getElementById("phoneError").textContent = "Enter 10-digit phone number";
    valid = false;
  }

  // File validations
  if (!document.getElementById("photo").files.length) {
    document.getElementById("photoError").textContent = "Upload your photo";
    valid = false;
  }

  if (!document.getElementById("signature").files.length) {
    document.getElementById("signatureError").textContent = "Upload your signature";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully !");
  }

  return valid;

}
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}

form {
  max-width: 500px;
}

label {
  display: block;
  margin-top: 10px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
}

.error {
  color: red;
  font-size: 13px;
}
