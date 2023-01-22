import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Fade from 'react-reveal/Fade';


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
    <div className="skillsSkills"> <h1 className="damionFont skills">SKILLS</h1></div>
      <div className="skillsSizing">












<br></br>
<div className="SkillsContainer">
<Fade bottom duration={4500}>
<div class="container">
  <div class="row">
    <div class="col-sm">
    <div className="p-5"><i class="devicon-html5-plain"></i><p>HTML5</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-css3-plain"></i><p>CSS3</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-javascript-plain"></i><p>Javascript</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-bootstrap-plain"></i><p>Bootstrap</p></div>
    </div>
  </div>
</div>
</Fade>
<Fade top duration={4500}>
<div class="container">
  <div class="row">
    <div class="col-sm">
    <div className="p-5"><i class="devicon-github-original"></i><p>Github</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-react-original"></i><p>React.js</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-express-original"></i><p>Express.js</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-bulma-plain"></i><p>Bulma</p></div>
    </div>
  </div>
</div>
</Fade >
<Fade bottom duration={4500}>
<div class="container">
  <div class="row">
    <div class="col-sm">
    <div className="p-5"><i class="devicon-nodejs-plain"></i><p>Node.js</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-graphql-plain"></i><p>GraphQL</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-mysql-plain"></i><p>MySQL</p></div>
    </div>
    <div class="col-sm">
    <div className="p-5"><i class="devicon-heroku-original"></i><p>Heroku</p></div>
    </div>
  </div>
</div>
</Fade>
</div>
</div>
    </section>




  );
}

export default Skills;