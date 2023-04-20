import React from "react";
import {
  Box,
  Grid,
  Button,
  IconButton,
  Typography,
  Icon,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import Filterui from "../../pages/filterUI/filterui";
import AboutusBody from "../aboutusBody/aboutusBody";

const AboutusSidebar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Grid container sx={{ displayFlex: "inline", flexDirection: "row" }}>
        {isMatch ? (
          <>
            <Grid container>
              <Grid item xs={1} >
                <Filterui />
              </Grid>
          
            </Grid>
          </>
        ) : (
          <>
            <Grid item p={1} lg={3} md={3}>
              <Box
                sx={{
                  marginTop: { lg: "5%", md: "5%" },
                  margin: { lg: "auto", xs: "auto" },
                  width: { lg: "80%", xs: "7rem", sm: "100%", md: "10rem" },
                  height: { lg: "100%" },
                  border: "2px solid #C0C0C0",
                  borderRadius: "4px",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    sx={{
                      margin: {
                        lg: "auto",
                        xs: "auto",
                        sm: "auto",
                        md: "auto",
                      },
                    }}
                  >
                    <IconButton>
                      <Icon>
                        <TuneIcon />
                      </Icon>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Filter
                      </Typography>
                    </IconButton>
                  </Grid>
                </Grid>
                <Divider />

                <Grid container>
                  <Grid item lg={12}>
                    <Typography sx={{ fontSize: "15px", color: "grey" }}>
                      Looking For
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item lg={6}>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-form-control-label-placement"
                        name="position"
                        defaultValue="top"
                      >
                        <FormControlLabel
                          sx={{
                            fontWeight: "10px",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                          value="Bride"
                          control={<Radio />}
                          label="Bride"
                          labelPlacement="Bride"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item lg={6}>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-form-control-label-placement"
                        name="position"
                        defaultValue="top"
                      >
                        <FormControlLabel
                          sx={{
                            fontWeight: "10px",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                          value="Groom"
                          control={<Radio />}
                          label="Groom"
                          labelPlacement="Groom"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid container>
                    <Grid item p={1} lg={5}>
                      <FormControl
                        sx={{ minWidth: { lg: 80, md: 140 } }}
                        size="small"
                      >
                        <InputLabel id="demo-simple-select-autowidth-label">
                          Age
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          value={age}
                          onChange={handleChange}
                          autoWidth
                          label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>22</MenuItem>
                          <MenuItem value={21}>25</MenuItem>
                          <MenuItem value={22}>30</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item p={1} lg={2}>
                      <Typography align="center">To</Typography>
                    </Grid>
                    <Grid
                      item
                      sx={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        alignContent: "center",
                      }}
                      p={1}
                      lg={5}
                      xs={12}
                    >
                      <FormControl
                        sx={{ minWidth: { lg: 80, md: 140 } }}
                        size="small"
                      >
                        <InputLabel id="demo-simple-select-autowidth-label">
                          Age
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          value={age}
                          onChange={handleChange}
                          autoWidth
                          label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>22</MenuItem>
                          <MenuItem value={21}>25</MenuItem>
                          <MenuItem value={22}>30</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid
                      item
                      sx={{
                        alignContent: {
                          xs: "center",
                          sm: "center",
                          md: "flex-start",
                        },
                      }}
                      lg={12}
                      xs={12}
                      md={12}
                    >
                      <Typography
                        align="center"
                        sx={{
                          fontWeight: "bold",
                       
                        }}
                      >
                        <u>Advanced Search</u>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid container>
                    <Grid item m={1}>
                      <TextField
                        sx={{ width: { lg: 220, md: 140 } }}
                        id="outlined-basic"
                        size="small"
                        label="Enter the Id"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>

                  <Grid item m={1} lg={12} md={12}>
                    <FormControl
                      sx={{ minWidth: { lg: 220, md: 140 } }}
                      size="small"
                    >
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Religion
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        label="Select One"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>22</MenuItem>
                        <MenuItem value={21}>25</MenuItem>
                        <MenuItem value={22}>30</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item m={1} lg={12} md={12}>
                    <FormControl
                      sx={{ minWidth: { lg: 220, md: 140 } }}
                      size="small"
                    >
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Relgion
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                       
                        autoWidth
                        label="Select One"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>22</MenuItem>
                        <MenuItem value={21}>25</MenuItem>
                        <MenuItem value={22}>30</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item m={1} lg={12} md={12}>
                    <FormControl
                      sx={{ minWidth: { lg: 220, md: 140 } }}
                      size="small"
                    >
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Caste
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        
                        autoWidth
                        label="Select One"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>22</MenuItem>
                        <MenuItem value={21}>25</MenuItem>
                        <MenuItem value={22}>30</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item m={1} lg={12} md={12}>
                    <FormControl
                      sx={{ minWidth: { lg: 220, md: 140 } }}
                      size="small"
                    >
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Sub Caste
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                       
                        autoWidth
                        label="Select One"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>22</MenuItem>
                        <MenuItem value={21}>25</MenuItem>
                        <MenuItem value={22}>30</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item m={1} lg={12} md={12}>
                    <FormControl
                      sx={{ minWidth: { lg: 220, md: 140 } }}
                      size="small"
                    >
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Language
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                       
                        autoWidth
                        label="Select One"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>22</MenuItem>
                        <MenuItem value={21}>25</MenuItem>
                        <MenuItem value={22}>30</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item m={1} lg={12} md={12}>
                    <FormControl
                      sx={{ minWidth: { lg: 220, md: 140 } }}
                      size="small"
                    >
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Complexion
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                     
                        autoWidth
                        label="Select One"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>22</MenuItem>
                        <MenuItem value={21}>25</MenuItem>
                        <MenuItem value={22}>30</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid
                    item
                    m={1}
                   
                    lg={12}
                    md={12}
                  >
                    <FormControl
                      sx={{ minWidth: { lg: 220, md: 140 } }}
                      size="small"
                    >
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Qualification
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                     
                        autoWidth
                        label="Select One"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>22</MenuItem>
                        <MenuItem value={21}>25</MenuItem>
                        <MenuItem value={22}>30</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid
                    item
                    m={1}
                   
                    lg={12}
                    md={12}
                  >
                    <FormControl
                      sx={{ minWidth: { lg: 220, md: 140 } }}
                      size="small"
                    >
                      <InputLabel>Profession</InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                 
                        autoWidth
                        label="Select One"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>22</MenuItem>
                        <MenuItem value={21}>25</MenuItem>
                        <MenuItem value={22}>30</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid container>
                    <Grid item p={1} lg={12}>
                      <Typography align="center">
                        <Button
                          sx={{ width: { lg: "80%", md: "80%" } }}
                          variant="contained"
                          color="error"
                        >
                          Search
                        </Button>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </>
        )}

        <Grid item lg={9} xs={12} sm={12} md={9}>
          <Container
            sx={{
              margin: "auto",
              width: { lg: "80%", sm: "100%", xs: "100%", md: "100%" },
              height: { lg: "32%", sm: "70%", xs: "80%", md: "99%" },
              aspectRatio: "/1",
            }}
          >
            <Typography m={3} align="center" sx={{ fontWeight:"bold" }}>
              All Members
            </Typography>
            <AboutusBody />
            <br></br>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutusSidebar;
