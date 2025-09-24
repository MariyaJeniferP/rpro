import styles from "./file8.module.css"
import React, { useState } from 'react';

function Contact(){
      const [name, setName] = React.useState('');
      const [email, setEmail] = React.useState('');
       const [number, setNumber] = React.useState('');
        const [sub, setSubject] = React.useState('');
         const [msg, setMessage] = React.useState('');
        const Send=(e)=>{
            e.preventDefault();
            alert(`                NAME : ${name}
                EMAIL : ${email}
                PHONE : ${number}
                SUBJECT : ${sub}
                MESSAGE : ${msg}
                
                Your message is Sent `)
                setName('');
                setEmail('');
                setNumber('');
                setSubject('');
                setMessage('')
             }
    return(
        <>
        <h1 style={{textAlign:"center",marginTop:"100px", color:"orangered"}}><b>Contact</b></h1>
        <div className={styles.box}>
        <form onSubmit={Send}>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}  className={styles.name} style={{marginTop:"80px"}} ></input>
            <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}  className={styles.name2} ></input>
            <input type="text" placeholder="Number" value={number} onChange={e => setNumber(e.target.value)}  className={styles.name} ></input>
            <input type="text" placeholder="Subject" value={sub} onChange={e => setSubject(e.target.value)}  className={styles.name2} ></input>
            <input type="text" placeholder="Message" value={msg} onChange={e => setMessage(e.target.value)} className={styles.message} ></input>
            <button type="submit" className={styles.button}>Send Message</button>
        </form>
        </div>
       
        </>
    )
}


export default Contact