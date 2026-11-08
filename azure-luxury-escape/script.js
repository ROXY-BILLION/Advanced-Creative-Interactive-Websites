/*** Mobile Navigation ***/

const MenuBtn = document.getElementById("menuToggle");
const NavLinks = document.getElementById("navLinks");


MenuBtn.addEventListener("click", function () {

    NavLinks.classList.toggle("active");

});

/*** Close Navigation After Selecting a Link ***/

NavLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        NavLinks.classList.remove("active");

    });

});




/*** Destination Filtering ***/

const FilterButtons = document.querySelectorAll(".filter-btn");
const DestinationCards = document.querySelectorAll(".destination-card");


FilterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const SelectedCategory = button.dataset.category;


        /*** Filter Destination Cards ***/

        DestinationCards.forEach(function (card) {

            if (
                SelectedCategory === "all" ||
                card.dataset.category === SelectedCategory
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });


        /*** Update Active Filter Button ***/

        FilterButtons.forEach(function (filter) {

            filter.classList.remove("active");

        });

        button.classList.add("active");

    });

});


