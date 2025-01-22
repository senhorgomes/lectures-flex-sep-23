// Its going to display the following information
// Pet Owner name
// The Pet name
// The pet type: dog || cat

function PetOwner(props) {
    // Functional components can only return only element -> a wrapper
    // We need to label the information that is coming into the component
    // Destructer the object in here
    // But why is that a bad thing to do?
    return (
        <div>
            <label>Owner Name:</label>
            <h2>{props.ownerName}</h2>
            <label>Pet Name:</label>
            <h2>{props.petName}</h2>
            <label>Pet Type:</label>
            {/* If the petType is "Cat" it will display a cat emoji */}
            {props.petType === "Cat" && <h2>🐱</h2>}
            {/* If the petType is "Dog" it will display a dog emoji */}

            {/* && or ? : */}
            {props.petType === "Dog" && <h2>🐶</h2>}
            {/* <h2>{props.petType}</h2> */}
        </div>
    );
}

export default PetOwner;