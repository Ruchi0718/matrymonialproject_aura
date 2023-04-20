import React from "react";
import Footer from "../footer/footer";
import { Grid, Typography, Button, Icon, Container, Box } from "@mui/material";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Image10 from "../../assets/image10.jpg";
import Image11 from "../../assets/image11.jpg";
import Image12 from "../../assets/image12.jpg";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Herosection from "../herosection/herosection";
const PageData = () => {
  return (
    <>
      <Herosection />
      <Grid container mt={8} spacing={5}>
        <Grid item lg={6} sm={6} xs={12}>
          <Typography
            align="center"
            sx={{
              fontWeight: 600,
              fontSize: "xx-large",
            }}
          >
            WELCOME
          </Typography>
        </Grid>
        <Grid item lg={6} sm={6} xs={12}>
          <Typography
            align="center"
            sx={{
              fontWeight: 600,
              fontSize: "xx-large",
            }}
          >
            VIDEOS
          </Typography>
        </Grid>
      </Grid>
      <br></br>
      <Grid container xs={12}>
        <Grid item lg={4} sm={6} xs={12}>
          <Typography
            align="center"
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            Make your Software.com presents new free matrimonial website designs
            for its customers. The design upgrade is free to new and old
            customer who have purchased the script in last six months.In case of
            any feedback please feel free to get back to us.visit us on{" "}
            <u>https://www.makeyoursoftware.com</u>
          </Typography>

          <Button
            sx={{
              float: "left",
              background: "grey",
              margin: 2,
              marginLeft: "5%",
            }}
            variant="contained"
          >
            {" "}
            More
          </Button>
        </Grid>
        <Grid item p={5} lg={4} sm={6} xs={12}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              src={Image2}
              alt="image2"
              height={"110%"}
              widht={"90%"}
            />
          </Box>
        </Grid>
        <Grid item p={5} lg={4} sm={6} xs={12}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              style={{ marginLeft: { lg: "20%", xs: "10%" } }}
              src={Image3}
              alt="image3"
              height="110%"
              width="80%"
            />
          </Box>
        </Grid>
      </Grid>

      <Container
        maxWidth={false}
        sx={{
          height: { xs: 350, lg: 250, sm: 300, md: 230 },
          width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
          background: "#FF311A",

          position: "absolute",
          left: 0,
        }}
      >
        <Grid m={2} container lg={12} sm={12} xs={12} md={12}>
          <Typography
            align="center"
            sx={{
              fontWeight: 600,
              fontSize: "xx-large",
              color: "white",
              marginLeft: { lg: "40%", xs: "15%", sm: "30%" },
            }}
          >
            HOWS IT WORKS
          </Typography>
        </Grid>

        <Grid
          container
          sx={{ textAlign: { xs: "center", lg: "justify" } }}
        >
          <Grid item lg={3} sm={6} xs={12}>
            <Icon sx={{ marginLeft: { lg: "40%" }, marginRight: { xs: "3%" } }}>
              <BorderColorIcon sx={{ color: "white" }} />
            </Icon>
            <Typography
              textAlign={"center"}
              justifyContent={"center"}
              sx={{
                color: "white",
                fontSize: "small",
              }}
            >
              FREE REGISTRATION
            </Typography>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Icon sx={{ marginLeft: { lg: "10%" }, marginRight: { xs: "3%" } }}>
              <PersonIcon sx={{ color: "white" }} />
            </Icon>
            <Typography
              sx={{
                color: "white",
                fontSize: "small",
              }}
            >
              FREE PROFILE & PICTURES
            </Typography>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Icon sx={{ marginLeft: { lg: "10%" }, marginRight: { xs: "3%" } }}>
              <GroupsIcon sx={{ color: "white" }} />
            </Icon>
            <Typography
              sx={{
                color: "white",
                fontSize: "small",
              }}
            >
              SEARCH,SHORTLIST & CONTACT
            </Typography>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Icon sx={{ marginLeft: { lg: "10%" }, marginRight: { xs: "3%" } }}>
              <ChatBubbleIcon sx={{ color: "white" }} />
            </Icon>
            <Typography
              sx={{
                color: "white",
                fontSize: "small",
              }}
            >
              COMMUNICATE & MOVE AHEAD
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth={false}
        sx={{
          marginTop: { lg: "20%", xs: "95%", md: "30%" },
          height: 300,
          p: 3,
        }}
      >
        <Grid container>
          <Grid item lg={12} sm={12} xs={12} md={12}>
            <Typography
              align="center"
              sx={{
                fontWeight: 600,
                fontSize: "xx-large",
                marginTop: { lg: "1%", md: "2%" },
              }}
            >
              SUCCESS STORIES
            </Typography>
          </Grid>
          <Grid item lg={6} sm={6} xs={12} md={6}>
            <Typography
              sx={{
                marginLeft: "10%",
              }}
            >
              Watch out this space it would be loaded with happy customers
              review very soon.We have just started this month but already
              customers have Demo Matrimony Management,Ahemdabaad engage.
            </Typography>
          </Grid>
          <Grid m={2} container xs={12}>
            <Button
              variant="contained"
              sx={{ marginLeft: "4%", background: "grey" }}
            >
              More
            </Button>
          </Grid>
        </Grid>
        <br></br>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Container
        maxWidth={false}
        sx={{
          background: "#F8F8F8",
          height: { lg: 360, xs: 450 },
          width: "100%",
        }}
      >
        <Grid m={2} container lg={12} sm={12} xs={12} md={12}>
          <Typography
            align="center"
            sx={{
              fontWeight: 600,
              fontSize: "xx-large",
              color: "black",
              alignItems: "center",
              margin: "auto",
            }}
          >
            ANNOUNCEMENT
          </Typography>
        </Grid>
        <Grid container>
          <Grid ml={10} item xs={3}>
            <img src={Image2} alt="image2" />
          </Grid>
          <Grid m={5} item lg={6} xs={12}>
            <Typography>ATTN: LAUNCH OF NEW MATRIMONY LAYOUT</Typography>
            <Typography sx={{ alignItems: "justify" }}>
              We pleased to announce new version
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Button
            variant="contained"
            sx={{ marginLeft: "32%", background: "grey" }}
          >
            More
          </Button>
        </Grid>
      </Container>
      <Grid
        m={2}
        sx={{ marginLeft: { xs: "25%", lg: "10%", sm: "15%" }, margin: "auto" }}
        container
      >
        <Grid item lg={4} sm={6} xs={12}>
          <img src={Image10} alt="image10" />
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <img src={Image11} alt="image11" />
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <img src={Image12} alt="image12" />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default PageData;
