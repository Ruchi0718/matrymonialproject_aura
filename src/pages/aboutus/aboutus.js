import React from "react";
import AboutusSidebar from "../../component/aboutusSidebar/aboutusSidebar";
import {
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import Image15 from "../../assets/image15.png";
import Image16 from "../../assets/image16.png";
import Image17 from "../../assets/Image17.png";
import Footer from "../../component/footer/footer";
import Header from "../../component/header/header";
import Carou from "../../component/carousel/carousel";

const Aboutus = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Header />
      <Box
        sx={{
          positon:"fixed",
          width: "100%",
          height: { lg: "20%", xs: "4%" },
          margin: "auto",
          marginTop: { lg: "15%", xs: "40%", md: "10%", sm: "22%" },
        }}
      >
        <Carou />
      </Box>
      <Grid sx={{ marginTop: { lg: "1%", xs: "2%", sm: "3%", md: "15%" } }}>
        <AboutusSidebar />
      </Grid>

      {isMatch ? (
        <></>
      ) : (
        <>
          <Grid container sx={{ displayFlex: "inline", flexDirection: "row" }}>
            <Grid item p={1} lg={3} xs={3} sm={3} md={3}>
              <Box
                sx={{
                  width: { lg: "80%", xs: "7rem", sm: "100%", md: "80%" },
                  height: { lg: "18rem", xs: "28rem", sm: "29rem" },
                  border: "2px solid #C0C0C0",
                  margin: "auto",
                  marginTop: { lg: "5%", xs: "5%", sm: "5%", md: "5%" },
                  borderRadius: "4px",
                }}
              >
                <Grid container>
                  <Grid item p={1} lg={12} xs={12} md={12}>
                    <Typography
                      align="center"
                      sx={{
                        fontSize: "18px",
                        margin: "auto",
                        fontWeight: "bold",
                      }}
                    >
                      Upgrade /Renew
                    </Typography>
                  </Grid>
                  <Grid item lg={12} xs={12} md={12}>
                    <Typography
                      align="center"
                      sx={{
                        fontSize: { lg: "18px", xs: "15px" },
                        margin: "auto",
                        fontWeight: "bold",
                      }}
                    >
                      Membership
                    </Typography>
                  </Grid>
                  <Grid container>
                    <Grid item lg={12} xs={12} sm={12}>
                      <img
                        style={{ margin: "0 auto", display: "flex" }}
                        src={Image15}
                        alt="diamond"
                      />
                    </Grid>
                    <Grid item lg={12} xs={12} sm={12}>
                      <Typography align="center" sx={{ fontWeight: "bold" }}>
                        More no of Profiles
                      </Typography>
                    </Grid>
                    <Grid item lg={12} xs={12} sm={12}>
                      <Typography sx={{ fontWeight: "bold" }} align="center">
                        Access to every feature
                      </Typography>
                    </Grid>
                    <Grid item lg={12} xs={12} sm={12}>
                      <Typography sx={{ fontWeight: "bold" }} align="center">
                        Offline services from the branches
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </>
      )}

      <Grid container>
        <Grid item m={8} lg={12} xs={12} md={12}>
          <Typography
            align="center"
            sx={{ fontSize: "25px", margin: "auto", fontWeight: "bold" }}
          >
            Success Stories
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={4} xs={12} md={4}>
          <Typography align="center">
            <img src={Image16} alt="image2" />
          </Typography>
        </Grid>
        <Grid item lg={8} xs={12} md={8}>
          <Box sx={{ width: "90%", height: "80%" }}>
            <Grid container m={3}>
              <Grid item xs={12} lg={12} md={12}>
                <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                  Amet minimum molit not deserunt ullacom est alliqua dolar do
                  amet sint<br></br>
                  Velit officio consequent duis enim velit molit<br></br>
                  Excercitation veniam consequat sunt nostrud amet.Amet minimum
                  molit non deserunt ullancom est sit aliqua dolor do amet sint.
                  <br></br>
                  Amet minimum molit not deserunt ullacom est alliqua dolar do
                  amet sint<br></br>
                  Velit officio consequent duis enim velit molit<br></br> Amet
                  minimum molit not deserunt ullacom est alliqua dolar do amet
                  sint<br></br>
                  Excercitation veniam consequat sunt nostrud amet.Amet minimum
                  molit non deserunt ullancom est sit aliqua dolor do amet sint
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item m={2} lg={12} xs={12}>
                <Typography align="center">
                  <Button
                    sx={{
                      minWidth: 200,
                      margin: "auto",
                    }}
                    variant="contained"
                    color="error"
                  >
                    {" "}
                    BUY NOW
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <br></br>


      <Grid container>
        <Grid item m={2} lg={12} xs={12} sm={12} md={12}>
          <Typography
            align="center"
            sx={{ fontSize: "25px", margin: "auto", fontWeight: "bold" }}
          >
            CONTACT US
          </Typography>
        </Grid>
        <br></br>
      </Grid>
      <Box>
        <Grid container>
          <Grid item lg={6} xs={12} md={12} sm={12}>
            <Typography align="center">
              <img src={Image17} alt="image2" height="40%" width="70%" />
            </Typography>
          </Grid>
          <Grid item lg={6} xs={12} md={12} sm={12}>
            <Typography align="center">
              <TextField
                sx={{ width: 350, p: 1 }}
                id="full-width-text-field"
                variant="outlined"
                label="Name"
                placeholder="Name"
              />
              <br></br>
              <TextField
                sx={{ width: 350, p: 1 }}
                id="full-width-text-field"
                variant="outlined"
                label="Email"
                placeholder="Email"
              />
              <br></br>
              <TextField
                sx={{ width: 350, p: 1 }}
                id="full-width-text-field"
                variant="outlined"
                label="Phone"
                placeholder="Phone"
              />
              <br></br>
              <TextField
                sx={{ width: 350, p: 1 }}
                id="full-width-text-field"
                variant="outlined"
                label="Message"
                placeholder="Message"
                inputProps={{
                  style: {
                    height: "100px",
                  },
                }}
              />
              <Typography>
                <Button
                  sx={{
                    minWidth: { lg: 200, xs: 100 },
                    margin: { xs: 10 },
                    alignItems: {
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                      lg: "flex-start",
                    },
                  }}
                  variant="contained"
                  color="error"
                >
                  {" "}
                  SUBMIT
                </Button>
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  );
};

export default Aboutus;
