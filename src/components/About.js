import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import imageAb from "../images/rana.jpg"
import TypeWtriterEffect from "react-typewriter-effect"
import pdf from "../images/Curriculum.pdf"
const About = ({ title, id }) => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Card className={classes.card}>
          <CardMedia image={imageAb} className={classes.cardmedia} />
          <CardContent className={classes.CardContent}>
            <TypeWtriterEffect
              text="Hi, I am Sebastián Ochoa"
              textStyle={{ fontSize: "2rem", fontWeight: "700px", color: "blue" }}
              startDelay={100}
              cursorColor="black"
              typeSpeed={100}

            />
            <TypeWtriterEffect
              text="And I am a Backend Developer"
              textStyle={{ fontSize: "2rem", fontWeight: "700px" }}
              startDelay={2500}
              cursorColor="black"
              typeSpeed={100}

            />
          </CardContent>
          <CardActions>
           <Button variant="contained" className={classes.pdfButton}>
              <a href={pdf} download>
                Download CV
              </a>

            </Button>
          </CardActions>


        </Card>

      </div>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    background: "#4ECDC4",
    color: "#556270"

  },
  sectioncontent: {
    maxWidth: "80vw",
    margin: "0 auto",

  },
  card: {
    height: "70vh",
    display: "flex",
    marginTop: theme.spacing(6),
    position: "relative",


  },
  cardmedia: {
    width: "250px",
    height: "auto"
  },
  pdfButton:{
    position: "absolute",
    bottom: "5rem",
    right: "4rem",
    [theme.breakpoints.down("sm")]:{
      bottom: 10,
      right: "1rem"
    },
    backgroundColor: "blue",
    padding: theme.spacing(3),
    "&:hover":{
      backgroundcolor:"#fff"
    },
    "& a":{
      color:"#fff",
      textDecoration: "none",
      fontWeight: 900,
    },
    "& a:hover":{
      color: "blue"
    }

  }
}))

export default About
