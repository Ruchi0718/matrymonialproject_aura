import React from "react";
import Header from "../../component/header/header";
import {
  Container,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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
  // const [age, setAge] = React.useState("");

  // const handleChangeselect = (event) => {
  //   setAge(event.target.value);
  // };

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
                          Signup
                        </Typography>
                      }
                      wrapped
                    />
                  </Tabs>
                  <br></br>
                  <br></br>

                  <Typography
                    sx={{ fontSize: "12px", fontWeight: "bold", color: "grey" }}
                  >
                    Sign Up with your credentials to find your life partner
                  </Typography>
                  <br></br>

                  <Box
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                  >
                    <Grid container  spacing={1}>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Email/Phone"
                          id="fullWidth"
                        />
                      </Grid>
                      <br></br>
                      <br></br>
                      <br></br>

                   

                      <Grid item xs={12} sm={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Password"
                          id="fullWidth"
                        />
                      </Grid>
                      <br></br>
                      <br></br>

                      <br></br>

                      {/* <FormControl fullWidth size="small">
                        <InputLabel id="demo-select-small">Age</InputLabel>
                        <Select
                          labelId="demo-select-small"
                          id="demo-select-small"
                          value={age}
                          label="Age"
                          onChange={handleChangeselect}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                      <br></br> */}
                      <Grid item xs={4} sm={4}>
                        <FormControl sx={{ minWidth: 90 }} size="small">
                          <InputLabel id="demo-select-small">Day</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>1</MenuItem>
                            <MenuItem value={20}>2</MenuItem>
                            <MenuItem value={30}>3</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      
                      <Grid item xs={4} sm={4}>
                        <FormControl sx={{ minWidth: 90 }} size="small">
                          <InputLabel id="demo-select-small">Month</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>January</MenuItem>
                            <MenuItem value={20}>February</MenuItem>
                            <MenuItem value={30}>March</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>{" "}
                      <Grid item xs={4} sm={4}>
                        <FormControl sx={{ minWidth: 105 }} size="small">
                          <InputLabel id="demo-select-small">Year</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>2005</MenuItem>
                            <MenuItem value={20}>2007</MenuItem>
                            <MenuItem value={30}>2010</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <br></br>
                      <br></br>
                      <br></br>

                      <Grid item xs={6} sm={6}>
                        <FormControl fullWidth size="small">
                          <InputLabel id="demo-select-small">
                            Marital Status
                          </InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>Unmarried</MenuItem>
                            <MenuItem value={20}>Divorced</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={6} sm={6}>
                        <FormControl fullWidth size="small">
                          <InputLabel id="demo-select-small">
                            Creating Profile
                          </InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>Son</MenuItem>
                            <MenuItem value={20}>Daughter</MenuItem>
                            <MenuItem value={30}>Myself</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <br></br>
                      <br></br>
                      <br></br>
                      <Grid item xs={6} sm={6}>
                        <FormControl fullWidth size="small">
                          <InputLabel id="demo-select-small">
                            Religion
                          </InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>Hindu</MenuItem>
                            <MenuItem value={20}>Muslim</MenuItem>
                            <MenuItem value={30}>Sikh</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <FormControl fullWidth size="small">
                          <InputLabel id="demo-select-small">Caste</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Brahmin</MenuItem>
                            <MenuItem value={20}>Kshatriya</MenuItem>
                            <MenuItem value={30}>Va</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <br></br>
                      <br></br>
                      <br></br>

                      <Grid item xs={6} sm={6}>
                        <FormControl fullWidth size="small">
                          <InputLabel id="demo-select-small">City</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>Pune</MenuItem>
                            <MenuItem value={20}>Banglore</MenuItem>
                            <MenuItem value={30}>Mumbai</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <FormControl fullWidth size="small">
                          <InputLabel id="demo-select-small">State</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>MP </MenuItem>
                            <MenuItem value={20}>UP</MenuItem>
                            <MenuItem value={30}>Maharashtra</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <br></br>
                      <br></br>
                      <br></br>

                      <Grid item xs={6} sm={6}>
                        <FormControl fullWidth size="small">
                          <InputLabel id="demo-select-small">
                            Language
                          </InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>Hindi</MenuItem>
                            <MenuItem value={20}>English</MenuItem>
                            <MenuItem value={30}>Marathi</MenuItem>
                            <MenuItem value={30}>Kannad</MenuItem>
                            <MenuItem value={30}>Tamil</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <FormControl fullWidth size="small">
                          <InputLabel id="demo-select-small">Height</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>5.1</MenuItem>
                            <MenuItem value={20}>5.3</MenuItem>
                            <MenuItem value={30}>5.5</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Container>
                        <Grid item p={5} xs={12}>
                          <Typography align="center">
                            <Button
                              variant="contained"
                              sx={{ background: "#FF311A", width: 100 }}
                            >
                              Sign Up
                            </Button>
                          </Typography>
                        </Grid>
                      </Container>
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
                sx={{
                  marginTop: { lg: "18%", xs: "45%", sm: "20%", md: "25%" },
                }}
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
                            Signup
                          </Typography>
                        }
                        wrapped
                      />
                    </Tabs>
                    <br></br>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        color: "grey",
                      }}
                    >
                      Signup with your credentials to find your life partner
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
                    <Grid container>

                    <Grid item lg={4}>
                        <FormControl sx={{ minWidth: 130 }} size="small">
                          <InputLabel id="demo-select-small">Day</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>1</MenuItem>
                            <MenuItem value={20}>2</MenuItem>
                            <MenuItem value={30}>3</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item lg={4}>
                        <FormControl sx={{ minWidth: 130 }} size="small">
                          <InputLabel id="demo-select-small">Month</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                            >
                            <MenuItem value={10}>January</MenuItem>
                            <MenuItem value={20}>February</MenuItem>
                            <MenuItem value={30}>March</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>{" "}
                      <Grid item lg={4}>
                        <FormControl sx={{ minWidth: 150}} size="small">
                          <InputLabel id="demo-select-small">Year</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>2005</MenuItem>
                            <MenuItem value={20}>2007</MenuItem>
                            <MenuItem value={30}>2010</MenuItem>
                          </Select>
                        </FormControl>
                            </Grid>
                      </Grid>
                    {/* <FormControl fullWidth size="small">
                      <InputLabel id="demo-select-small">Age</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChangeselect}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl> */}
                    <br></br>

                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-select-small">
                        Marital Status
                      </InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>Unmarried</MenuItem>
                        <MenuItem value={20}>Divorced</MenuItem>
                      </Select>
                    </FormControl>
                    <br></br>
                    <br></br>

                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-select-small">
                        Creating Profile
                      </InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>Son</MenuItem>
                        <MenuItem value={20}>Daughter</MenuItem>
                        <MenuItem value={30}>Myself</MenuItem>
                      </Select>
                    </FormControl>
                    <br></br>
                    <br></br>

                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-select-small">Religion</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>Hindu</MenuItem>
                        <MenuItem value={20}>Muslim</MenuItem>
                        <MenuItem value={30}>Christian</MenuItem>
                      </Select>
                    </FormControl>
                    <br></br>
                    <br></br>

                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-select-small">Caste</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>Brahmin</MenuItem>
                        <MenuItem value={20}>Kshatriya</MenuItem>
                        <MenuItem value={30}>Vaisya</MenuItem>
                        <MenuItem value={30}>Sudra</MenuItem>
                      </Select>
                    </FormControl>
                    <br></br>
                    <br></br>

                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-select-small">City</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>Pune</MenuItem>
                        <MenuItem value={20}>Banglore</MenuItem>
                        <MenuItem value={30}>Mumbai</MenuItem>
                      </Select>
                    </FormControl>
                    <br></br>
                    <br></br>

                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-select-small">State</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>Madhya Pradesh</MenuItem>
                        <MenuItem value={20}>Maharashtra</MenuItem>
                        <MenuItem value={30}>Uttar Pradesh</MenuItem>
                      </Select>
                    </FormControl>
                    <br></br>
                    <br></br>

                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-select-small">Language</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>Hindi</MenuItem>
                        <MenuItem value={20}>English</MenuItem>
                        <MenuItem value={30}>Marathi</MenuItem>
                      </Select>
                    </FormControl>
                    <br></br>
                    <br></br>
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-select-small">Height</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>5 "1</MenuItem>
                        <MenuItem value={20}>5 "4</MenuItem>
                        <MenuItem value={30}>5 "7</MenuItem>
                      </Select>
                    </FormControl>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <Grid item xs={12}>
                      <Typography align="center">
                        <Button
                          variant="contained"
                          sx={{ background: "#FF311A", width: 100 }}
                        >
                          Sign Up
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
                      style={{ width: 550, height: 800 }}
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
