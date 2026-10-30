const cars = document.querySelectorAll(".vehicle");

const searchInput = document.getElementById("searchCar");
const categoryFilter = document.getElementById("categoryFilter");
const sortCars = document.getElementById("sortCars");

const priceFilter = document.getElementById("priceFilter");

const resultCount = document.getElementById("resultCount");
const carCount = document.getElementById("carCount");

const noCars = document.getElementById("noCars");


//  FILTER FUNCTION 

function filterCars() {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const category =
        categoryFilter.value;

    const maxPrice =
        Number(priceFilter.value);


    const selectedSeats =
        [...document.querySelectorAll(".seatFilter:checked")]
            .map(item => item.value);

    const selectedFuel =
        [...document.querySelectorAll(".fuelFilter:checked")]
            .map(item => item.value);

    const selectedTransmission =
        [...document.querySelectorAll(".transFilter:checked")]
            .map(item => item.value);


    let visibleCars = [];


    cars.forEach(car => {

        const name =
            car.dataset.name.toLowerCase();

        const carCategory =
            car.dataset.category;

        const price =
            Number(car.dataset.price);

        const seats =
            car.dataset.seats;

        const fuel =
            car.dataset.fuel;

        const transmission =
            car.dataset.transmission;


        const matchesSearch =
            name.includes(searchValue);

        const matchesCategory =
            category === "all" ||
            carCategory === category;

        const matchesPrice =
            price <= maxPrice;

        const matchesSeats =
            selectedSeats.length === 0 ||
            selectedSeats.includes(seats);

        const matchesFuel =
            selectedFuel.length === 0 ||
            selectedFuel.includes(fuel);

        const matchesTransmission =
            selectedTransmission.length === 0 ||
            selectedTransmission.includes(transmission);


        if (
            matchesSearch &&
            matchesCategory &&
            matchesPrice &&
            matchesSeats &&
            matchesFuel &&
            matchesTransmission
        ) {

            car.style.display = "block";

            visibleCars.push(car);

        } else {

            car.style.display = "none";

        }

    });


    resultCount.textContent =
        visibleCars.length;

    carCount.textContent =
        visibleCars.length;


    if (visibleCars.length === 0) {

        noCars.style.display = "block";

    } else {

        noCars.style.display = "none";

    }

}


//  SEARCH 

searchInput.addEventListener(
    "input",
    filterCars
);


//  CATEGORY 

categoryFilter.addEventListener(
    "change",
    filterCars
);


//  PRICE 

priceFilter.addEventListener(
    "input",
    function () {

        document.getElementById(
            "maxPriceText"
        ).textContent = this.value;

        filterCars();

    }
);


//  CHECKBOXES 

document
    .querySelectorAll(
        ".seatFilter, .fuelFilter, .transFilter"
    )
    .forEach(function (checkbox) {

        checkbox.addEventListener(
            "change",
            filterCars
        );

    });


//  SORT 

sortCars.addEventListener(
    "change",
    function () {

        const grid =
            document.getElementById("carsGrid");

        const visibleCars =
            [...cars].filter(
                car => car.style.display !== "none"
            );


        if (this.value === "low") {

            visibleCars.sort(
                (a, b) =>
                    Number(a.dataset.price) -
                    Number(b.dataset.price)
            );

        }


        if (this.value === "high") {

            visibleCars.sort(
                (a, b) =>
                    Number(b.dataset.price) -
                    Number(a.dataset.price)
            );

        }


        if (this.value === "name") {

            visibleCars.sort(
                (a, b) =>
                    a.dataset.name.localeCompare(
                        b.dataset.name
                    )
            );

        }


        visibleCars.forEach(car => {
            grid.appendChild(car);
        });

    }
);


//  FAVORITE 

document
    .querySelectorAll(".favorite")
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                this.classList.toggle("liked");

                if (
                    this.classList.contains("liked")
                ) {

                    this.textContent = "♥";

                } else {

                    this.textContent = "♡";

                }

            }
        );

    });


//  CLEAR FILTERS 

document
    .getElementById("clearFilters")
    .addEventListener(
        "click",
        function () {

            searchInput.value = "";

            categoryFilter.value = "all";

            sortCars.value = "default";

            priceFilter.value = "5000";

            document.getElementById(
                "maxPriceText"
            ).textContent = "5000";


            document
                .querySelectorAll(
                    ".seatFilter, .fuelFilter, .transFilter"
                )
                .forEach(function (checkbox) {

                    checkbox.checked = false;

                });


            filterCars();

        }
    );


//  DARK MODE 

// const themeButton =
//     document.getElementById("themeButton");


// themeButton.addEventListener(
//     "click",
//     function () {

//         document.body.classList.toggle("dark");

//         if (
//             document.body.classList.contains("dark")
//         ) {

//             this.textContent = "☀️";

//             localStorage.setItem(
//                 "driveEasyTheme",
//                 "dark"
//             );

//         } else {

//             this.textContent = "🌙";

//             localStorage.setItem(
//                 "driveEasyTheme",
//                 "light"
//             );

//         }

//     }
// );


// // LOAD THEME

// if (
//     localStorage.getItem("driveEasyTheme")
//     === "dark"
// ) {

//     document.body.classList.add("dark");

//     themeButton.textContent = "☀️";

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



//  MOBILE MENU

const mobileMenu =
    document.getElementById("mobileMenu");

mobileMenu.addEventListener(
    "click",
    function () {

        const nav =
            document.querySelector(".cars-header nav");

        if (nav.style.display === "flex") {

            nav.style.display = "none";

        } else {

            nav.style.display = "flex";

            nav.style.position = "absolute";
            nav.style.top = "76px";
            nav.style.left = "0";
            nav.style.right = "0";

            nav.style.padding = "20px";

            nav.style.background = "white";

            nav.style.flexDirection = "column";

        }

    }
);