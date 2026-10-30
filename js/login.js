// Get element

const loginFormContainer = document.getElementById("loginFormContaqinerS");

const signupFormContainer = document.getElementById("signupFormContainer");

const showSignup = document.getElementById("showSignup");

const showLogin = document.getElementById("showLogin");

// signup

showSignup.addEventListener(
    "click",
    function () {
        loginFormContainer.classList.add("hidden");

        signupFormContainer.classList.remove("hidden")
    }
)

// login

showLogin.addEventListener(
    "click",
    function () {

        signupFormContainer.classList.add("hidden")

        loginFormContainer.classList.remove("hidden")
    }
)

// password show/hidden

const passwordButtons = document.querySelectorAll(".show-password")

passwordButtons, forEach(function (button) {
    button.addEventListener(
        "click",
        function () {
            const targetId =
                this.dataset.target;

            const passwordInput =
                document.getElementById(targetId);


            if (passwordInput.type === "password") {

                passwordInput.type = "text";

                this.textContent = "🙈";

            } else {

                passwordInput.type = "password";

                this.textContent = "👁";

            }

        }
    )
})

// login

const loginForm =
    document.getElementById("loginForm");


loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const email =
            document.getElementById("loginEmail")
                .value.trim();

        const password =
            document.getElementById("loginPassword")
                .value.trim();


        if (!email) {

            alert("Please enter your email.");

            return;

        }
        if (!password) {
            alert("Please enter your password.");
            return;
        }
        alert("Login successful!");
    }
);

// signup

const signupForm =
    document.getElementById("signupForm");


signupForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("signupName")
            .value.trim();

        const email =
            document.getElementById("signupEmail")
            .value.trim();

        const phone =
            document.getElementById("signupPhone")
            .value.trim();

        const password =
            document.getElementById("signupPassword")
            .value;

        const confirmPassword =
            document.getElementById("confirmPassword")
            .value;

        const terms =
            document.getElementById("terms").checked;


        if (!name) {

            alert("Please enter your name.");

            return;

        }


        if (!email) {

            alert("Please enter your email.");

            return;

        }


        if (!phone) {

            alert("Please enter your phone number.");

            return;

        }


        if (!password) {

            alert("Please create a password.");

            return;

        }


        if (password.length < 6) {

            alert(
                "Password must contain at least 6 characters."
            );

            return;

        }


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;

        }


        if (!terms) {

            alert(
                "Please agree to the Terms & Conditions."
            );

            return;

        }


        // Save user information

        const user = {

            name: name,

            email: email,

            phone: phone,

            password: password

        };


        localStorage.setItem(
            "driveEasyUser",
            JSON.stringify(user)
        );


        alert(
            "Account created successfully!"
        );


        // Switch to login

        signupForm.reset();

        signupFormContainer.classList.add("hidden");

        loginFormContainer.classList.remove("hidden");

    }
);

