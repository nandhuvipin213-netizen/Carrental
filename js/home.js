const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const location = document.getElementById("location").value.trim();
    const pickupDate = document.getElementById("pickupDate").value;
    const returnDate = document.getElementById("returnDate").value;
    const carType = document.getElementById("carType").value;

    if (location === "") {
        alert("Please enter pickup location.");
        return;
    }

    if (pickupDate === "") {
        alert("Please select pickup date.");
        return;
    }

    if (returnDate === "") {
        alert("Please select return date.");
        return;
    }

    if (new Date(returnDate) < new Date(pickupDate)) {
        alert("Return date must be after pickup date.");
        return;
    }

    // Save search information
    localStorage.setItem("pickupLocation", location);
    localStorage.setItem("pickupDate", pickupDate);
    localStorage.setItem("returnDate", returnDate);
    localStorage.setItem("carType", carType);

    // Go to cars page
    window.location.href = "cars.html";
});


//  HEART BUTTON 

const heartButtons = document.querySelectorAll(".heart");

heartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        this.classList.toggle("liked");

        if (this.classList.contains("liked")) {
            this.textContent = "♥";
        } else {
            this.textContent = "♡";
        }

    });

});


// ================= THEME =================

// const themeBtn = document.getElementById("themeBtn");

// themeBtn.addEventListener("click", function () {

//     document.body.classList.toggle("dark-mode");

//     if (document.body.classList.contains("dark-mode")) {
//         themeBtn.textContent = "☀️";
//         localStorage.setItem("theme", "dark");
//     } else {
//         themeBtn.textContent = "🌙";
//         localStorage.setItem("theme", "light");
//     }

// });


// // Load saved theme

// if (localStorage.getItem("theme") === "dark") {
//     document.body.classList.add("dark-mode");
//     themeBtn.textContent = "☀️";
// }
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }

});


// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
} else {
    themeBtn.textContent = "🌙";
}

// ================= NEWSLETTER =================

const newsletterForm =
    document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email =
        document.getElementById("newsletterEmail").value.trim();

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    alert("Thank you for subscribing!");

    this.reset();

});