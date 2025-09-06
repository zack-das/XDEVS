
document.getElementById('contactform').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // loading state
  const submitBtn = this.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;

  // Get form values
  const formData = {
    from_name: document.getElementById('fullname').value,
    from_email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
  };

  // Send email
  emailjs.send('service_1q826dn', 'template_ozin8cd', formData)
    .then(function(response) {
      // Success
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
      setTimeout(() => {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      }, 2000);
      
      // Show success message
      const successDiv = document.createElement('div');
      successDiv.className = 'form-success';
      successDiv.innerHTML = 'Message sent successfully! We\'ll get back to you soon.';
      document.getElementById('contactform').prepend(successDiv);
      
      // Reset form
      document.getElementById('contactform').reset();
      
      // Remove message after 5 seconds
      setTimeout(() => {
        successDiv.remove();
      }, 5000);
    }, function(error) {
      // Error
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
      
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again later or contact us directly at hello@xdevs.com');
    });
});