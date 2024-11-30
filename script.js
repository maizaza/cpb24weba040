function changeTheme() {
    document.body.classList.toggle('dark-mode');
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('contact-form').reset(); // Clear form fields
});