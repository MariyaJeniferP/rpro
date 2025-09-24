import styles from "./file3.module.css"
import { useState } from "react";


function ProductCard(props){
    const [count, setCount]=useState(0);
    const [amount, setamount]=useState('');
    const increase=()=>{
        setCount(count+100);
    };
     const decrease=()=>{   
        setCount(count-100);
    };
    const Amount=(e)=>{
        e.preventDefault();
        alert(`Your Payment is Done Rs.${count}`)
        setCount(0)
    }
     
    return(
        <div className={styles.card}>
        <img src={props.photo} className={styles.image}></img>
        <h4 className={styles.more}>Donation</h4>
        <h4><button className={styles.amount} onClick={increase}>+</button> {count}
        <button style={{marginLeft:"30px"}}onClick={decrease}>-</button>
        </h4>
        <button onClick={Amount} type="submit" style={{marginLeft:"120px", backgroundColor:"violet", height:"30px", width:"50px"}}>Pay</button>
        
    </div>
     
    )
       
    }

    export default ProductCard