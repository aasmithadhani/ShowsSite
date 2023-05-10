import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState,useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import axios from 'axios'
import './Show.css'
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
 const Show = () => {
    const[MyData,SetMyData]=useState([]);
    useEffect(()=>
  {
      axios.get('https://api.tvmaze.com/search/shows?q=all')
        .then(res=>SetMyData(res.data));
    },[])
    console.log(MyData);
    console.log(Array.isArray(MyData))
   
  return (
    <Box>
         <Box sx={{
        justifyContent:'center',
        alignItems:'center',
        textAlign:"center"
    }}>
        <Typography className='heading' variant='h3' sx={{
            fontWeight:'bold',mt:5,mb:5
        }}>Shows to watch this week !!</Typography>
    </Box>
    <Box>
        <Grid container spacing={2} >
            {
                MyData.length==0?
                <div>Loading...</div>:

                MyData.map((values)=>
                
                (
                    <>
                    <Grid item xs={6} md={6} lg={3} className='grid'>
                        <Paper elevation={2}/>
                            <Card className='card' style={{width:"300px",height:"300px"}} sx={{ maxWidth: 346}}>
                               
                            
                            <CardContent key={values.score}>
                                <Typography gutterBottom variant="h4" component="div" sx={{fontWeight:'bold'}}>
                               {values.show.name}
                                </Typography>
                                <Typography variant='body1'>
                                Genres: {values.show.genres}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                               imdb:{values.show.externals.imdb}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                Schedule:{values.show.schedule.time}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                               status:{values.show.status}
                                </Typography>

                            </CardContent>
                            <CardActions>
                              
                              <Button className='button'>
                              <Link className='link' to={`/data/${values.score}`} >Learn More</Link>
                              </Button>
                               
                                {/* <Link to={`/data/${values.score}`}>Learn More</Link> */}
                                
                              
                                
                            </CardActions>
                            </Card>
                            </Grid>
                            </>
                )

                )
            }
        </Grid>

    </Box>
    </Box>
   
   
  )
}


export default Show;