import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function StockCard(props) {
  return (
    //   <article>
    //       <h3>{props.name}</h3>
    //       <img src={props.image} alt={props.id} style={{width: "200px"}}/>
    //       <div>
    //           <p>Current Stock: {props.count}</p>
    //       </div>
    //   </article>
    <Card sx={{maxWidth: 300, textAlign: 'center', p: 2}}>
        <CardMedia
            component="img"
            height="200"
            image={props.image}
            alt={props.id}
            sx={{objectFit: 'contain'}}
        />
        <CardContent>
            <Typography variant="h6" component="div">
                {props.name}
            </Typography>
            <Typography variant="body2" component="div">
                Current Stock:{props.count}
            </Typography>
        </CardContent>
    </Card>
  );
}

export default StockCard;