$(document).ready(() => {
    const populateList = (data) => {
        const list = $("ul");
            // We need to clear up the previous to-do list
            list.empty();
            // Then we populate a new list
            for (const singleResult of data) {
                const liElement = $(`<li>${singleResult.item}</li>`);
                // combine the li element to the ul
                list.append(liElement)
            }
            // We will need to clear our input field
            // We can set it to an empty string
            $("#toDoListItem").val("");
    }
    $.get('http://localhost:8001/api/list')
        // .then((data)=> console.log(data));
        .then((data) => {
            populateList(data)
        });
    // We want to grab the form
    const form = $('form');
    // Listen to a form submission event/ submit event
    form.on("submit", (event) => {
        // prevent my form from refreshing the page
        // Prevent the default behaviour from happening
        event.preventDefault();

        // First grabbing the element that holds the users search term
        const newToDoListItem = $("#toDoListItem").val();
        // console.log(searchTerm)
        $.post('http://localhost:8001/list', { item: newToDoListItem })
            .then((data) => {
                populateList(data)
            });

        // $.get(``) //=> We need to make this dynamic
        // .then((results)=> {
        //     const list = $("ul");
        //     // We need to clear up the previous results
        //     list.empty();
        //     // Then we populate a new list
        //     for(const singleResult of results){
        //         const liElement = $(`<li>${singleResult.show.name}</li>`);
        //         // combine the li element to the ul
        //         list.append(liElement)
        //     }
        //     // We will need to clear our input field
        //     // We can set it to an empty string
        //     $("#searchTerm").val("");
        // });
    })

})