import React, { useState } from "react";

import {
  AppBar,
  Box,
  Tabs,
  Tab,
  Toolbar,
  useMediaQuery,
  useTheme,
  Button,
  Stack,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
import Image13 from "../../assets/image13.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AddIcon from "@mui/icons-material/Add";
import TwitterIcon from "@mui/icons-material/Twitter";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import GoogleIcon from "@mui/icons-material/Google";
import Drawercomp from "../Drawercomp";
import Header1responsive from "../header1responsive/headerresponsive";

const Header = () => {
  const [value, setValue] = useState("");
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Stack sx={{ display: "flex" }}>
        <AppBar sx={{ background: "#FF311A" }}>
          {isMatch ? (
            <>
              <Header1responsive />
            </>
          ) : (
            <>
              <AppBar
                sx={{
                  backgroundColor: "white",
                  display: { xs: "none", sm: "none", md: "flex" },
                }}
                position="static"
              >
                <Box
                  sx={{
                    height: 140,
                    width: "100%",
                    display: { xs: "none", sm: "none", md: "flex" },
                  }}
                >
                  <Grid container xs={12}>
                    <Grid sx={{ marginTop: 2 }} item xs={4}>
                      <img src={Image13} alt="image13" />
                    </Grid>
                   
                    <Grid item xs={8}>
                      <Stack
                        m={3}
                        spacing={2}
                        direction="row"
                      >
                        <Button
                          sx={{ background: "#FF311A", marginLeft: "70%" }}
                          startIcon={<AddIcon />}
                          variant="contained"
                        >
                          Sign
                        </Button>
                        <Button
                          sx={{ background: "#FF311A" }}
                          startIcon={<TrendingFlatIcon />}
                          variant="contained"
                        >
                          Login
                        </Button>
                      </Stack>

                      <Stack
                        sx={{ marginBottam: 12, marginLeft: "70%" }}
                        spacing={1}
                        direction="row"
                      >
                        <Avatar variant="square" sx={{ bgcolor: " #3b5998" }}>
                          <FacebookIcon />
                        </Avatar>
                        <Avatar sx={{ bgcolor: "red" }}>
                          <GoogleIcon />
                        </Avatar>
                        <Avatar sx={{ bgcolor: "primary.light" }}>
                          <TwitterIcon />
                        </Avatar>
                        <Avatar sx={{ bgcolor: "black" }}>
                          <LinkedInIcon />
                        </Avatar>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </AppBar>
            </>
          )}

          <Toolbar>
            {isMatch ? (
              <>
                <Drawercomp />
              </>
            ) : (
              <>
                <Tabs
                
                  value={value}
                  textColor="white"
                  onChange={(e, value) => setValue(value)}
                >
                  <Link to={"/"}>
                    <Tab sx={{color:"white"}} label="HOME" />
                  </Link>
                  <Link to={"/aboutus"}>
                    <Tab sx={{color:"white"}} label="ABOUTUS" />
                  </Link>
                  <Link to={"/userprofile"}>
                    <Tab sx={{color:"white"}} label="USERPROFILE" />
                  </Link>

                  <Link to={"/login"}>
                    <Tab  sx={{color:"white"}}label="LOGIN" />
                  </Link>

                  <Link to={"/signup"}>
                    <Tab sx={{color:"white"}} label="SIGNUP" />
                  </Link>
                </Tabs>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Stack>
    </>
  );
};

export default Header;
