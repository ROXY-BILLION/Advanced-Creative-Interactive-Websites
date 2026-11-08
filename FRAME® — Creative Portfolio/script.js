/*** Project Filtering ***/
const FilterButton = document.querySelectorAll(".filter-btn");
const ProjectCard = document.querySelectorAll(".project-card");

FilterButton.forEach(function (button) {
    button.addEventListener("click", function () {

        const category = button.dataset.category;

        ProjectCard.forEach(function (card) {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

        FilterButton.forEach(function (filter) {
            filter.classList.remove("active");
        });

        button.classList.add("active");

    });
});
