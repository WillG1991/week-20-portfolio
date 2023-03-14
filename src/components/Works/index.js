import React, { useState } from "react";
import apiarySite from "../../assets/img/worksImages/apiaryWorks.jpg";
import searchSite from "../../assets/img/worksImages/searchWorks.jpg";
import movieSite from "../../assets/img/worksImages/movieWorks.png";
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
    textDecorationColor: "rgb(4, 157, 227)"
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
  },

  hoverHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    textAlign: "left",
    fontSize: "25px",
    paddingLeft: "10px",
    paddingTop: "10px"

  },
  hoverText: {
    position: "absolute",
    top: 50,
    left: 0,
    textAlign: "left",
    fontSize: "15px",
    paddingLeft: "10px",
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
    fontSize: "20px",
    color: "white",
    paddingLeft: "10px",

  },
  hoverImageContainer: {
    backgroundColor: "rgb(4, 157, 227)",
  },
}));

const images = [
  { src: apiarySite, alt: "APIARY SITE", text: "APIARY SITE", header: "APIARY SITE", description: "E-commerce website using React that includes custom CSS styling to create a unique design. I also utilized some React Material-UI components to enhance the user experience.", link: "http://www.gehrkeapiaries.com/" },
  { src: searchSite, alt: "Search Site", text: "SEARCH & STREAM", header: "SEARCH & STREAM", description: "A website that enables users to search for a particular movie or show to see where it is currently being streamed. The site was built using two APIs, along with Node, Express, JavaScript, HTML, and CSS to create a seamless and dynamic user experience.", link: "https://willg1991.github.io/Streaming-Search/" },
  { src: dinerSite, alt: "Diner Site", text: "RESTAURANT SITE", header: "RESTAURANT SITE", description: "A web template built with React.js and Material-UI, offering a convenient and visually appealing way to create dynamic web pages that deliver a top-notch user experience.", link: "https://willg1991.github.io/SliceSociety/" },
  { src: reikiSite, alt: "REIKI SITE", text: "REIKI SITE", header: "REIKI SITE", description: "A single-page web app in React.js for a service-based website that leverages reusable components for each section of the page, while also incorporating React Material-UI displays and leverages an API to pull and display the most recent Google business reviews. The app is driven by dynamic, iterable content.", link: "https://christinaserafina.com/" },
  { src: codeSite, alt: "Code Site", text: "CODE A <BR>", header: "CODE A <BR>", description: "A social media platform allowing users to log in, post, and comment. Built from the ground upin just one week, utilizing HTML, CSS, Bulma, SQL, Insomnia and Express to create a seamless user experience.", link: "https://codeabreak.herokuapp.com/" },
  { src: eventSite, alt: "Event Site", text: "EVENT PLANNING SITE", header: "EVENT PLANNING SITE", description: "A consumer event planning site that has been designed and developed using React.js. The site features an intuitive user interface and incorporates an EmailJS contact form, allowing users to easily get in touch. Additionally, the site boasts a beautiful photo gallery with a lightbox, making it simple to showcase stunning images of past events.", link: "https://polishedeventsco.com/" },
];

const Works = () => {
  const classes = useStyles();
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleImageHover = (index) => {
    setHoveredImage(index);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

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
    <Typography className={classes.hoverLink} style={{ textDecoration: 'none', color: "#fff" }}>
    <a href={image.link} target="_blank">See More</a>
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
