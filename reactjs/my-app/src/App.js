import React from 'react';
// import Button from '../components/Button';
import {Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  return (
    <>
  {/* <Button/> */}
  <div>
  <Button variant="contained"  size="small" disableElevation>
    Disable elevation
  </Button>
  <Button variant="outlined" startIcon={<DeleteIcon />} size="medium"> 
        Delete
      </Button>
      <Typography variant="h1" component="h2">
        h1 Heading but its h2 component
      </Typography>
      <button variant="contained" sx={{
        backgroundColor:"skyblue",
        color:"#888",
        margin:5,
      }}>My Uniqe Button</button>
  </div>
    </>
  );
}

export default App;
