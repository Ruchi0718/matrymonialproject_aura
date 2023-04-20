import React from "react";
import Profile1 from "../../assets/Profile1.png";
import {
  Grid,
  Box,
  useTheme,
  Button,
  Typography,
  Divider,
  useMediaQuery,
} from "@mui/material";

const AboutusBody = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <div>
        {isMatch ? (
          <>
            <Grid container>
              <Grid item lg={2} xs={6} sm={6}>
                <img
                  src={Profile1}
                  style={{
                    width: "120px",
                    aspectRatio: "1/1",
                  }}
                  alt="textimage"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
              <Box
                sx={{
                  height: "40%",
                  width: { lg: "60%", xs: "90%", sm: "80%" },
                }}
              >
                <Grid m={1} xs={12} >
                  <Typography 
                    sx={{
                      fontSize: { lg: "18px", xs: "10px" },
                      fontWeight: "bold",
                    }}
                  >
                    MEMBERS ID : 132456
                  </Typography>
                </Grid>
                <Grid container m={1}>
                  <Grid item sx={{ margin: "auto" }} lg={2} xs={12} sm={12}>
                    <Typography sx={{ fontSize: "15px" }}>Age</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} lg={2} xs={12} sm={12}>
                    <Typography sx={{ fontSize: "15px" }}>25</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} lg={2} xs={12} sm={12}>
                    <Typography sx={{ fontSize: "15px" }}>Height</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} lg={2} xs={12} sm={12}>
                    <Typography sx={{ fontSize: "15px" }}>5.5</Typography>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12}>
                    <Typography align="left">
                      <Button sx={{ color: "red" }} variant="text">
                        <u>View Profile</u>
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Grid container>
              <Grid item lg={4} xs={6}>
                <img
                  src={Profile1}
                  style={{
                    width: "250px",
                    aspectRatio: "2/2",
                  }}
                  alt="textimage"
                />
              </Grid>
              <Box sx={{ height: "40%", width: { lg: "60%" } }}>
                <Grid xs={12}>
                  <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                    MEMBERS ID : 132456
                  </Typography>
                </Grid>
                <Grid container m={1}>
                  <Grid
                    item
                    sx={{ margin: "auto" }}
                    lg={2}
                    xs={2}
                    sm={2}
                    md={2}
                  >
                    <Typography sx={{ fontSize: "15px" }}>Age</Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{ margin: "auto" }}
                    lg={2}
                    xs={2}
                    sm={2}
                    md={2}
                  >
                    <Typography sx={{ fontSize: "15px" }}>25</Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{ margin: "auto" }}
                    lg={2}
                    xs={2}
                    sm={2}
                    md={2}
                  >
                    <Typography sx={{ fontSize: "15px" }}>Height</Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{ margin: "auto" }}
                    lg={2}
                    xs={2}
                    sm={2}
                    md={2}
                  >
                    <Typography sx={{ fontSize: "15px" }}>5.5</Typography>
                  </Grid>
                </Grid>
                <Grid container m={1}>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Relgion</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Hindu</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Caste</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Tamil</Typography>
                  </Grid>
                </Grid>{" "}
                <Grid container m={1}>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Language</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Tamil</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>
                      Marital Status
                    </Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Unmarried</Typography>
                  </Grid>
                </Grid>
                <Grid container m={1}>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Location</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Tamilnadu</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Height</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>5.5</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography align="right">
                      <Button sx={{ color: "red" }} variant="text">
                        <u>View Profile</u>
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </>
        )}
      </div>
      <br></br>
      <Divider/>

      <div>
        {isMatch ? (
          <>
            {/* <Container sx={{ border: "2px solid  #C0C0C0" }}> */}
            <Grid container>
              <Grid item lg={2} xs={6} sm={6}>
                <img
                  src={Profile1}
                  // height="100px"
                  // width="150px"
                  style={{
                    width: "120px",
                    aspectRatio: "1/1",
                  }}
                  alt="textimage"
                />
              </Grid>
              <Grid item xs={6} sm={6}>
              <Box
                sx={{
                  height: "40%",
                  width: { lg: "60%", xs: "90%", sm: "80%" },
                }}
              >
                <Grid m={1} xs={12}>
                  <Typography
                    sx={{
                      fontSize: { lg: "18px", xs: "10px" },
                      fontWeight: "bold",
                    }}
                  >
                    MEMBERS ID : 132456
                  </Typography>
                </Grid>
                <Grid container m={1}>
                  <Grid item sx={{ margin: "auto" }} lg={2} xs={12} sm={12}>
                    <Typography sx={{ fontSize: "15px" }}>Age</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} lg={2} xs={12} sm={12}>
                    <Typography sx={{ fontSize: "15px" }}>25</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} lg={2} xs={12} sm={12}>
                    <Typography sx={{ fontSize: "15px" }}>Height</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} lg={2} xs={12} sm={12}>
                    <Typography sx={{ fontSize: "15px" }}>5.5</Typography>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12}>
                    <Typography align="left">
                      <Button sx={{ color: "red" }} variant="text">
                        <u>View Profile</u>
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              </Grid>
            </Grid>
            {/* </Container> */}
          </>
        ) : (
          <>
            {/* <Container sx={{ border: "2px solid  #C0C0C0" }}> */}
            <Grid container>
              <Grid item lg={4} xs={6}>
                {/* <Card sx={{ maxWidth: 300, height: 200 }}> */}
                <img
                  src={Profile1}
                  // sx={{ margin: "auto" }}
                  style={{
                    width: "250px",
                    aspectRatio: "2/2",
                  }}
                  alt="textimage"
                />
                {/* </Card> */}
              </Grid>
              <Box sx={{ height: "40%", width: { lg: "60%" } }}>
                <Grid xs={12}>
                  <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                    MEMBERS ID : 132456
                  </Typography>
                </Grid>
                <Grid container m={1}>
                  <Grid
                    item
                    sx={{ margin: "auto" }}
                    lg={2}
                    xs={2}
                    sm={2}
                    md={2}
                  >
                    <Typography sx={{ fontSize: "15px" }}>Age</Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{ margin: "auto" }}
                    lg={2}
                    xs={2}
                    sm={2}
                    md={2}
                  >
                    <Typography sx={{ fontSize: "15px" }}>25</Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{ margin: "auto" }}
                    lg={2}
                    xs={2}
                    sm={2}
                    md={2}
                  >
                    <Typography sx={{ fontSize: "15px" }}>Height</Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{ margin: "auto" }}
                    lg={2}
                    xs={2}
                    sm={2}
                    md={2}
                  >
                    <Typography sx={{ fontSize: "15px" }}>5.5</Typography>
                  </Grid>
                </Grid>
                <Grid container m={1}>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Relgion</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Hindu</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Caste</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Tamil</Typography>
                  </Grid>
                </Grid>{" "}
                <Grid container m={1}>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Language</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Tamil</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>
                      Marital Status
                    </Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Unmarried</Typography>
                  </Grid>
                </Grid>
                <Grid container m={1}>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Location</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Tamilnadu</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Height</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>5.5</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography align="right">
                      <Button sx={{ color: "red" }} variant="text">
                        <u>View Profile</u>
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            {/* </Container> */}
          </>
        )}
      </div>
      <br></br>
      <Divider/>


      <div>
        {isMatch ? (
          <>
            {/* <Container sx={{ border: "2px solid  #C0C0C0" }}> */}
            <Grid container>
              <Grid item lg={2} xs={6} sm={6}>
                <img
                  src={Profile1}
                  // height="100px"
                  // width="150px"
                  style={{
                    width: "120px",
                    aspectRatio: "1/1",
                  }}
                  alt="textimage"
                />
              </Grid>
              <Grid item xs={6} sm={6}>
              <Box
                sx={{
                  height: "40%",
                  width: { lg: "60%", xs: "90%", sm: "80%" },
                }}
              >
                <Grid m={1} xs={12}>
                  <Typography
                    sx={{
                      fontSize: { lg: "18px", xs: "10px" },
                      fontWeight: "bold",
                    }}
                  >
                    MEMBERS ID : 132456
                  </Typography>
                </Grid>
                <Grid container m={1}>
                  <Grid item sx={{ margin: "auto" }} lg={2} xs={12} sm={12}>
                    <Typography sx={{ fontSize: "15px" }}>Age</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} lg={2} xs={12} sm={12}>
                    <Typography sx={{ fontSize: "15px" }}>25</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} lg={2} xs={12} sm={12}>
                    <Typography sx={{ fontSize: "15px" }}>Height</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} lg={2} xs={12} sm={12}>
                    <Typography sx={{ fontSize: "15px" }}>5.5</Typography>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12}>
                    <Typography align="left">
                      <Button sx={{ color: "red" }} variant="text">
                        <u>View Profile</u>
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              </Grid>
            </Grid>
            {/* </Container> */}
          </>
        ) : (
          <>
            {/* <Container sx={{ border: "2px solid  #C0C0C0" }}> */}
            <Grid container>
              <Grid item lg={4} xs={6}>
                {/* <Card sx={{ maxWidth: 300, height: 200 }}> */}
                <img
                  src={Profile1}
                  // sx={{ margin: "auto" }}
                  style={{
                    width: "250px",
                    aspectRatio: "2/2",
                  }}
                  alt="textimage"
                />
                {/* </Card> */}
              </Grid>
              <Box sx={{ height: "40%", width: { lg: "60%" } }}>
                <Grid xs={12}>
                  <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                    MEMBERS ID : 132456
                  </Typography>
                </Grid>
                <Grid container m={1}>
                  <Grid
                    item
                    sx={{ margin: "auto" }}
                    lg={2}
                    xs={2}
                    sm={2}
                    md={2}
                  >
                    <Typography sx={{ fontSize: "15px" }}>Age</Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{ margin: "auto" }}
                    lg={2}
                    xs={2}
                    sm={2}
                    md={2}
                  >
                    <Typography sx={{ fontSize: "15px" }}>25</Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{ margin: "auto" }}
                    lg={2}
                    xs={2}
                    sm={2}
                    md={2}
                  >
                    <Typography sx={{ fontSize: "15px" }}>Height</Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{ margin: "auto" }}
                    lg={2}
                    xs={2}
                    sm={2}
                    md={2}
                  >
                    <Typography sx={{ fontSize: "15px" }}>5.5</Typography>
                  </Grid>
                </Grid>
                <Grid container m={1}>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Relgion</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Hindu</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Caste</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Tamil</Typography>
                  </Grid>
                </Grid>{" "}
                <Grid container m={1}>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Language</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Tamil</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>
                      Marital Status
                    </Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Unmarried</Typography>
                  </Grid>
                </Grid>
                <Grid container m={1}>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Location</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Tamilnadu</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Height</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>5.5</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography align="right">
                      <Button sx={{ color: "red" }} variant="text">
                        <u>View Profile</u>
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            {/* </Container> */}
          </>
        )}
      </div>
      <br></br>
      <Divider/>

    </>
  );
};

export default AboutusBody;
