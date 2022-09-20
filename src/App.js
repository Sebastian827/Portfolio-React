import { makeStyles } from "@material-ui/core";
import Navbar from "../src/components/Navbar"
import About from "../src/components/About"
import Contact from "../src/components/Contact"
import MyWork from "../src/components/MyWork"
import Skills from "../src/components/Skills"




function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar/>
      <About title="About Me" id="about"/>
      <Skills title="My backend's skills" id="skills"/>
      <MyWork title="My Work" id="work"/>
      <Contact title="Get in touch" id="contact"/>
    </div>
  );
}

const useStyles = makeStyles((theme) =>({
  root: {

  }
}) )

export default App;
