document.getElementById('submit-btn').addEventListener('click', function(event) {
    let valid = true;

    // Clear previous error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('message-error').textContent = '';
    document.getElementById('ratings-error').textContent = '';

    // Validate Name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('name-error').textContent = 'Name is required.';
        valid = false;
    }

    // Validate Message
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('message-error').textContent = 'Message is required.';
        valid = false;
    }

    // Validate Ratings
    const ratings = document.querySelector('input[name="ratings"]:checked');
    if (!ratings) {
        document.getElementById('ratings-error').textContent = 'Please select a rating.';
        valid = false;
    }

    // Prevent form submission if invalid
    if (!valid) {
        event.preventDefault();
    }
});


document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const responseMessage = document.getElementById("response-message");
  
    // Simple validation
    if (!name || !email || !message) {
      responseMessage.textContent = "All fields are required.";
      responseMessage.style.color = "red";
      return;
    }
  
    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      name: name,
      email: email,
      message: message,
    })
      .then(() => {
        responseMessage.textContent = "Message sent successfully!";
        responseMessage.style.color = "green";
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        responseMessage.textContent = "Failed to send the message. Please try again.";
        responseMessage.style.color = "red";
      });
  
    // Clear the form
    document.getElementById("contact-form").reset();
  });
  