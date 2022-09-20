import { Card, CardContent, CardMedia, Grid, Link,makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import mockData from "../MockData"

const MyWork = ({title, id}) => {
    const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.sectioncontent} id={id}>
            <Typography variant="h3">{title}</Typography>
            <Grid container className={classes.grid}>
              {
                mockData.map(({title,image,link},index)=>(
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia image={image} className={classes.image} title="image"/>
                      <CardContent>
                        <Link href={link} color="primary" target="_blank" rel="noopener noreferrer" >
                          {title}
                        </Link>
                      </CardContent>


                    </Card>
                    </Grid>
                ))
              }
            </Grid>

        </div>
    </div>
  )
}
const useStyles = makeStyles((theme) =>({
    section:{
        minHeight: "100vh",
        background: "#4ECDC4",
        color:"#556270"

    },
    sectioncontent:{
      maxWidth:"80vw",
      margin: "0 auto",
      padding: theme.spacing(5)

  },
  grid:{
    marginTop: theme.spacing(10),

  },
  card:{
    maxWidth:345,
    minHeight: 275,
    margin: theme.spacing(3)
  },
  image:{
    height: 0,
    paddingTop: '56.25%'
  }
  }) )
export default MyWork