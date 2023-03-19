import React, { useState } from "react";
import apiarySite from "../../assets/img/worksImages/apiaryWorks.jpg";
import searchSite from "../../assets/img/worksImages/searchWorks.jpg";
import codeSite from "../../assets/img/worksImages/codeWorks.jpg";
import reikiSite from "../../assets/img/worksImages/reikiWorks.jpg";
import dinerSite from "../../assets/img/worksImages/dinerWorks.jpg";
import eventSite from "../../assets/img/worksImages/eventWorks.jpg";
import paperBack from "../../assets/img/worksImages/paper.png"
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    color: "white",
    fontFamily: "Safety Gothic, sans-serif",
    fontSize: "3rem",
    textDecoration: "underline",
    textDecorationColor: "rgb(4, 157, 227)",
  },
  imageContainer: {
    position: "relative",
    margin: theme.spacing(1),
    height: 0,
    paddingTop: "62.857%", // 21:9 aspect ratio
    "& img": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  textBox: {
    position: "absolute",
    bottom: "20%",
    left: 0,
    right: 0,
    height: "60%",
    backgroundImage: `url(${paperBack})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "70%",
    backgroundPosition: "center",
    backgroundOrigin: "content-box",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
       [theme.breakpoints.down("md")]: {
      fontSize: "12px",
     
    },
  },

  hoverHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    textAlign: "left",
    fontSize: "25px",
    paddingLeft: "10px",
    paddingTop: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      paddingTop: "5px",
      paddingLeft: "5px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      paddingTop: "5px",
      paddingLeft: "5px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      paddingTop: "5px",
      paddingLeft: "5px",
    },
  },
  hoverText: {
    position: "absolute",
    top: 50,
    left: 0,
    textAlign: "left",
    fontSize: "17px",
    paddingLeft: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      paddingLeft: "5px",
    },
        [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      paddingTop: "2px",
      paddingLeft: "5px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      paddingTop: "5px",
      paddingLeft: "5px",
    },
  },
  hoverTextWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  hoverLink: {
    position: "absolute",
    bottom: 10,
    left: 0,
    textAlign: "left",
    fontSize: "15px",
    color: "white",
    paddingLeft: "10px",
    textDecoration: "none", // remove underline
  },
  hoverImageContainer: {
    backgroundColor: "rgb(4, 157, 227)",
  },
}));

const images = [
  { src: apiarySite, alt: "APIARY SITE", text: "APIARY SITE", header: "APIARY SITE", description: "E-commerce website using React that includes custom CSS styling to create a unique design. I also utilized some React Material-UI components to enhance the user experience.", link: "http://www.gehrkeapiaries.com/" },
  { src: searchSite, alt: "Search Site", text: "SEARCH & STREAM", header: "SEARCH & STREAM", description: "A website that enables users to search for a particular movie or show to see where it is currently being streamed. The site was built using two APIs, along with Node, Express, JavaScript, HTML, and CSS to create a seamless and dynamic user experience.", link: "https://willg1991.github.io/Streaming-Search/" },
  { src: dinerSite, alt: "Diner Site", text: "RESTAURANT SITE", header: "RESTAURANT SITE", description: "A web template built with React.js and Material-UI, offering a convenient and visually appealing way to create dynamic web pages that deliver a top-notch user experience.", link: "https://willg1991.github.io/SliceSociety/" },
  { src: reikiSite, alt: "REIKI SITE", text: "REIKI SITE", header: "REIKI SITE", description: "A single-page web app in React.js for a service-based website that leverages reusable components for each section of the page, while incorporating React Material-UI displays and an API to display the most recent Google reviews.", link: "https://christinaserafina.com/" },
  { src: codeSite, alt: "Code Site", text: "CODE A <BR>", header: "CODE A <BR>", description: "A social media platform allowing users to log in, post, and comment. Built from the ground upin just one week, utilizing HTML, CSS, Bulma, SQL, Insomnia and Express to create a seamless user experience.", link: "https://codeabreak.herokuapp.com/" },
  { src: eventSite, alt: "Event Site", text: "EVENT SITE", header: "EVENT PLANNING SITE", description: "A consumer event planning site using React.js. The site features an intuitive user interface and incorporates an EmailJS contact form. Additionally, the site has photo gallery with a lightbox, showcasing images.", link: "https://polishedeventsco.com/" },
];

const Works = () => {
  const classes = useStyles();
  const [hoveredImage, setHoveredImage] = useState(null);



  return (
    <Container maxWidth="lg">
    <section className={classes.root}>
      <Typography variant="h4" className={classes.header}>
        WORKS
      </Typography>
      <div>
      <Grid container spacing={1} justify="center">
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={image.src}>
<Box
  className={`${classes.imageContainer} ${hoveredImage === index && classes.hoverImageContainer}`}
  onMouseEnter={() => setHoveredImage(index)}
  onMouseLeave={() => setHoveredImage(null)}
>
  {hoveredImage === index ? (
    <Box>
  <Typography
    className={classes.hoverHeader}
    variant="h4"
    style={{ color: "#fff", }}
  >
    {image.header}
  </Typography>
  <div className={classes.hoverTextWrapper}>
    <Typography
      className={classes.hoverText} 
      variant="h5"
      style={{ color: "#fff" }}
    >
      {image.description}
    </Typography>
    <Typography className={classes.hoverLink} >
    <a href={image.link} target="_blank " style={{ textDecoration: 'underline', color: "#fff" }}>See the site</a>
    </Typography>
  </div>
</Box>
  ) : (
    <>
      <img src={image.src} alt={image.alt} />
      <Box className={classes.textBox}>
        <Typography
          style={{
            fontFamily: "Safety Gothic",
            fontSize: "18px",
            fontWeight: "bold",
          }}
          variant="h6"
        >
          {image.text}
        </Typography>
      </Box>
    </>
  )}
</Box>
          </Grid>
        ))}
      </Grid>
      </div>
    </section>
    </Container>
  );
};

export default Works;
