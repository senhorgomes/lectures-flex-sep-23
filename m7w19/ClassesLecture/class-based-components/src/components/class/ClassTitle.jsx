//  Components are actually a class in class based React
// New components created are subclasses
//  With classes we can't return things
// Classes can return values with methods
import { Component } from "react";

class ClassTitle extends Component {
    // constructor(props){
    //     super(props)
    // }
    // We need to create a render method that exists within the Component class
    // React will call this method once our component is rendered
    // When do these methods get called?
    // React Lifecycle methods

    componentWillUnmount(){
        console.log("I have been removed from the DOM as well!")
    }

    render(){
        return (
            <h1>{this.props.heading}</h1>
        )
    }

}

export default ClassTitle;