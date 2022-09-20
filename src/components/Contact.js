import {  Button, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react'
import emailjs from "emailjs-com"




const Contact = ({title, id}) => {
    const classes = useStyles();

    function sendemail(e){
      

      emailjs.sendForm('service_0wi2td9','template_dcwkkp1',e.target,'yc7PrgThzMavyK8WK').then(res=>{
        alert("ok")

      })

    }

  return (
    <div className={classes.section}>
      <div className={classes.sectioncontent} id={id}>
            <Typography variant="h3">{title}</Typography>
            <Paper className={classes.main}>
              <div className={classes.title}>
                <Typography variant="h5">CONTACT ME</Typography> 

              </div>
              <form className={classes.form} noValidate autoComplete="off" onSubmit={sendemail}>
                <TextField label="Your name" name="to_name" />
                <TextField label="Your e-mail" name="from_name" />
                <TextField label="Write a message" name="message" />
                <Button variant="contained" type='submit'>Submit</Button>

              </form>
              
            </Paper>
            

        </div>
        </div>
  )
}
const useStyles = makeStyles((theme) =>({
    section:{
        minHeight: "100vh",
        background: "#556270",
        color:"#4ECDC4",
        display:"flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      

    },
    sectioncontent:{
      maxWidth:"80vw",
      

  },
  main:{
    margintop: theme.spacing(4),
    background: "blue",
    fontSize: "1.2rem",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(4),
    "& button":{
      backgroundColor: "#fff",
      color:"blue",
      fontWeight: "1.2rem",
      margintop: theme.spacing(4),
      "& button:hover":{
        backgroundColor: "white",
        color:"black"
      }
    }
  },form:{
    display: "flex",
    flexDirection: "column",
    "& input":{
      marginBottom: theme.spacing(1)
    }

  },
  title:{
    "& h5":{
      margintop: theme.spacing(4)
    }
  }
  }) )
export default Contact