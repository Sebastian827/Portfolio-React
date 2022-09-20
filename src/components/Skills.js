import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Technologies from './Technologies';

const Skills = ({title, id}) => {
    const classes = useStyles();

  return (
    <div className={classes.section}>
       <Typography variant="h3">{title}</Typography>
      <div className={classes.sectioncontent} id={id}>
           
            <Technologies/>

        </div>
    </div>
  )
}
const useStyles = makeStyles((theme) =>({
    section:{
        minHeight: "100vh",
        backgroundcolor: "white",
        color:"#4ECDC4"
        

    },
    sectioncontent:{
      maxWidth:"80vw",
      margin: "0 auto",
      marginTop: theme.spacing(5)
      

  }
  }) )

export default Skills