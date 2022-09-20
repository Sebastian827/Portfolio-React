import { makeStyles, Paper, Typography } from "@material-ui/core"
import {Timeline, TimelineItem, TimelineOppositeContent,TimelineSeparator, TimelineConnector,TimelineContent} from "@material-ui/lab"
import React from 'react'
import Spring from '../images/spri.png'
import Java from '../images/java.png'
import Python from '../images/python.png'
import Django from '../images/django.png'
import JavaScript from '../images/JavaScript-logo.png'
import StarRating from "./StarRating"

const Technologies = () => {
    const classes = useStyles();

    const skills =[
        {
            src:Python,
            title: "Python",
            stars: 4,
            year: 2020

        },
        {
            src:Java,
            title: "Java",
            stars: 4,
            year: 2020

        },
        {
            src:Django,
            title: "Django",
            stars: 3,
            year: 2020

        },
        {
            src:Spring,
            title: "Spring Boot",
            stars: 3,
            year: 2021
        },
        {
            src:Spring,
            title: "Node",
            stars: 3,
            year: 2021
        },
        {
            src:JavaScript,
            title: "JavaScript",
            stars: 3,
            year: 2022

        },
    ]
  return (
    
    <>
    <Timeline align="left">
        {
            skills.map(({src,title,stars,year},index)=>(
                <TimelineItem key={index}>
                    <TimelineOppositeContent>
                        <Typography variant="h6" color="textSecondary">{year}</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                       
                        <img src={src} alt={title} className={classes.src}/>

                        

                   <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                            {title}
                            </Typography>
                            <StarRating stars={stars}/>
                            
                        </Paper>
                    </TimelineContent>

                </TimelineItem>
            ))
        }

    </Timeline>
    </>
  )
}
const useStyles = makeStyles((theme) =>({
    src:{
        width:"70px",
        height:"70px",
        
    },
    paper:{
        padding: "10px 20px",
        maxWidth: "250px"
    }
  }) )

export default Technologies