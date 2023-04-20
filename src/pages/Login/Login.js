import React from "react";
import Header from "../../component/header/header";
import {
  Container,
  Grid,
  Typography,
  Box,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  TextField,
} from "@mui/material";
import Profile35 from "../../assets/profile35.png";
import Footer from "../../component/footer/footer";

const Login = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
      {isMatch ? (
        <>
          <Container>
            <Grid
              container
              sx={{ marginTop: { xs: "50%", sm: "20%", md: "20%" } }}
            >
              <Grid item xs={12} lg={6}>
                <Box sx={{ width: "100%" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="wrapped label tabs example"
                  >
                    <Tab
                      value="one"
                      label={
                        <Typography
                          sx={{
                            fontSize: "25px",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          Login
                        </Typography>
                      }
                      wrapped
                    />
                  </Tabs>
                  <br></br>
                  <Typography
                    sx={{ fontSize: "12px", fontWeight: "bold", color: "grey" }}
                  >
                    Login with your credentials to find your life partner
                  </Typography>
                  <br></br>

                  <Box
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                  >
                    <TextField
                      size="small"
                      fullWidth
                      label="Email/Phone"
                      id="fullWidth"
                    />
                    <br></br>
                    <br></br>

                    <TextField
                      size="small"
                      fullWidth
                      label="Password"
                      id="fullWidth"
                    />
                    <br></br>
                    <br></br>
                    <Grid item p={2} xs={12}>
                      <Typography align="center">
                        <Button
                          variant="contained"
                          sx={{ background: "#FF311A", width: 100 }}
                        >
                          Login
                        </Button>
                      </Typography>
                    </Grid>
                  </Box>
                </Box>
                <br></br>
              </Grid>
            </Grid>
          </Container>
          <br></br>
        </>
      ) : (
        <>
        <Box>

          <Container>
            <Grid
              container
              sx={{ marginTop: { lg: "18%", xs: "45%", sm: "20%", md: "25%" } }}
              >
              <Grid item xs={12} lg={6} md={6}>
                {/* <Container > */}

                <Container
                  sx={{
                    marginTop: "10%",
                    width: 500,
                    maxWidth: "100%",
                }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="wrapped label tabs example"
                    >
                    <Tab
                      value="one"
                      label={
                          <Typography
                          sx={{
                              fontSize: "25px",
                              fontWeight: "bold",
                              color: "black",
                            }}
                        >
                          Login
                        </Typography>
                      }
                      wrapped
                      />
                  </Tabs>
                  <br></br>
                  <Typography
                    sx={{ fontSize: "12px", fontWeight: "bold", color: "grey" }}
                  >
                    Login with your credentials to find your life partner
                  </Typography>
                  <TextField
                    size="small"
                    fullWidth
                    label="Email/Phone"
                    id="fullWidth"
                    />
                  <br></br>
                  <br></br>

                  <TextField
                    size="small"
                    fullWidth
                    label="Password"
                    id="fullWidth"
                    />
                  <br></br>
                  <br></br>
                  <br></br>

                  <Grid item xs={12}>
                    <Typography align="center">
                      <Button
                        variant="contained"
                        sx={{ background: "#FF311A", width: 100 }}
                      >
                        Login
                      </Button>
                    </Typography>
                  </Grid>
                </Container>
                {/* </Container> */}
                <br></br>
              </Grid>
              <Grid item lg={6} md={6}>
                <Container>
                  <img
                    style={{ width: 400, height: 500 }}
                    src={Profile35}
                    alt="image13"
                    />
                </Container>
              </Grid>
            </Grid>
          </Container>
          <br></br>
          <br></br>
          <br></br>
      </Box>
        </>
      )}

<Footer />
    </>
  );
};

export default Login;
