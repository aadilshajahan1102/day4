import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


/*const rows = [
  {
    
    MOVIENAME:"1. The Shawshank Redemption",
    CATEGORY:"Drama",
    DIRECTOR:"Frank Darabont",
    YEAR:1994,
    RATING:9.4

  },
  {
    MOVIENAME:"2. The Godfather",
    CATEGORY:"Crime,Drama",
    DIRECTOR:"Francis Ford Coppola",
    YEAR:1972,
    RATING:9.2

  },
  {
    MOVIENAME:"3. The Dark Knight",
    CATEGORY:"Action,Crime,Drama",
    DIRECTOR:"Christopher Nolan",
    YEAR:2008,
    RATING:9.0

  },
  {
    MOVIENAME:"4. The Godfather Part II",
    CATEGORY:"Crime,Drama",
    DIRECTOR:"Francis Ford Coppola",
    YEAR:1974,
    RATING:9.0

  },
  {
    MOVIENAME:"5. 12 Angry Men",
    CATEGORY:"Crime,Drama",
    DIRECTOR:"Sidney Lumet",
    YEAR:1957,
    RATING:9.0

  }
];*/


const Records=()=> {
  const [rows,setRows]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:4000/movies').then((res)=>{
        console.log(res);
        setRows(res.data);
      
    })
},[])
function valueAdd(){console.log()}
  return (
    
    <div>
       
        <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead> 
        <TableRow sx={{ '& td, & th' : { border: 2 } }}> 
          <TableCell><b>MOVIE_NAME</b></TableCell>
          <TableCell align="right"><b>CATEGORY</b></TableCell>
          <TableCell align="right"><b>DIRECTOR</b></TableCell>
          <TableCell align="right"><b>YEAR</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ ' & td , & th ': { border : 2} }}
          >
            <TableCell component="th" scope="row">
              {row.movieName}
            </TableCell>
            <TableCell align="right">{row.movieDirector}</TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">{row.releaseYear}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer></div>
  )
}

export default Records