import react, {ReactElement, FC} from "react";
import {Box, Typography, Button, CardActionArea, CardActions, Container} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';

const Products: FC<any> = () : ReactElement => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data.get('search_bar'))
        let busqueda = data.get('search_bar')
        fetch('http://localhost:8080/api/products?name='+ busqueda, {
            method: 'Get'
        })
            .then(response => response.json())
            .then(result => {
              console.log(result)
            })
            .catch(error => {
              console.error(error);
            });
    }
    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Container sx={{ textAlign: 'center' }}><Typography fontWeight='800' variant="h3">Products</Typography></Container>
            <Box sx={{display: "flex"}}>
                <TextField
                    sx={{ mt: 3, mb: 2, }}
                    margin="normal"
                    fullWidth
                    id="search_bar"
                    label="search"
                    name="search_bar"
                    autoComplete="search_bar"
                    autoFocus
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2, }}
                >
                    🔎
                </Button>
            </Box>
            <Box sx={{flexgrow: 1,
                display:'grid',
                columnGap: '50px',
                gridTemplateColumns: 'auto auto auto',
                justifyContent:'center',
                alignItems:'center',
                marginBottom: "50px",
                marginTop: '50px'}}>
                <Box>
                <Card sx={{ maxWidth: 345, height: 420}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://hips.hearstapps.com/hmg-prod/images/big-mac-1557313345.jpg?crop=1xw:1xh;center,top&resize=980:*"
                            alt="combo"
                        />
                        <CardContent sx={{ height: 230 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Big mac
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Quizas sean las dos Hamburguesas de carne 100% vacuno , con nuestra Salsa Bigmac y 
                                queso derretido, el toque de cebolla el crocante de la Lechuga y pepinillos lo
                                que la hace la hamburguesa mas famosa del mundo. Un sabor Unico. 562 kcal
                            </Typography>
                            <Typography fontWeight='800' textAlign='center' marginTop='5px' gutterBottom variant="body2" component="div">
                                6000$
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            comprar
                        </Button>
                  </CardActions>
                </Card>
                </Box>
                <Box>
                <Card sx={{ maxWidth: 345, height: 420}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://latiapeta.cl/wp-content/uploads/2021/02/Papas-fritas-grande_Inka-food-Santiago-scaled-1.jpg"
                            alt="combo"
                        />
                        <CardContent sx={{ height: 230 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Papas Grandes
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Las aliadas perfectas para cualquier comida. Disfruta de nuestras mundialmente 
                                famosas Papas, crujientes y deliciosas, no vas a parar hasta terminarlas todas. 374 kcal
                            </Typography>
                            <Typography fontWeight='800' textAlign='center' marginTop='5px' gutterBottom variant="body2" component="div">
                                3000$
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            comprar
                        </Button>
                  </CardActions>
                </Card>
                </Box>
                <Box>
                <Card sx={{ maxWidth: 345, height: 420}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://cache-mcd-ecommerce.appmcdonalds.com/images/CL/DLV_26739.png"
                            alt="combo"
                        />
                        <CardContent  sx={{ height: 230 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                McCombo
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Big mac + Papas Grandes + Bebida + Regalo a elección "Latte regular, Chicken kids o Empanadas". 1200 kcal
                            </Typography>
                            <Typography fontWeight='800' textAlign='center' marginTop='5px' gutterBottom variant="body2" component="div">
                                8000$
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            comprar
                        </Button>
                  </CardActions>
                </Card>
                </Box>
            </Box>
        </Box>
    )
    }

export default Products;
