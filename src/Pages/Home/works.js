import React, { useState } from "react";
import searchImg from "../../assets/img/SearchAndStream.png"
import movieswipeImg from "../../assets/img/MovieSwipe.png"
import codeabreakImg from "../../assets/img/codeabreakImg.png"
import ReikiHealing from "../../assets/img/ReikiHealingSite.png"
import Apiary from "../../assets/img/ApiarysiteImg.png"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


function Works() {
  return (

    <section >

      
      <div className="photoGrid">



        <div class="container">
          <div ></div>
          <div class="box">
            <h3>hi</h3>
            <img src={searchImg} />
            <span>CSS</span>
          </div>
          <div class="box">
            <img src={movieswipeImg} />
            <span>Image</span>
          </div>
          <div class="box">
            <img src={codeabreakImg} />
            <span>Hover</span>
          </div>
          <div class="box">
          <img src={ReikiHealing} />
            <span>Effect</span>
          </div>
          <div class="box">
            <img src={Apiary} />
            <span>Effect</span>
          </div>
        </div>
      </div>

      {/* <Grid container spacing={2}>
  <Grid item xs={6}>
    <Item> <img src={searchImg} /></Item>
  </Grid>
  <Grid item xs={6}>
    <Item> <img src={movieswipeImg} /></Item>
  </Grid>
  <Grid item xs={4}>
    <Item><img src={codeabreakImg} /></Item>
  </Grid>
  <Grid item xs={4}>
    <Item><img src={ReikiHealing} /></Item>
  </Grid>
  <Grid item xs={8}>
    <Item><img src={Apiary} /></Item>
  </Grid>
</Grid> */}



    </section>




  );
}

export default Works;