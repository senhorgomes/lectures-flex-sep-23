Build a counter app
- Expand on the counter app functionality
    - Modify it to be a carousel
        - Extract logic into custom hook


- What happens when we need to fetch information from a server into our React app?

- When we fetch information from another server or another API
- We dont want to stop our React app from rendering
<!-- Fetching Data -->
Takes a whole hour
<!-- Rendering App & Data -->

Instead
Render the App, fetch the data, and then rerender our app with the new data

useEffect -> Execute code after the first render

- Dive into useEffect
    - Integrate useEffect into our custom hook