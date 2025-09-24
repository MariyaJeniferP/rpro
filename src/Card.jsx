import styles from "./Card.module.css"


function Cardsection(props){
    return(
       <div className={styles.card}>
        <h1>{props.head}</h1>
        <img src={props.photo} className={styles.img}></img>
           <p>{props.para}</p>
        </div> 
    )
       
    }

    export default Cardsection