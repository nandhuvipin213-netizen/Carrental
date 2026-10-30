const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const carData = {
            name: this.dataset.car,
            image: this.dataset.image,
            model: this.dataset.model,
            price: this.dataset.price
        };

        localStorage.setItem(
            "selectedCar",
            JSON.stringify(carData)
        );

        window.location.href = "booking.html";

    });

});