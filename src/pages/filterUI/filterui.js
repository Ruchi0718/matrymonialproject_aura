import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import {
  Box,
  Grid,
  Icon,
  IconButton,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Container,
} from "@mui/material";
import Image15 from "../../assets/image15.png";
import CancelIcon from "@mui/icons-material/Cancel";

const Filterui = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [state, setState] = React.useState({
    bottam: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      p={1}
      pb={1}
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
        height: 1000    ,
      }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <Container sx={{width:300}}>
        <Grid container>
          <Grid item xs={12}>
            <Typography align="right">
              <IconButton onClick={toggleDrawer(anchor, false)}>
                <Icon>
                  <CancelIcon />
                </Icon>
              </IconButton>
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            sx={{
              margin: { lg: "auto", xs: "auto", sm: "auto", md: "auto" },
            }}
          >
            <IconButton>
              <Icon>
                <TuneIcon />
              </Icon>
              <Typography sx={{ fontWeight: "bold" }}>Filter</Typography>
            </IconButton>
          </Grid>
        </Grid>
        <Divider />

        <Grid container>
          <Grid item m={1} xs={12}>
            <Typography sx={{ fontSize: "15px", color: "grey" }}>
              Looking For
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={6} xs={6}>
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
          <Grid item lg={6} xs={6}>
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
            <Grid item m={1}>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "grey",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Age
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item p={1} lg={5} xs={12} md={12}>
              <FormControl
                sx={{ minWidth: { lg: 220, xs: 250, sm: 250, md: 160 } }}
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
            <Grid item lg={2} xs={12}>
              <Typography align="center" justifyContent={"center"}>
                To
              </Typography>
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
                sx={{ minWidth: { lg: 220, xs: 250, sm: 250, md: 160 } }}
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
                  margin: "auto",
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
                sx={{ width: 250 }}
                id="outlined-basic"
                size="small"
                label="Enter the Id"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Grid item m={1} lg={12} xs={12}>
            <FormControl
              sx={{ minWidth: { lg: 220, xs: 250, sm: 250, md: 160 } }}
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

          <Grid
            item
            m={1}
         
            lg={12}
            xs={12}
          >
            <FormControl
              sx={{ minWidth: { lg: 220, xs: 250, sm: 250, md: 160 } }}
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

          <Grid
            item
            m={1}
           
            lg={12}
            xs={12}
          >
            <FormControl
              sx={{ minWidth: { lg: 220, xs: 250, sm: 250, md: 160 } }}
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

          <Grid
            item
            m={1}
           
            lg={12}
            xs={12}
          >
            <FormControl
              sx={{ minWidth: { lg: 220, xs: 250, sm: 250, md: 160 } }}
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

          <Grid
            item
            m={1}
          
            lg={12}
            xs={12}
          >
            <FormControl
              sx={{ minWidth: { lg: 220, xs: 250, sm: 250, md: 160 } }}
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
            xs={12}
          >
            <FormControl
              sx={{ minWidth: { lg: 220, xs: 250, sm: 250, md: 160 } }}
              size="small"
            >
              <InputLabel id="demo-simple-select-autowidth-label">
                MaritalStatus
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
            xs={12}
          >
            <FormControl
              sx={{ minWidth: { lg: 220, xs: 250, sm: 250, md: 160 } }}
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
            xs={12}
          >
            <FormControl
              sx={{ minWidth: { lg: 220, xs: 250, sm: 250, md: 160 } }}
              size="small"
            >
              <InputLabel>Profession</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChange}
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
            <Grid item p={1} lg={12} xs={12}>
              <Typography align="center">
                <Button
                  sx={{ width: { lg: "80%", xs: "70%" } }}
                  variant="contained"
                  color="error"
                >
                  Search
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container sx={{ displayFlex: "inline", flexDirection: "row" }}>
          <Grid item lg={3} xs={3} sm={3} md={3}>
            <Box
              sx={{
                width: { lg: "80%", xs: "16rem", sm: "16rem%", md: "" },
                height: { lg: "20rem", xs: "15rem", sm: "18rem" },
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
        <br></br>
      </Container>
    </Box>
  );
  return (
    <>
      <div>
        {["bottom"].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton onClick={toggleDrawer(anchor, true)}>
              <Icon>
                <TuneIcon />{anchor}
              </Icon>
            </IconButton>

            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              // onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Filterui;
