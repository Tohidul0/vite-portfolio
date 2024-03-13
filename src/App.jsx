import About from "./component/About.jsx";
import Education from "./component/Education.jsx";
import Header from "./component/Header"
import Hero from "./component/Hero.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Teckstack from "./component/Teckstack.jsx";
import Project from "./component/Project.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Education></Education>
      <Teckstack></Teckstack>
      <Project></Project>
      <Footer></Footer>
    </>
  )
}

export default App
