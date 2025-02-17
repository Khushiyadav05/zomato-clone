document.getElementById("search").addEventListener("input", function () {
    let query = this.value.toLowerCase();
    let restaurants = document.querySelectorAll(".restaurant-card");

    restaurants.forEach(card => {
        let name = card.querySelector("h3").innerText.toLowerCase();
        let cuisine = card.querySelector("p").innerText.toLowerCase();

        if (name.includes(query) || cuisine.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
