import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const Drawercomp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: { width: "65%" },
        }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <List>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <ListItemText>HOME</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton component={Link} to="/aboutus">
              <ListItemIcon>
                <ListItemText>ABOUTUS</ListItemText>
              </ListItemIcon>
            </ListItemButton>{" "}
            <ListItemButton component={Link} to="/userprofile">
              <ListItemIcon>
                <ListItemText>USERPROFILE</ListItemText>
              </ListItemIcon>
            </ListItemButton>{" "}
            <ListItemButton component={Link} to="/login">
              <ListItemIcon>
                <ListItemText>LOGIN</ListItemText>
              </ListItemIcon>
            </ListItemButton>{" "}
            <ListItemButton component={Link} to="/signup">
              <ListItemIcon>
                <ListItemText>SIGNUP</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <Typography align="center">
              <Button
                sx={{ background: "#FF311A" }}
                startIcon={<AddIcon />}
                variant="contained"
              >
                Sign
              </Button>
              <br></br>
              <br></br>
            </Typography>
            <Typography align="center" justifyContent={"center"}>
              <Button
                sx={{ background: "#FF311A" }}
                startIcon={<TrendingFlatIcon />}
                variant="contained"
              >
                Login
              </Button>
            </Typography>
          </List>
        </Grid>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
    </>
  );
};

export default Drawercomp;
