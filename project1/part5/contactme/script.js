// Initialize Email.js with your service ID
emailjs.init("Yqfndv3r_jlH6tNkn");

function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('success-message').style.display = 'none';
        return false;
    }

    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    // Replace "your_service_id" with the Service ID from your Gmail service
    // Replace "your_template_id" with the Template ID from your Gmail service
    emailjs.send("service_ogf3db6", "template_1kt2trm", templateParams)
        .then(function (response) {
            document.getElementById('error-message').style.display = 'none';
            document.getElementById('success-message').style.display = 'block';
        }, function (error) {
            document.getElementById('success-message').style.display = 'none';
            document.getElementById('error-message').style.display = 'block';
        });

    return false;
}
