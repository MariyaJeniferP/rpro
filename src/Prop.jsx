import styles from "./Prop.module.css"
import Image from "./assets/tiger.jpeg"


function Property({image=Image, text, para="this is nothing"}){
    return(
        <div className={styles.card}>
            <img src={Image} className={styles.card}></img>
            <h2>{text}</h2>
            <p>{para}</p>
        </div>
    )
}
export default Property