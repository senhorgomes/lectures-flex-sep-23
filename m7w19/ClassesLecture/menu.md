* Classes in Javascript
    - Templates for creating objects
* Functional Components
* Class-Based Components - React
    * Props
    * State
    * Events
    * useEffect
* Lifecycle methods

# Mounting

constructor()
getDerivedStateFromProps()
render()
componentDidMount() -> Can be used to call functions once the component is rendered, ie fetch calls or API calls = useEffect()

# Update
getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate() -> Method runs anytime data in the component changes, this will trigger a re-render = useState, useEffect()=> Dependcy Array

# Unmounting

When a component is removed from the DOM
componentWillUnmount() => useEffect

React used to use Class-Based Components

Functional components in React
Questions?


# A majority of companies are using legacy React (class based components)

It is a great introduction to OOP, and into other languages

Reasons to use functional components as opposed to Class-based components?

Its best to either have an app thats all Class-based components or functional components
You can use Classes in functional components