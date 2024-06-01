import react, {ReactElement, FC} from "react";
import * as React from "react";
import { useState } from "react";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Home {
    id: number;

    imageUrl: string;
  }

  const home: Home[] = [
    {
      id: 1,

      imageUrl: "https://ossom.cl/wp-content/uploads/2022/10/5d6c5142-0538-4e7a-af3c-3cb0383d635d.jpg",
    },
    {
      id: 2,

      imageUrl: "https://www.meioemensagem.com.br/wp-content/uploads/2023/01/McDonalds-Loja_Credito_Shutterstock.jpg",
    },
    {
      id: 3,

      imageUrl: "https://ossom.cl/wp-content/uploads/2022/10/5d6c5142-0538-4e7a-af3c-3cb0383d635d.jpg",
    },
  ];
  
    const Home: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const prevSlide = () => {
      setActiveIndex(activeIndex === 0 ? home.length - 1 : activeIndex - 1);
    };
  
    const nextSlide = () => {
      setActiveIndex(activeIndex === home.length - 1 ? 0 : activeIndex + 1);
    };

  
    return (
        <Box>
        <Box sx={{ maxWidth: 1000, margin: "auto", marginTop: '300px', display: 'flex'}}>
        <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2, marginBottom: 4, }}>
          <Button onClick={nextSlide}>🢀</Button>
        </Box>
          <CardMedia sx={{ width: 3000, height: 400 }} image={home[activeIndex].imageUrl} />

          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2, marginBottom: 4 }}>
          <Button onClick={nextSlide}>🢂</Button>
        </Box>
        </Card>
        </Box>
        <Box sx= {{
            display:'grid',
            columnGap: '100px',
            gridTemplateColumns: 'auto auto',
            marginTop: '20px',
        }}>
            <Box sx= {{
                maxWidth: 450,
                display: 'grid',
                backgroundColor: 'whitesmoke'
            }}>
            <img width="100%" height="200px" src="https://www.semana.com/resizer/RMcJAWsZXEOObRT8hUsMUXkNmQk=/arc-anglerfish-arc2-prod-semana/public/D7UDC76J6RCZ3BXWYAAKSQSJOY.jpg"/>
            <Typography textAlign="center" variant="h3">Home</Typography>
            <Typography padding='10px' marginBottom="10px" variant="body1" fontSize="16px">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Natus nobis maxime dolorem? Quasi ab voluptatibus distinctio impedit, cumque dolorum adipisci veritatis 
            saepe neque est optio consequatur nemo quos modi dicta. Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Amet at laboriosam, adipisci ut ipsa eum repellat quas. A praesentium, ad accusantium quod dolorum 
            deserunt nisi quos dolor eius iste nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates 
            magnam eaque voluptate aperiam ipsa illum, nostrum totam dolore facere saepe temporibus omnis consequuntur, 
            elit. Saepe, aperiam ducimus? At obcaecati ut, nostrum, excepturi blanditiis veritatis magni omnis, 
            ad amet commodi iusto in quos voluptates nulla nihil. Eius! lorem</Typography>
            </Box>
            <Box sx= {{
                maxWidth: 450,
                display: 'grid',
                backgroundColor: 'whitesmoke'
            }}>
            <img width="100%" height="200px" src="https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/KCHROPMYLBG3RG7ULPHH2QIN6M.jpg"/>
            <Typography textAlign="center" variant="h3">Home</Typography>
            <Typography padding='10px' marginTop="10px" variant="body1" fontSize="16px">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Natus nobis maxime dolorem? Quasi ab voluptatibus distinctio impedit, cumque dolorum adipisci veritatis 
            saepe neque est optio consequatur nemo quos modi dicta. Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Amet at laboriosam, adipisci ut ipsa eum repellat quas. A praesentium, ad accusantium quod dolorum 
            deserunt nisi quos dolor eius iste nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates 
            magnam eaque voluptate aperiam ipsa illum, nostrum totam dolore facere saepe temporibus omnis consequuntur, 
            elit. Saepe, aperiam ducimus? At obcaecati ut, nostrum, excepturi blanditiis veritatis magni omnis, 
            ad amet commodi iusto in quos voluptates nulla nihil. Eius! lorem</Typography>
            </Box>
        </Box>
    </Box>
    )
    }

export default Home;