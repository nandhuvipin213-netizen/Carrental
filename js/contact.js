// form get

const contactForm = document.getElementById("contactForm")

// submitt

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();

    const phone = document.getElementById("contactPhone").value.trim();

    const email = document.getElementById("contactEmail").value.trim();

    const subject = document.getElementById("subject").value;

    const message = document.getElementById("message").value.trim();

    // Validation

    if (!name) {
        alert("Please enter your name")

        return;
    }

    if (!phone) {
        alert("please enter your phone number")

        return;
    }

    if (!email) {
        alert("Please enter your email")

        return;
    }

    if (!subject) {
        alert("please select a subject")

        return;
    }

    // success

    alert("Thank you " +
        name +
        "! Your message has been sent successfully."
    );


    // clear
    contactForm.reset();

}

)

