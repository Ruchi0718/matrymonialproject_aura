import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Checkbox,
  FormControl,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Container } from "@mui/system";

const Form = () => {
  const [religion, setReligion] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [age, setAge] = useState("");
  const [toage, setToage] = useState("");
  const [caste, setCaste] = useState("");
  const [community, setCommunity] = useState("");
  const [country, setCountry] = useState("");

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleChangetoAge = (event) => {
    setToage(event.target.value);
  };

  const handleChange = (event) => {
    setLookingFor(event.target.value);
  };
  const handleChangereligion = (event) => {
    setReligion(event.target.value);
  };
  const handleChangeCaste = (event) => {
    setCaste(event.target.value);
  };
  const handleChangeCommunity = (event) => {
    setCommunity(event.target.value);
  };
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  return (
    <Box sx={{ height: 620 }}>
      <Container>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems={{ lg: "center", xs: "center" }}
          justifyContent={"center"}
          sx={{
            padding: 2,
            width: { lg: 450, xs: 330 },
            height: { lg: 550 },
            marginTop: 4,
            backgroundColor: "#F8F8F8",
          }}
        >
          <Grid container>
            <Grid
              textAlign={"center"}
              justifyContent={"center"}
              ml={{ lg: 14, xs: 7, sm: 5, md: 6 }}
              sx={{
                fontSize: "xx-large",
                fontWeight: "bold",
                color: "#FF311A",
              }}
              item
              xs={4}
            >
              SEARCH
            </Grid>
            <Grid
              textAlign={"center"}
              justifyContent={"center"}
              ml={{ lg: 1, xs: 5 }}
              sx={{ fontSize: "xx-large", fontWeight: "bold", color: "grey" }}
              item
              xs={3}
            >
              HERE
            </Grid>
          </Grid>
          <Typography sx={{ marginLeft: { lg: "70%", xs: "40%" } }}>
            <u>Profile ID Search</u>
          </Typography>
          <br></br>
          <Grid m={1} container xs={12}>
            <Grid item xs={4}>
              <Typography align="center">Looking For </Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: { lg: 275, xs: 200 } }} size="small">
                <InputLabel id="demo-simple-select-label">
                  Looking For
                </InputLabel>
                <Select
                  fullWidth
                  value={lookingFor}
                  onChange={handleChange}
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Lookingfor"
                >
                  <MenuItem value={"bride"}>Bride</MenuItem>
                  <MenuItem value={"groom"}>Groom</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid m={1} container xs={12}>
            <Grid item xs={4}>
              <Typography align="center">Age</Typography>
            </Grid>
            <Grid item xs={3}>
              <FormControl sx={{ width: { lg: 110, xs: 78 } }} size="small">
                <InputLabel id="demo-simple-select-label">From</InputLabel>
                <Select
                  value={age}
                  onChange={handleChangeAge}
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="From"
                >
                  <MenuItem value={10}>18</MenuItem>
                  <MenuItem value={20}>19</MenuItem>
                  <MenuItem value={30}>20</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={1}>
              <Typography align="center">To</Typography>
            </Grid>
            <Grid ml={{ lg: 2, xs: 0 }} item xs={3}>
              <FormControl sx={{ width: { lg: 110, xs: 78 } }} size="small">
                <InputLabel id="demo-simple-select-label">To</InputLabel>
                <Select
                  value={toage}
                  onChange={handleChangetoAge}
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="To"
                >
                  <MenuItem value={10}>25</MenuItem>
                  <MenuItem value={20}>28</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid m={1} container xs={12}>
            <Grid item xs={4}>
              <Typography align="center">Religion </Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: { lg: 275, xs: 200 } }} size="small">
                <InputLabel id="demo-simple-select-label">Religion</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Religion"
                  fullWidth
                  value={religion}
                  onChange={handleChangereligion}
                >
                  <MenuItem value={"hindu"}>Hindu</MenuItem>
                  <MenuItem value={"muslim"}>Muslim</MenuItem>
                  <MenuItem value={"christian"}>Christian</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid m={1} container xs={12}>
            <Grid item xs={4}>
              <Typography align="center">Caste </Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: { lg: 275, xs: 200 } }} size="small">
                <InputLabel id="demo-simple-select-label">Caste</InputLabel>
                <Select
                  fullWidth
                  value={caste}
                  onChange={handleChangeCaste}
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Caste"
                >
                  <MenuItem value={"general"}>General</MenuItem>
                  <MenuItem value={"obc"}>Obc</MenuItem>
                  <MenuItem value={"st/sc"}>St/Sc</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid m={1} container xs={12}>
            <Grid item xs={4}>
              <Typography align="center">Community </Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: { lg: 275, xs: 200 } }} size="small">
                <InputLabel id="demo-simple-select-label">Community</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Community"
                  fullWidth
                  value={community}
                  onChange={handleChangeCommunity}
                >
                  <MenuItem value={"general"}>General</MenuItem>
                  <MenuItem value={"obc"}>Obc</MenuItem>
                  <MenuItem value={"st/sc"}>St/Sc</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>{" "}
          <Grid m={1} container xs={12}>
            <Grid item xs={4}>
              <Typography align="center">Country </Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: { lg: 275, xs: 200 } }} size="small">
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                 labelId="demo-select-small"
                 id="demo-select-small"
                 label="Country"
                  fullWidth
                  value={country}
                  onChange={handleChangeCountry}
                >
                  <MenuItem value={"India"}>India</MenuItem>
                  <MenuItem value={"canada"}>Canada</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid sx={{ marginLeft: "20%" }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="With Photo Advance Search"
            />
          </Grid>
          <Grid m={2} container xs={12}>
            <Button sx={{ marginLeft: "30%" }} variant="contained">
              Search
            </Button>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Form;
