import { Component } from "react";

class ClassCounter extends Component {
    constructor() {
        super();
        // If we want to use state in a class based component we need to call super constructor
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    // This only gets called once, upon the initial rendering of the component
    componentDidMount(){
        // Best usecase scenario
        // Fetch/API requests
        // console.log("This was only called twice!")
    }

    // Updating
    //  This will be called if the component gets updated
    componentDidUpdate(){
        // console.log("Something changed!")
    }

    handleClick(){
        // SetState is being brought in from the Component Class
        // Whenever we want to update state we need to call upon the reference of state-> this.state
        this.setState({
            count: this.state.count + 1
        })
    }

    render() { 
        return ( 
            <>
            <h1>Class Count:{this.state.count}</h1>
            <button onClick={this.handleClick}>Increase!</button>
        </>
         );
    }
}
 
export default ClassCounter;