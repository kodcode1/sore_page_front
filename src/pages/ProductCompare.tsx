import { Grid, Paper, Typography } from '@mui/material';
import { ProductInterface } from "../interface/ProductInterface";
import { useSelector } from "react-redux";



const ProductCompare: React.FC<Props> = () => {
  let products: ProductInterface[] =  useSelector((state) => state.product.productCompare);
  return (
    <Grid sx={{padding:"40px"}} container spacing={3}>
      {products.map(product => ( 
        <Grid  sx={{padding:"40px"}} item xs={4} key={product.id}>
          <Paper sx={{textAlign:"center" }} >
            <img  width={200} src={product.images[0]} alt={product.title} />
            <Typography variant="h5">{product.title}</Typography>
            <Typography sx={{padding:"10px" , height:"100px"}}  variant="body1">{product.description}</Typography>
            <Typography variant="h6">${product.price}</Typography>
          </Paper>
        </Grid>  
      ))}
    </Grid>
  );
}

export default ProductCompare;