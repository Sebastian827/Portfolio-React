import { AppBar, Drawer, IconButton, List, ListItem, ListItemIcon, makeStyles, Toolbar } from '@material-ui/core'
import React, { useState } from 'react'
import logo from "../images/logo.png"
import {Link, animateScroll as scroll} from "react-scroll"
import MenuIcon from "@material-ui/icons/Menu"
import CancelIcon from "@material-ui/icons/Cancel"
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AddTaskIcon from '@material-ui/icons/Flag';
import WorkHistoryIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';



const Navbar = () => {
    const classes = useStyles();
    const [open, setopen]=useState(false)

    const links =[
        {
            id:"about",
            text: "About Me",
            icon: <AssignmentIndIcon fontSize='large' className={classes.iconcolor}/>
            
        },
        {
            id: "skills",
            text:"About ",
            icon: <AddTaskIcon fontSize='large'className={classes.iconcolor}/>
        },
        {
            id:"work",
            text:"My projects",
            icon:<WorkHistoryIcon fontSize='large' className={classes.iconcolor}/>
        },
        {
            id:"contact",
            text:"My contact",
            icon:<ContactMailIcon fontSize='large' className={classes.iconcolor}/>
        }
    
    ]
    const scrollToTop = () => {
        scroll.scrollToTop()
    }


  return (
    <>
        <AppBar position="sticky" className={classes.main}>
            <Toolbar className={classes.toolbar}>
                <img src={logo} className={classes.logo} alt="Logo" onClick={scrollToTop}/> 
                <List className={classes.menu}>
                    {
                        links.map(({id,text}, index) => (
                            <Link key={index} to={id} spy={true} activeClass="active" smooth={true} duration={500} offset={-70}>{text}</Link>
                        ))
                    }
                </List>
                <IconButton edge="end" className={classes.menubutton} onClick={()=>setopen(!open)}>
                <MenuIcon fontSize="large" ></MenuIcon>
                </IconButton>

            </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={open} onClose={()=> setopen(false)} >
            <IconButton  onClick={()=> setopen(false)} className={classes.cancelicon}>

            
            <CancelIcon fontSize='large'/>
            </IconButton >
            {
                 links.map(({id,text, icon}, index) => (
                    <Link key={index} className={classes.sidebar} to={id} spy={true} activeClass="active" smooth={true} duration={500} offset={-70}>
                        <ListItem component="h5">
                            <span>
                                <ListItemIcon>
                                    {icon}
                                </ListItemIcon>
                            </span>{text}
                            
                            </ListItem></Link>
                ))
            }

        </Drawer>

        </>

  )
}
//falta logo
//faltan iconos

const useStyles = makeStyles((theme) =>({
    logo:{
        height: "1.5rem",
        objectFit: "contain",
        "&:hover": {
            cursor: "pointer"
        }

    },
    main:{
        background:"#fff",
        top: 0,
        right: 0,
        zIndex: 999,

    },
    toolbar:{
        display: "flex",
        justifyContent: "flex-start",
        alignContent:" center"
    },
    menu:{
        [theme.breakpoints.down("sm")]:{
            display:"none"
        },
      "& a": {
        color: "#333",
        fontSize: "1.4rem",
        fontweight: "bold",
        marginLeft: theme.spacing(3)
      },
      "& a:hover": {
        cursor: "pointer",
        color: "blue",
        borderBottom: "3px solid blue"
      }
    },
    menubutton: {
        display: "none",
        [theme.breakpoints.down("sm")]:{
            display: "block",
            color: "blue",
            position: "absolute",
            top: 0,
            right: 10,
        }
    },
    sidebar:{
        width:"40vw",
        [theme.breakpoints.down("sm")]:{
            width: "60vw"
        },
        "& h5":{
            margin: theme.spacing(10,0,0,4),
            fontSize: "1.4rm",
            color: "#333",
            fontweight: "bold"
        },
        "& h5:hover": {
            color:" blue",
            cursor:"pointer"
        }

    },
    cancelicon:{
        color:"blue",
        position:"absolute",
        right: 10,
        
    },
    iconcolor:{
        color:"#89fffd"
    }
  }) )
export default Navbar