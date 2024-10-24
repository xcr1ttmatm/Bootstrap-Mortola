// Ensure EmailJS is initialized with your user ID
(function(){
    emailjs.init("y-6vbKHEMfKaqhXmC"); // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Generate a unique ID for your message
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    emailjs.send('service_o9rk1pc', 'template_mi9midh', templateParams) // Replace with your service and template IDs
        .then(function(response) {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Please try again.');
        });
});
