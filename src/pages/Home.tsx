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

      imageUrl: "https://i.redd.it/4ximx31qenl11.jpg",
    },
    {
      id: 2,

      imageUrl: "https://nypost.com/wp-content/uploads/sites/2/2019/01/ap_19014545192537.jpg?quality=75&strip=all",
    },
    {
      id: 3,

      imageUrl: "https://image.cnbcfm.com/api/v1/image/104203806-GettyImages-625629320.jpg?v=1553632752",
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
            <img width="100%" height="200px" src="https://4.bp.blogspot.com/_VjFSFUqtEwA/TITVuAyNweI/AAAAAAAAJJ0/471sGydTRZ4/s1600/o5.jpg"/>
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
            <img width="100%" height="200px" src="https://worldwideinterweb.com/wp-content/uploads/2017/10/ronald-mcdonald-fail.jpg"/>
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