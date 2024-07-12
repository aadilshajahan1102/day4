import React, { useState } from 'react'   
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';

const Add = () => {
  const [count,setCount]=useState(0);
  // let valueAdd=()=>{
  //   setCount(count+1)
  // }
  const [form,setForm]=useState(
    {
    movieName:'',
    movieDirector:'',
    category:'',
    releaseYear:''
  }
)
  function valueFetch(e)
  {
    setForm({...form,[e.target.name]:e.target.value})
  }
  let sendData=()=>{
    console.log(form)
    axios.post('http://localhost:4000/newmovie',form).then((res)=>{
      alert('Data added')
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        <TextField
          required
          id="standard-required"
          label="Movie-name"
          //defaultValue="Hello World"
          //variant="standard"
          name="movieName"
          value={form.movieName}
          onChange={valueFetch}
        />
        <TextField
           required
           id="standard-required"
           label="movieDirector"
           //defaultValue="Hello World"
           //variant="standard"
           name="movieDirector"
           value={form.movieDirector}
           onChange={valueFetch}
        />
        <TextField
           required
           id="standard-required"
           label="category"
           //defaultValue="Hello World"
           //variant="standard"
           name="category"
           value={form.category}
           onChange={valueFetch}
        />
        <TextField
           required
           id="standard-required"
           label="releaseYearr"
           //defaultValue="Hello World"
           //variant="standard"
           name="releaseYear"
           value={form.releaseYear}
           onChange={valueFetch}
        />
        <Button variant="contained" color="success" onClick={sendData}>submit</Button>
        <br/>
        {/* <small>Count is {count}</small> */}
        <br/>
      </div>
    </Box>
    </div>
  )
}
export default Add