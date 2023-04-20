import React from 'react';
import { Box } from '@mui/material';

const Boxside = () => {
    return (
        <div>
     
             <Box
            sx={{
              marginTop: { lg: "5%", xs: "5%", sm: "5%", md: "5%" },
              margin: "auto",
              width: { lg: "70%", xs: "6rem", sm: "100%", md: "80%" },
              height: { lg: "99%" },
              border: "2px solid #C0C0C0",
              borderRadius: "2px",
            }}
          ></Box>
        </div>
    )
}

export default Boxside
