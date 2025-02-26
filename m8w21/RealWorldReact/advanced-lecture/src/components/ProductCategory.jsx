import StockCard from "./StockCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Grid2 from '@mui/material/Grid2'

function ProductCategory() {

    const { category } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch(`/api/products/${category}`)
            .then((response) => response.json())
            .then((dataObject) => setFilteredProducts(dataObject.data))
    }, [])

    return ( 
        <section>
            <h2>{category}</h2>
            <div>
            <Grid2 container spacing={2} justifyContent="center" alignItems="center">
                {
                    filteredProducts.map((item, index) =>
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
     );
}

export default ProductCategory;