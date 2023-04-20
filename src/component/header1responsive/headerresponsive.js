import React from "react";
import { AppBar, Box } from "@mui/material";

import { Grid } from "@mui/material";
import Image13 from "../../assets/image13.jpg";

const Header1responsive = () => {
  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "white",
        }}
        position="static"
      >
        <Box
          sx={{
            height: 100,
            width: "100%",
          }}
        >
          <Grid container xs={12}>
            <Grid item xs={4}>
              <img
                style={{ width: 200, height: 100}}
                src={Image13}
                alt="image13"
              />
            </Grid>
          </Grid>
        </Box>
      </AppBar>
    </div>
  );
};

export default Header1responsive;
