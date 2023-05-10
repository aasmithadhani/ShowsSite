import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button';
import './Data.css'
import Grid from '@mui/material/Grid';
const Data = () => {
  console.log(useParams());

   const {show}=useParams();
    const[MyData,SetMyData]=useState([]);
    

    useEffect(()=>
    {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
        .then(res=>SetMyData(res.data))
    },[])

  console.log(MyData)

    
   const newNews = MyData.find((item)=> item.score==show);
   console.log(newNews);

  
  return (
    <Box className='show'  sx={{
      mt: 5,
      ml: 10,
      mr:10
     
    }}>
      {
        MyData.length==0?
        <div>Loading...</div>:
        <Box>
            <Typography variant='h1' sx={{
               alignItems:'center',
               justifyContent:'center',
               textAlign:'center',
               mb:5,
             
            }}>
          {newNews.show.name}
        </Typography>
        <Grid container >
          <Grid item xs={12} lg={6}>
          <img src={newNews.show.image.original} style={{
        width:'70%',
        height:'80%'
      }}/>
          </Grid>
          <Grid item xs={12} lg={6}>
          <Typography variant='h6' sx={{mb:2,mt:10}}>
          IMDB:{newNews.show.externals.imdb}
        </Typography>
         <Typography variant='h6' sx={{mb:2}}>
          Status:{newNews.show.status}
        </Typography>
        <Typography variant='h6' sx={{mb:2}}>
          Premiered: {newNews.show.premiered}
        </Typography>
        <Typography variant='h6'sx={{mb:2}}>
          Genres:{newNews.show.genres}
        </Typography>
        <Typography variant='h6' sx={{mb:2}}>
          Language:{newNews.show.language}
        </Typography>
        <Typography variant='body1' sx={{mb:2}}>
        Description: {newNews.show.summary}
        </Typography>
       
            <Button className='official'  href={newNews.show.officialSite} >
             
            Learn More
              
            </Button>
          </Grid>
       

        </Grid>
      
       
          </Box>

      
      }
      

    </Box>
  )
}

export default Data;