$(document).ready(()=> {

    // We want to grab the form
    const form = $('form');
    // Listen to a form submission event/ submit event
    form.on("submit", (event)=> {
        // prevent my form from refreshing the page
        // Prevent the default behaviour from happening
        event.preventDefault();

        // First grabbing the element that holds the users search term
        const searchTerm = $("#searchTerm").val();
        console.log(searchTerm)
        // Once that happens, proceed with the usual
        // Fetch the shows
        // Populate the list
        $.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`) //=> We need to make this dynamic
        .then((results)=> {
            const list = $("ul");
            // We need to clear up the previous results
            list.empty();
            // Then we populate a new list
            for(const singleResult of results){
                const liElement = $(`<li>${singleResult.show.name}</li>`);
                // combine the li element to the ul
                list.append(liElement)
            }
            // We will need to clear our input field
            // We can set it to an empty string
            $("#searchTerm").val("");
        });
    })

})