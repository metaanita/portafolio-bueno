const sendEmail = (params) => {
    //Initalizatino of emailjs service using public key
    emailjs.init("5otYHAum_TFM2pcNg");

    emailjs.send( 'service_zhv21x9', 'template_fytrpbp', params ).then(res => {
        alert("Email was successfully sent");
        form.reset();
    }, (err) => {
        alert("Error sending email")
    })
}


// This executes when the user presses the submit button "Send email" in the contact form
document.getElementById("emailForm").addEventListener("submit", (evt) => {
    evt.preventDefault();

    const form = evt.target;

    // get Values
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const subject =  form.elements.subject.value;
    const message = form.elements.message.value;

    //Email object for emailjs
    var params = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    };

    //Verify if the subject is empty
    if(!subject){
        const result = confirm("Subject is empty. Are you sure you want to send the email?");

        if(result){
            sendEmail(params);
        }else{
            alert("Email not sended!");
        }
    }else{
        sendEmail(params);
    }
})