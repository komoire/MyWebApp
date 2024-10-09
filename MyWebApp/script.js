// Simple form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    alert(`Thank you, ${name}! We will contact you at ${email}.`);
});
