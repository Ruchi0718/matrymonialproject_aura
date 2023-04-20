import React from "react";
import Carousel from "react-material-ui-carousel";

import { Paper, Button } from '@mui/material'


const Item = (item) =>
{
    var items = [
        {
          Image: "../../assets/image13.jpg",
        },
        {
          Image: "../../assets/image14.jpg",
        },
      ];
    return (
        <Paper sx={{border:"2px solid red"}}>
              <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
        
        
      ))}
    </Carousel>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
export default Item