/* =========================================
   STICKY NAVBAR
========================================= */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(11,17,32,.95)";
        navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,.3)";

    }

    else {

        navbar.style.background = "rgba(11,17,32,.75)";
        navbar.style.boxShadow = "none";

    }

});



/* =========================================
   SCROLL ANIMATIONS
========================================= */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: .2

    }

);



document.querySelectorAll(

    ".stat-card,.benefit-card,.cta-box"

).forEach(

    element => {

        observer.observe(element);

    }

);



/* =========================================
   HERO IMAGE PARALLAX
========================================= */

window.addEventListener(

    "mousemove",

    e => {

        const image = document.querySelector(

            ".hero-image-wrapper img"

        );

        if (!image) return;

        let x =

            (window.innerWidth / 2 - e.pageX) / 60;

        let y =

            (window.innerHeight / 2 - e.pageY) / 60;

        image.style.transform =

            `translate(${x}px,${y}px)`;

    }

);



/* =========================================
   BUTTON RIPPLE EFFECT
========================================= */

const buttons = document.querySelectorAll(

    ".btn-primary,.btn-secondary"

);


buttons.forEach(

    button => {

        button.addEventListener(

            "mouseenter",

            () => {

                button.style.transition = ".3s";

            }

        );

    }

);



/* =========================================
   ACTIVE LINK
========================================= */

const currentLocation = location.href;

const menuItem = document.querySelectorAll(

    ".nav-links a"

);


menuItem.forEach(

    link => {

        if (

            link.href === currentLocation

        ) {

            link.classList.add(

                "active"

            );

        }

    }

);



/* =========================================
   PAGE LOAD ANIMATION
========================================= */

window.addEventListener(

    "load",

    () => {

        document.body.classList.add(

            "loaded"

        );

    }

);