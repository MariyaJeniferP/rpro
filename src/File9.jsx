import styles from "./file9.module.css"
import { FaRegClock  } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPaw} from 'react-icons/fa';
import React, { useState } from 'react';



function Footer(){
     const [email, setEmail] = React.useState('');
     const Sub=(e)=>{
        e.preventDefault();
        alert(`You are subscribed our channel with this email: ${email}`);
        setEmail('')
    }
    return(
        <>
        <div className={styles.box}>
        <div>
        <h2 className={styles.space} style={{color:"orangered"}}>< FaPaw/>&nbsp;ZOO</h2>
        <h5 className={styles.space} style={{paddingTop:"30px"}}><FaRegClock className={styles.icon} />&nbsp;Mon - Fri</h5>
        <h5 className={styles.space} style={{paddingTop:"30px"}}>&nbsp; 7am to 10pm</h5>
        </div>
        <div>
            <h2 className={styles.space} style={{color:"orangered"}}>Quick Links</h2>
            <h5 style={{paddingTop:"30px", paddingLeft:"200px"}}>-&nbsp;Home</h5>
            <h5 style={{paddingTop:"30px", paddingLeft:"200px"}}>-&nbsp;About Us</h5>
            <h5 style={{paddingTop:"30px", paddingLeft:"200px"}}>-&nbsp;Gallery</h5>
            <h5 style={{paddingTop:"30px", paddingLeft:"200px"}}>-&nbsp;Pricing</h5>
        </div>
         <div>
            <h2 className={styles.space} style={{color:"orangered"}}>Contact Info</h2>
            <h5 className={styles.space} style={{paddingTop:"30px"}}><FaPhone className={styles.icon} />&nbsp;1200-121-3721</h5>
            <h5 className={styles.space} style={{paddingTop:"30px"}}><FaPhone className={styles.icon} />&nbsp;+91 875 439-2066</h5>
            <h5 className={styles.space} style={{paddingTop:"30px"}}><FaEnvelope className={styles.icon} />&nbsp;zoo567@gmail.com</h5>
            <h5 className={styles.space} style={{paddingTop:"30px"}}><FaMapMarkerAlt className={styles.icon} />&nbsp;Chennai, Tamilnadu</h5>

        </div>
         <div>
            <h2 className={styles.space} style={{color:"orangered", paddingLeft:"180px"}}>NewsLetter</h2>
            <h5 className={styles.space} style={{paddingTop:"30px"}}>Subscribe For Latest Updates</h5>
            <h6><input type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} className={styles.mail}></input></h6>
            <button onClick={Sub} type="submit" className={styles.button}> Subscribe</button>
            <h4 style={{paddingLeft:"220px"}}><FaFacebook/>&nbsp;<FaTwitter/>&nbsp;<FaInstagram/>&nbsp;<FaLinkedin/></h4>
        </div>
     </div>
        </>
    )
}

export default Footer