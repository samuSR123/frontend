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
                <Card sx={{ maxWidth: 345, }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.mcdonalds.cl/uploads/WEB_03_6bb0148945.png"
                            alt="combo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Comida
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Vero saepe dolore ullam quae nemo laudantium laborum natus 
                                quasi ab odit accusantium dolor recusandae quos, explicabo alias 
                                animi qui amet maxime.
                            </Typography>
                            <Typography fontWeight='800' textAlign='center' marginTop='5px' gutterBottom variant="body2" component="div">
                                1900$
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
                <Card sx={{ maxWidth: 345,}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.mcdonalds.cl/uploads/WEB_1440_X650_859ceed85e.png"
                            alt="combo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Comida
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Vero saepe dolore ullam quae nemo laudantium laborum natus 
                                quasi ab odit accusantium dolor recusandae quos, explicabo alias 
                                animi qui amet maxime.
                            </Typography>
                            <Typography fontWeight='800' textAlign='center' marginTop='5px' gutterBottom variant="body2" component="div">
                                1900$
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
                <Card sx={{ maxWidth: 345}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://pbs.twimg.com/media/FS7PcKsXEAAqz6l.jpg"
                            alt="combo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Comida
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Vero saepe dolore ullam quae nemo laudantium laborum natus 
                                quasi ab odit accusantium dolor recusandae quos, explicabo alias 
                                animi qui amet maxime.
                            </Typography>
                            <Typography fontWeight='800' textAlign='center' marginTop='5px' gutterBottom variant="body2" component="div">
                                1900$
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
