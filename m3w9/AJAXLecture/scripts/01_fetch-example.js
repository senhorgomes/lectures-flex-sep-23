// https://api.tvmaze.com/search/shows?q=big%20bang%20theory
// Fetching for an api

fetch('https://api.tvmaze.com/search/shows?q=mr%20robot')
.then((response)=> response.json())
// Before we can console the result, we need to parse the response and wait for it to be finished
.then((result)=> console.log(result));