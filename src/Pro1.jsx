import styles from "./pro.module.css"


function Project(){
    return(
        <div className={styles.pro1}>
        <h1 className={styles.size}>RR Hotel</h1><br></br>
        <ol type="a">
           
            <h5><li>Breakfast</li></h5>
            <ul type="disc">
                <li>Poori</li>
                <li>Dosa</li>
                <li>Pongal</li>
                <li>Idly</li>
            </ul><br></br>
            <h5><li>Lunch</li></h5>
            <ul type="square">
                <li>Biriyani</li>
                <li>Meals</li>
                <li>Fried Rice</li>
                <li>Curd Rice</li>
            </ul><br></br>
            <h5><li>Dinner</li></h5>
            <ul type="circle">
                <li>Chappathi</li>
                <li>Parotta</li>
                <li>Onion Dosa</li>
                <li>Idly</li>
            </ul><br></br>
        </ol>

        </div>
    )
}

export default Project