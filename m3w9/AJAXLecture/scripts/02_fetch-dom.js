// https://api.tvmaze.com/search/shows?q=big%20bang%20theory
// Fetching for an api

// Everytime I click on the button on the page, I want this fetch call to be made
// Find our button

// It waits until the body is done being populated, the DOM is created
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector("button");
    console.log(searchButton)
    // I need an event listener for my button, click
    searchButton.addEventListener("click", () => {
        // disable the button
        searchButton.disabled = true;
        // We make our fetch call
        fetch('https://api.tvmaze.com/search/shows?q=dark')
            .then((response) => response.json())
            .then((results) => {
                // Find a way to add the result titles to our ul element
                // Find the ul element
                const list = document.querySelector("ul");
                // every result, grab the title, create an li element and append to the ul element
                // Loop through the results
                for (const singleResult of results) {
                    console.log(singleResult.show.name);
                    // Create the li element
                    const node = document.createElement("li");
                    // Create the textnode, or the text
                    const textnode = document.createTextNode(singleResult.show.name);
                    // Combine them together
                    node.appendChild(textnode);
                    // combine the li element to the ul
                    list.appendChild(node);
                }
            });
    })
})
