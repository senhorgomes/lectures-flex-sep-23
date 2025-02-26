import { useState, useEffect } from "react";
import StockCard from "./StockCard";
import { Grid2 } from "@mui/material";
function Dashboard() {

    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch("/api/products/featured")
            .then((response) => response.json())
            .then((dataObject) => setInventory(dataObject.data))
    }, [])

    return (
        <section>
            <h1>Welcome to RetroShop</h1>
            <div>
                <Grid2 container spacing={2} justifyContent="center" alignItems="center">

                {
                    inventory.map((item, index) =>
                        <StockCard
                            id={item.id}
                            index={index}
                            name={item.name}
                            image={item.image}
                            count={item.count}
                            user_id={item.user_id}
                        />
                    )
                }
                </Grid2>
            </div>
        </section>
    )

};

export default Dashboard;