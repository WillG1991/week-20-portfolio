import React from "react";
import Fade from 'react-reveal/Fade';

function Skills() {
  return (
    <section id="skills">
      <br></br>
      <div className="skillsSkills">
        <h1 className="damionFont skills">SKILLS</h1>
      </div>
      <div className="skillsSizing">
        <br></br>
        <div className="SkillsContainer">
          <Fade bottom duration={3500}>
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <div className="p-5"><i className="devicon-html5-plain"></i><p>HTML5</p></div>
                </div>
                <div className="col-sm">
                  <div className="p-5"><i className="devicon-css3-plain"></i><p>CSS3</p></div>
                </div>
                <div className="col-sm">
                  <div className="p-5"><i className="devicon-javascript-plain"></i><p>Javascript</p></div>
                </div>
                <div className="col-sm">
                  <div className="p-5"><i className="devicon-bootstrap-plain"></i><p>Bootstrap</p></div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade top duration={3500}>
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <div className="p-5"><i className="devicon-github-original"></i><p>Github</p></div>
                </div>
                <div className="col-sm">
                  <div className="p-5"><i className="devicon-react-original"></i><p>React.js</p></div>
                </div>
                <div className="col-sm">
                  <div className="p-5"><i className="devicon-express-original"></i><p>Express.js</p></div>
                </div>
                <div className="col-sm">
                  <div className="p-5"><i className="devicon-bulma-plain"></i><p>Bulma</p></div>
                </div>
              </div>
            </div>
          </Fade >
          <Fade bottom duration={3500}>
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <div className="p-5"><i className="devicon-nodejs-plain"></i><p>Node.js</p></div>
                </div>
                <div className="col-sm">
                  <div className="p-5"><i className="devicon-graphql-plain"></i><p>GraphQL</p></div>
                </div>
                <div className="col-sm">
                  <div className="p-5"><i className="devicon-mysql-plain"></i><p>MySQL</p></div>
                </div>
                <div className="col-sm">
                  <div className="p-5"><i className="devicon-heroku-original"></i><p>Heroku</p></div>
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