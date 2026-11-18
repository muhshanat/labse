// Search products
let searchInput = document.querySelector(".searchbar_input");
let searchButton = document.querySelector(".search-btn");
let products = document.querySelectorAll(".product-box");

searchButton.addEventListener("click", function() {

    let searchValue = searchInput.value.toLowerCase();
    let found = false;

    products.forEach(function(product) {

        let productName = product.querySelector("h3").innerText.toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = "block";
            found = true;
        }
        else {
            product.style.display = "none";
        }

    });

    if (!found) {
        alert("No product found!");
    }

});

// Search when pressing Enter
searchInput.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
        searchButton.click();
    }

});

// Logout confirmation
let logoutButton = document.querySelector(".logout-btn");

logoutButton.addEventListener("click", function(event) {

    let confirmLogout = confirm("Are you sure you want to logout?");

    if (!confirmLogout) {
        event.preventDefault();
    }

});