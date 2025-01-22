import Component2 from "./Component2";

function Component1(props) {
    return ( 
        <div>
            <h2>First child component</h2>
            <Component2 info={props.info}/>
        </div>
     );
}

export default Component1;