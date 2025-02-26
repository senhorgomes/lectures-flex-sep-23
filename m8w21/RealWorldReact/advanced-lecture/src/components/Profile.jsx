import { useEffect, useState } from "react";

import { StockCard } from "../StockCard";
export const Profile = () => {
    const [userData, setUserData] = useState({})

    // We can use the id to make a fetch reques to fetch the user information
    useEffect(()=> {
        fetch(`/api/users/${id}`)
        .then(res => res.json())
        .then(userResponseData=> setUserData(userResponseData.data))
        
        // Fetch the user system data
    }, [])
    return (
        <>
            <h1>Profile for {userData?.name}</h1>
            <h2>Your systems:</h2>
            <section>
            {
              systemData.map((item, index) =>
                <StockCard
                  id={item.id}
                  index={index}
                  name={item.name}
                  image={item.image}
                  count={item.count}
                  user_id={item.user_id}
                  // setInventory={setInventory}

                />
              )
            }
            </section>
        </>
    )
}