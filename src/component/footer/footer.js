import React from "react";
import { Box, Grid, Icon, Typography } from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          height: 250,
          width: "108%",
          overflowX: "hidden",
          backgroundColor: "#E8E8E8",
        }}
      >
        <Grid p={1} container>
          <Grid item lg={3} sm={12} xs={12}>
            <Typography
              sx={{ fontWeight: "bold", marginLeft: { lg: "15%", xs: "6%" } }}
            >
              Our Links
            </Typography>
            <Grid
              sx={{
              
                marginLeft: { lg: "15%", xs: "9%" },
              }}
              item
              lg={3}
              sm={6}
              xs={12}
            >
              <Typography>Privacy Policy</Typography>
              <Typography>Site Map</Typography>
              <Typography>FAQ</Typography>
              <Typography>Feedback</Typography>
              <Typography>Customer Support</Typography>
            </Grid>
          </Grid>
          <Grid item lg={3} sm={12} xs={12}>
            <Typography sx={{ fontWeight: "bold", marginLeft: "6%" }}>
              Support
            </Typography>
            <Grid
              sx={{
                textAlign: "justify",
                textJustify: "inter",
                marginLeft: { lg: "7%", xs: "9%" },
              }}
              item
              lg={3}
              sm={6}
              xs={12}
            >
              <Typography>Contact Us</Typography>
              <Typography>Terms and condition</Typography>
              <Typography>Bottam Link1</Typography>
              <Typography>Bottam Link2</Typography>
            </Grid>
          </Grid>
          <Grid item lg={3} sm={12} xs={12}>
            <Typography sx={{ fontWeight: "bold", marginLeft: "6%" }}>
              Contact Info
            </Typography>
            <Grid
              sx={{
                textAlign: "justify",
                textJustify: "inter",
                marginLeft: { lg: "7%", xs: "9%" },
              }}
              item
              lg={3}
              sm={6}
              xs={12}
            >
              <Icon>
                <AddLocationIcon />
              </Icon>
              Aura IT solution sector 4
              <Grid>
                <Icon>
                  <MailIcon />
                </Icon>
                info@demo.com
              </Grid>
              <Grid>
                <Icon>
                  <CallIcon />
                </Icon>
                555-8888-999
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3} sm={12} xs={12}>
            <Typography sx={{ fontWeight: "bold", marginLeft: "6%" }}>
              Follow Us
            </Typography>
            <Grid
              item
              lg={3}
              sm={6}
              xs={12}
              sx={{
                marginLeft: { lg: "7%", xs: "9%" },
              }}
            >
              <Icon>
                <FacebookIcon />
              </Icon>
              <Icon>
                <TwitterIcon />
              </Icon>
              <Icon>
                <GoogleIcon />
              </Icon>
              <Icon>
                <LinkedInIcon />
              </Icon>
            </Grid>
          </Grid>
        </Grid>

        <hr></hr>
        <Grid container xs={12}>
          <Typography
            sx={{ marginLeft: { lg: "40%", xs: "5%" }, fontWeight: "bold" }}
          >
            Website Design by makeyoursoftware.com
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
