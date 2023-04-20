import React from "react";
import {
  Grid,
  Typography,
  Icon,
  Container,
  Divider,
  Box,
  Button,
  Paper,
  Tabs,
  Modal,
  Tab,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Profile33 from "../../assets/profile33.png";
import Imagecouple1 from "../../assets/imagecouple1.jpg";
import Imagecouple22 from "../../assets/imagecouple22.avif";
import "./userProfile.css";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import ChatBot from "react-simple-chatbot";
const UserProfile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const steps = [
    {
      id: "Greet",

      message: "Hello, Welcome to our shop",

      trigger: "Done",
    },

    {
      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",
    },

    {
      id: "waiting1",

      user: true,

      trigger: "Name",
    },

    {
      id: "Name",

      message: "Hi {previousValue}, Please select your issue",

      trigger: "issues",
    },

    {
      id: "issues",

      options: [
        {
          value: "React",

          label: "React",

          trigger: "React",
        },

        { value: "Angular", label: "Angular", trigger: "Angular" },
      ],
    },

    {
      id: "React",

      message:
        "Thanks for letting your React issue, Our team will resolve your issue ASAP",

      end: true,
    },

    {
      id: "Angular",

      message:
        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",

      end: true,
    },
  ];
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    // p: 4,
  };
  return (
    <>
      <Header />
      <Container
        sx={{ marginTop: { xs: "44%", sm: "25%", lg: "16%", md: "25%" } }}
      >
        <Grid
          container
          direction={"row"}
          sx={{ marginLeft: { lg: "6%", xs: "14%", sm: "15%" } }}
        >
          <Grid item>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "bold", color: "grey" }}
            >
              Home
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Icon sx={{ width: 20, height: 20, color: "grey" }}>
                <ArrowRightIcon />
              </Icon>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "bold", color: "grey" }}
            >
              User Profile
            </Typography>
          </Grid>
        </Grid>
        <Grid container m={1}>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "bold",
                marginLeft: { lg: "5%", xs: "12%", sm: "13%", md: "14%" },
              }}
            >
              User Profile
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} lg={5} sm={12}>
            <Carousel>
              <div>
                <img
                  src={Profile33}
                  height="450px"
                  width="400px"
                  alt=""
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div>
                <img
                  src={Imagecouple1}
                  height="450px"
                  width="400px"
                  alt=""
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div>
                <img
                  src={Imagecouple22}
                  height="450px"
                  width="400px"
                  alt=""
                  style={{ borderRadius: "5px" }}
                />
              </div>
            </Carousel>
          </Grid>
          <Grid item xs={12} sm={12} lg={7}>
            <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
              Suraj Sharma
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: "100%",
                  height: 200,
                },
              }}
            >
              <Paper elevation={0}>
                <Grid container m={1}>
                  <Grid
                    item
                    // sx={{ margin: "auto" }}
                    lg={3}
                    xs={3}
                    sm={3}
                    md={3}
                  >
                    <Typography sx={{ fontSize: "15px" }}>Age</Typography>
                  </Grid>
                  <Grid
                    item
                    // sx={{ margin: "auto" }}
                    lg={3}
                    xs={3}
                    sm={3}
                    md={3}
                  >
                    <Typography sx={{ fontSize: "15px" }}>25</Typography>
                  </Grid>
                  <Grid
                    item
                    // sx={{ margin: "auto" }}
                    lg={3}
                    xs={3}
                    sm={3}
                    md={3}
                  >
                    <Typography sx={{ fontSize: "15px" }}>Height</Typography>
                  </Grid>
                  <Grid
                    item
                    // sx={{ margin: "auto" }}
                    lg={3}
                    xs={3}
                    sm={3}
                    md={3}
                  >
                    <Typography sx={{ fontSize: "15px" }}>5.5</Typography>
                  </Grid>
                </Grid>
                <Grid container m={1}>
                  <Grid item lg={3} xs={3} sm={3} md={3}>
                    <Typography sx={{ fontSize: "15px" }}>Relgion</Typography>
                  </Grid>
                  <Grid item lg={3} xs={3} sm={3} md={3}>
                    <Typography sx={{ fontSize: "15px" }}>Hindu</Typography>
                  </Grid>
                  <Grid item lg={3} xs={3} sm={3} md={3}>
                    <Typography sx={{ fontSize: "15px" }}>Caste</Typography>
                  </Grid>
                  <Grid item lg={3} xs={3} sm={3} md={3}>
                    <Typography sx={{ fontSize: "15px" }}>Tamil</Typography>
                  </Grid>
                </Grid>{" "}
                <Grid container m={1}>
                  <Grid item lg={3} xs={3} sm={3} md={3}>
                    <Typography sx={{ fontSize: "15px" }}>Language</Typography>
                  </Grid>

                  <Grid item lg={3} xs={3} sm={3} md={3}>
                    <Typography sx={{ fontSize: "15px" }}>Tamil</Typography>
                  </Grid>

                  <Grid item lg={3} xs={3} sm={3} md={3}>
                    <Typography sx={{ fontSize: "15px" }}>
                      Marital Status
                    </Typography>
                  </Grid>

                  <Grid item lg={3} xs={3} sm={3} md={3}>
                    <Typography sx={{ fontSize: "15px" }}>Unmarried</Typography>
                  </Grid>
                </Grid>
                <Grid container m={1}>
                  <Grid item lg={3} xs={3} sm={3} md={3}>
                    <Typography sx={{ fontSize: "15px" }}>Location</Typography>
                  </Grid>

                  <Grid item lg={3} xs={3} sm={3} md={3}>
                    <Typography sx={{ fontSize: "15px" }}>Tamilnadu</Typography>
                  </Grid>

                  <Grid item lg={3} xs={3} sm={3} md={3}>
                    <Typography sx={{ fontSize: "15px" }}>Height</Typography>
                  </Grid>

                  <Grid item lg={3} xs={3} sm={3} md={3}>
                    <Typography sx={{ fontSize: "15px" }}>5.5</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
            <Divider />
            <br></br>
            <Grid container>
              <Grid item xs={12} sm={12} lg={6}>
                <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                  Financial Background
                </Typography>
              </Grid>

              <Box
                sx={{
                  width: "100%",
                  height: 200,
                }}
              >
                <Paper elevation={0}>
                  <Grid container m={1}>
                    <Grid item lg={6} xs={6} sm={6}>
                      <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                        Family
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={6} sm={6}>
                      Middle class
                    </Grid>
                  </Grid>
                  <Grid container m={1}>
                    <Grid item lg={6} xs={6} sm={6}>
                      <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                        Income
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={6} sm={6}>
                      45000 /-PM
                    </Grid>
                  </Grid>{" "}
                  <Grid container m={1}>
                    <Grid item lg={6} xs={6} sm={6}>
                      <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                        Job
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={6} sm={6}>
                      Developer
                    </Grid>
                  </Grid>{" "}
                  <Grid container m={1}>
                    <Grid item lg={6} xs={6} sm={6}>
                      <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                        Place
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={6} sm={6}>
                      Delhi
                    </Grid>
                  </Grid>
                  <br></br>
                  <Container>
                    <Grid container>
                      <Grid item xs={6}>
                        <Button
                          variant="contained"
                          sx={{ background: "#FF311A" }}
                        >
                          Contact
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          n
                          onClick={handleOpen}
                          variant="contained"
                          sx={{ background: "#FF311A" }}
                        >
                          Chat Us
                        </Button>
                      </Grid>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <ChatBot steps={steps} />
                        </Box>
                      </Modal>
                    </Grid>
                  </Container>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <br></br>
        <br></br>
        <br></br>

        <Grid container m={1}>
          <Grid item xs={12}>
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
              >
                <Tab
                  value="one"
                  label={
                    <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                      About
                    </Typography>
                  }
                  wrapped
                />
              </Tabs>
              <Divider />
            </Box>
          </Grid>
        </Grid>
        <br></br>
        <Container>
          <Grid container m={1}>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                About Suraj
              </Typography>
            </Grid>
            <br></br>
            <br></br>

            <Grid item xs={12}>
              <Typography align="justify" sx={{ fontSize: "15px" }}>
                When its colder than the far side of the moon and splitting rain
                too,you have still to look good.From water-repellant leather to
                a rugged outsole,the Lunar Force 1 adapter AF-1 style so you can
                keep your flame burning when the weather hits.Metal lace
                hardware and extended tongue bring mountain boot toughness,while
                the star-studded toe design gives your look the edge.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer />
    </>
  );
};

export default UserProfile;
