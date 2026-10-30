// GET ELEMENTS


const carImage = document.getElementById("carImage");
const carName = document.getElementById("carName");
const carModel = document.getElementById("carModel");
const dailyPrice = document.getElementById("dailyPrice");

const rentalDays = document.getElementById("rentalDays");
const totalPrice = document.getElementById("totalPrice");

const pickupDate = document.getElementById("pickupDate");
const returnDate = document.getElementById("returnDate");

const insurance = document.getElementById("insurance");
const driver = document.getElementById("driver");

const insuranceRow = document.getElementById("insuranceRow");
const driverRow = document.getElementById("driverRow");

const insurancePrice = document.getElementById("insurancePrice");
const driverPrice = document.getElementById("driverPrice");

const continueBtn = document.getElementById("continueBtn");



// LOAD SELECTED CAR


const savedCar = localStorage.getItem("selectedCar");

let selectedCar;

if (savedCar) {

    selectedCar = JSON.parse(savedCar);

} else {

    selectedCar = {
        name: "Toyota Fortuner",
        image: "/CARRENTAL/carimg/fortuner.png",
        model: "2024 Model",
        price: 2999
    };

}



// SHOW SELECTED CAR


carImage.src = selectedCar.image;
carImage.alt = selectedCar.name;

carName.textContent = selectedCar.name;

carModel.textContent = selectedCar.model;



// CAR PRICE


let price = Number(selectedCar.price);

dailyPrice.textContent =
    price.toLocaleString("en-IN");



// SET MINIMUM DATE


const today =
    new Date().toISOString().split("T")[0];

pickupDate.min = today;
returnDate.min = today;



// CALCULATE RENTAL DAYS


function calculateDays() {

    if (!pickupDate.value || !returnDate.value) {

        rentalDays.textContent = "1";

        calculateTotal(1);

        return;
    }


    const start =
        new Date(pickupDate.value);

    const end =
        new Date(returnDate.value);


    const difference =
        end - start;


    const days =
        Math.ceil(
            difference /
            (1000 * 60 * 60 * 24)
        );


    if (days <= 0) {

        rentalDays.textContent = "1";

        calculateTotal(1);

        return;
    }


    rentalDays.textContent = days;

    calculateTotal(days);
}



// CALCULATE TOTAL


function calculateTotal(days) {

    let total = price * days;


    // Insurance

    if (insurance.checked) {

        const insuranceCost = 300 * days;

        insurancePrice.textContent =
            insuranceCost.toLocaleString("en-IN");

        insuranceRow.classList.remove("hidden");

        total += insuranceCost;

    } else {

        insuranceRow.classList.add("hidden");

    }


    // Driver

    if (driver.checked) {

        const driverCost = 800 * days;

        driverPrice.textContent =
            driverCost.toLocaleString("en-IN");

        driverRow.classList.remove("hidden");

        total += driverCost;

    } else {

        driverRow.classList.add("hidden");

    }


    totalPrice.textContent =
        total.toLocaleString("en-IN");
}



// DATE EVENTS


pickupDate.addEventListener(
    "change",
    function () {

        returnDate.min =
            pickupDate.value;

        calculateDays();

    }
);


returnDate.addEventListener(
    "change",
    calculateDays
);



// EXTRA OPTIONS


insurance.addEventListener(
    "change",
    calculateDays
);


driver.addEventListener(
    "change",
    calculateDays
);



// CONTINUE BUTTON


continueBtn.addEventListener(
    "click",
    function () {

        const name =
            document.getElementById("name")
            .value.trim();

        const phone =
            document.getElementById("phone")
            .value.trim();

        const email =
            document.getElementById("email")
            .value.trim();

        const pickup =
            pickupDate.value;

        const returnDateValue =
            returnDate.value;

        const location =
            document.getElementById("pickupLocation")
            .value;

        const time =
            document.getElementById("pickupTime")
            .value;


        // ============================
        // VALIDATION
        // ============================

        if (!name) {

            alert("Please enter your name.");

            return;
        }


        if (!phone) {

            alert("Please enter your phone number.");

            return;
        }


        if (!email) {

            alert("Please enter your email.");

            return;
        }


        if (!pickup) {

            alert("Please select pickup date.");

            return;
        }


        if (!returnDateValue) {

            alert("Please select return date.");

            return;
        }


        if (!location) {

            alert("Please select pickup location.");

            return;
        }


        if (!time) {

            alert("Please select pickup time.");

            return;
        }



        // SAVE BOOKING
        

        const booking = {

            car: selectedCar.name,

            image: selectedCar.image,

            model: selectedCar.model,

            price: selectedCar.price,

            name: name,

            phone: phone,

            email: email,

            pickupDate: pickup,

            returnDate: returnDateValue,

            location: location,

            time: time,

            insurance: insurance.checked,

            driver: driver.checked,

            total: totalPrice.textContent

        };


        localStorage.setItem(
            "bookingData",
            JSON.stringify(booking)
        );


        // GO TO CONFIRMATION

        window.location.href =
            "confirmation.html";

    }
);