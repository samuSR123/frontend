import react, {ReactElement, FC} from "react";
import {Box, Card, Typography, Button} from "@mui/material";
const About: FC<any> = () : ReactElement => {
    return (
        <Box sx= {{
            flexgrow: 1,
            backgroundColor:'whitesmoke',
            display:'grid',
            justifyContent:'center',
            alignItems:'center',
            width: "600px",
            marginBottom:'40px',
        }}><img width="600px" height="250px" src="https://www.mcdonalds.cl/uploads/Portada_Desktop_1200x520_4809bd21ee.jpg"/>
        <Typography textAlign='center' variant="h3">About</Typography>
        <Typography padding='5px' marginBottom="20px" marginTop="10px" variant="body1" fontSize="16px">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Natus nobis maxime dolorem? Quasi ab voluptatibus distinctio impedit, cumque dolorum adipisci veritatis 
        saepe neque est optio consequatur nemo quos modi dicta. Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Amet at laboriosam, adipisci ut ipsa eum repellat quas. A praesentium, ad accusantium quod dolorum 
        deserunt nisi quos dolor eius iste nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates 
        magnam eaque voluptate aperiam ipsa illum, nostrum totam dolore facere saepe temporibus omnis consequuntur, 
        elit. Saepe, aperiam ducimus? At obcaecati ut, nostrum, excepturi blanditiis veritatis magni omnis, 
        ad amet commodi iusto in quos voluptates nulla nihil. Eius! lorem</Typography>
        <Button sx={{color:'black', backgroundColor: 'secondary.dark', marginLeft: '40%', width: '20%', marginBottom: '20px'}}>Ver mas</Button>
        </Box>
    )
    }

export default About;