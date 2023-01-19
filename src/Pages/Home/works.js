import React, { useState } from "react";
import searchWorks from "../../assets/img/worksImages/searchWorks.png"
import codeWorks from "../../assets/img/worksImages/codeWorks.png"
import movieWorks from "../../assets/img/worksImages/movieWorks.png"
import reikiWorks from "../../assets/img/worksImages/reikiWorks.png"
import apiaryWorks from "../../assets/img/worksImages/apiaryWorks.png"
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

<div className="worksHeader">
<div> Works</div>
<div class="productLine"></div>
</div>
        <div class="container">
          <div ></div>
          
          <div class="box">
            <img src={apiaryWorks} />
            <span className="spanWorks">1</span>
          </div>
          <div class="box">
            <img src={searchWorks} />
            <span className="spanWorks">2</span>
          </div>
          <div class="box">
            <img src={movieWorks} />
            <span className="spanWorks">3</span>
          </div>
          <div class="box">
          <img src={codeWorks} />
            <span className="spanWorks">4</span>
          </div>
          <div class="box">
            <img src={reikiWorks} />
            <span className="spanWorks">5</span>
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