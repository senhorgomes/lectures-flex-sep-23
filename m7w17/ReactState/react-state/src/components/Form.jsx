import { useState } from "react";
// We can use state for handling text inputs
function Form(props) {

    // const [currentUsername, setCurrentUsername] = useState("senhorgomes");
    const [editUserName, setEditUsername] = useState("");


    const handleClick = () => {
        props.setCurrentUsername(editUserName);
        // setCurrentUsername(editUserName)
        setEditUsername("");
    }

    return ( 
        <>
            {/* <h2>New username/email:{currentUsername}</h2> */}
            <label>Please insert name username/email:</label>
            <input type="text" placeholder="random@email.com" value={editUserName} onChange={(event)=>{setEditUsername(event.target.value)}}/>
            <button onClick={handleClick}>Update username!</button>
        </>
     );
}

export default Form;