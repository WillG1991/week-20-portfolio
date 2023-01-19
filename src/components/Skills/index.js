import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


function Skills() {
  return (

<section id="skills">
    <br></br>
    <div className="skillsSkills"> <h1>Skills</h1></div>
      <div className="worksHeader">

<br></br>
<div className="SkillsContainer">
<div class="container">
  <div class="row">
    <div class="col-sm">
    <div className="p-5"><i class="devicon-bootstrap-plain"></i><p>bootstrap</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-bulma-plain"></i><p>bulma</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-css3-plain"></i><p>CSS3</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-express-original"></i><p>express</p></div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm">
    <div className="p-5"><i class="devicon-react-original"></i><p>react</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-github-original"></i><p>github</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-github-original"></i><p>graphql</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-heroku-original"></i><p>heroku</p></div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm">
    <div className="p-5"><i class="devicon-html5-plain"></i><p>html</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-javascript-plain"></i><p>javascript</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-mysql-plain"></i><p>mysql</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-nodejs-plain"></i><p>nodejs</p></div>
    </div>
  </div>
</div>
</div>
</div>
    </section>




  );
}

export default Skills;