
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./file2.module.css"
import { FaPaw } from 'react-icons/fa';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {Routes, Route, NavLink} from "react-router-dom"
import Carouselsection from "./File2"
import Listofcard from "./File31"
import Aboutsection from "./File4"
import Gallerysection from "./File5"
import Price from "./File7"
import Contact from "./File8"
import React from 'react';
import Img1 from "./assets/animals.jpg"


function Navsection() {
   
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [showForm, setShowForm] = React.useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("You are Logged in");
    setShowForm(false);
  };
   const formstyle = {
    backgroundImage: `url(${Img1})`,
    backgroundSize: 'cover',
    height:'250px',
    backgroundPosition: 'center', 
    
  };
  return (
    <div>
      
    <Navbar expand="lg" sticky="top" style={{ backgroundColor:"khaki",height:"100px", width:"100%"}}>
      <Container fluid>
        <Navbar.Brand style={{fontSize:"50px", fontFamily:"georgia"}}><FaPaw style={{color:"orangered"}}/>&nbsp;ZOO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{fontFamily:"timesnewroman"}} >
          
            <NavLink to="/home" style={{paddingLeft:"250px", }} className={styles.link}><b>Home</b></NavLink>
            <NavLink to="/about" style={{paddingLeft:"25px" }} className={styles.link}><b>About Us</b></NavLink>
            <NavLink to="/animal" style={{ paddingLeft:"25px"}} className={styles.link}><b>Animals</b></NavLink>
            <NavLink to="/gallery" style={{ paddingLeft:"25px"}} className={styles.link}><b>Gallery</b></NavLink>
            <NavLink to="/pricing" style={{ paddingLeft:"25px"}} className={styles.link}><b>Pricing</b></NavLink>
            <NavLink to="/contact" style={{ paddingLeft:"25px"}} className={styles.link}><b>Contact</b></NavLink>
           
          <div style={{ position: "relative", display: "inline-block" }}>
      
        <h1 style={{color:"orangered", paddingLeft:"350px", cursor:"pointer"}} onClick={() => setShowForm(!showForm)}><PersonOutlineIcon /></h1>
    </div>
    {showForm && (
    <div style={{margin:"400px 20px 30px -300px", height:"250px", width:"290px", border:"2px solid black", backgroundColor:"white"}}>
    <form style={formstyle}>
      <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} style={{ width: "80%", margin: "30px" }} />
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} style={{ width: "80%", margin: "30px" }} />
      <button onClick={handleSubmit} type="submit" style={{backgroundColor: "orangered", marginTop: "20px", marginLeft:"110px"}}>
        Login
      </button>
    </form>
  </div>
)}
</Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
    <Routes>
          <Route path="/home" element={<Carouselsection/>}></Route>
          <Route path="/about" element={<Aboutsection/>}></Route>
          <Route path="/animal" element={<Listofcard/>}></Route>
          <Route path="/gallery" element={<Gallerysection/>}></Route>
          <Route path="/pricing" element={<Price/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
        </div>
        </div>
        
  );
}

export default Navsection;
