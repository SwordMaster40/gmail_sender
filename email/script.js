emailjs.init("EqFBaxH7q3IKH6LEK");

const sendBth = document.querySelector('.send-btn');
const result = document.querySelector('.result');

sendBth.addEventListener('click',sendEmail);

function sendEmail()    
{
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_uq00b4o", "template_h2fp8xn",  {
        to_email: to,
        subject: subject,
        message: message
    })
        .then(function ()   {
            result.innerHTML = "Email send successfully!";
            result.style.opacity = 1;
        }, function (error) {
            result.innerHTML = "Email sending failed!";
            result.style.opacity = 1;
        });
}