import React, { useState } from "react";
import apiarySite from "../../assets/img/worksImages/apiaryWorks.jpg";
import searchSite from "../../assets/img/worksImages/searchWorks.png";
import movieSite from "../../assets/img/worksImages/movieWorks.png";
import codeSite from "../../assets/img/worksImages/codeWorks.png";
import reikiSite from "../../assets/img/worksImages/reikiWorks.jpg";
import dinerSite from "../../assets/img/worksImages/dinerWorks.png";
import eventSite from "../../assets/img/worksImages/eventWorks.png";
import paperBack from "../../assets/img/worksImages/paper.png"
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  imageContainer: {
    position: "relative",
    margin: theme.spacing(1),
    height: 0,
    paddingTop: "56.25%", // 16:9 aspect ratio
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
    bottom: "25%",
    left: 0,
    right: 0,
    height: "50%",
    backgroundImage: `url(${paperBack})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "80%",
    backgroundPosition: "center",
    backgroundOrigin: "content-box",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  hoverImageContainer: {
    position: "relative",
    margin: theme.spacing(1),
    height: 0,
    paddingTop: "56.25%", // 16:9 aspect ratio
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "purple",
      opacity: 0.8,
      zIndex: 1,
    },
    "& > *": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
      textAlign: "center",
      color: "#fff",
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
  hoverHeader: {
    position: "absolute",
    top: "10px",
    left: "10px",
    textAlign: "left",
  },
  hoverText: {
    position: "absolute",
    textAlign: "left",
  }
}));

const images = [
  { src: apiarySite, alt: "Apiary Site", text: "Apiary Site", header: "RDSFDAFDSAFDSF", description: "Apiary Site Description" },
  { src: searchSite, alt: "Search Site", text: "This is the Search Site", header: "Search Site Header", description: "Search Site Description" },
  { src: dinerSite, alt: "Diner Site", text: "This is the Diner Site", header: "Diner Site Header", description: "Diner Site Description" },
  { src: reikiSite, alt: "REIKI SITE", text: "REIKI SITE", header: "REIKI SITE Header", description: "REIKI SITE Description" },
  { src: codeSite, alt: "Code Site", text: "This is the Code Site", header: "Code Site Header", description: "Code Site Description" },
  { src: eventSite, alt: "Event Site", text: "This is the Event Site", header: "Event Site Header", description: "Event Site Description" },
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
    <section className={classes.root}>
      <Typography variant="h4" className={classes.header}>
        Works
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
    <Box className={classes.hoverImageContainer}>
   <Typography
  className={classes.hoverHeader}
  variant="h4"
  style={{ color: "#fff" }}
>
  {image.header}
</Typography>
<Typography
  className={classes.hoverText}
  variant="h5"
  style={{ color: "#fff" }}
>
  {image.description}
</Typography>
    </Box>
  ) : (
    <>
      <img src={image.src} alt={image.alt} />
      <Box className={classes.textBox}>
        <Typography
          style={{
            fontFamily: "Safety Gothic",
            fontSize: "35px",
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
  );
};

export default Works;
