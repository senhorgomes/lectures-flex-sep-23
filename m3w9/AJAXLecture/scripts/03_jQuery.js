// https://api.tvmaze.com/search/shows?q=big%20bang%20theory
// Fetching for an api

// document.addEventListener('DOMContentLoaded', () => {
$(document).ready(()=> {
    const searchButton = $("button");
    searchButton.on("click", ()=> {
        searchButton.attr("disabled", true);
        $.get('https://api.tvmaze.com/search/shows?q=dark')
        .then((results)=> {
            const list = $("ul");
            for(const singleResult of results){
                const liElement = $(`<li>${singleResult.show.name}</li>`);
                // combine the li element to the ul
                list.append(liElement)
            }
        });
        // fetch('https://api.tvmaze.com/search/shows?q=dark')
        // .then((response) => response.json())
        // GET Request
        // jQuery parses the response for us
        // $.ajax({
        //     url: 'https://api.tvmaze.com/search/shows?q=dark',
        //     // Once a successful request has been made
        //     success: (results)=> {
        //         const list = $("ul");
        //         for(const singleResult of results){
        //             const liElement = $(`<li>${singleResult.show.name}</li>`);
        //             // combine the li element to the ul
        //             list.append(liElement)
        //         }
        //     },
        //     method: "POST"
        //     // error -> .catch
        // })
        // .then((results)=> {
        //     const list = $("ul");
        //     for(const singleResult of results){
        //         const liElement = $(`<li>${singleResult.show.name}</li>`);
        //         // combine the li element to the ul
        //         list.append(liElement)
        //     }
        // });
        // Shorthand
        
    });
})
//     const searchButton = document.querySelector("button");
//     console.log(searchButton)
//     // I need an event listener for my button, click
//     searchButton.addEventListener("click", () => {
//         // disable the button
//         searchButton.disabled = true;
//         // We make our fetch call
//         fetch('https://api.tvmaze.com/search/shows?q=dark')
//             .then((response) => response.json())
//             .then((results) => {
//                 // Find a way to add the result titles to our ul element
//                 // Find the ul element
//                 const list = document.querySelector("ul");
//                 // every result, grab the title, create an li element and append to the ul element
//                 // Loop through the results
//                 for (const singleResult of results) {
//                     console.log(singleResult.show.name);
//                     // Create the li element
//                     const node = document.createElement("li");
//                     // Create the textnode, or the text
//                     const textnode = document.createTextNode(singleResult.show.name);
//                     // Combine them together
//                     node.appendChild(textnode);
//                     // combine the li element to the ul
//                     list.appendChild(node);
//                 }
//             });
//     })
// })