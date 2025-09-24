import styles from "./file7.module.css"
import Img1 from "./assets/ind.jpg"
import Img2 from "./assets/stu.jpg"
import Img3 from "./assets/trip.jpg"
import QrCodeIcon from '@mui/icons-material/QrCode'
import { FaCameraRetro, FaChalkboardTeacher, FaMugHot,  FaBook ,FaMap, FaUtensils, FaMicrophone, FaTree, FaBus } from "react-icons/fa" ;

function Price(){
    const plan=(e)=>{
        e.preventDefault();
        alert(`Thank you for choosing this plan !`)
    }
    return(
        <>
        <h1 style={{margin:"90px 30px 20px 660px", color:"orangered"}}><b>PRICING</b></h1>
        <div className={styles.card}>
            <img src={Img2} className={styles.img}></img>
            <p style={{marginTop:"-170px",marginLeft:"30px", fontSize:"50px"}}>< QrCodeIcon/></p>
            <p style={{marginLeft:"8px", marginTop:"-20px"}}><b>Scan Me!</b></p>
            <h3 style={{paddingLeft:"280px" ,marginTop:"-80px"}}><b>₹ 10</b></h3>
            <h3 style={{paddingLeft:"120px", marginTop:"80px", color:"black", fontFamily:"timesnewroman"}}><b>Student</b></h3>
            <p style={{marginTop:"20px", marginLeft:"20px"}}>&nbsp;&nbsp;<FaChalkboardTeacher style={{color:"orangered"}}/>&nbsp;  &nbsp;Includes guided educational tour</p>
            <p>&nbsp;&nbsp;<FaBook style={{color:"orangered", marginLeft:"20px"}}/>&nbsp;&nbsp;Free access to study materials or exhibits</p>
            <p>&nbsp;&nbsp;<FaUtensils style={{color:"orangered", marginLeft:"20px"}}/>&nbsp;&nbsp;Complimentary snack pack</p>
            <button type="submit" onClick={plan} className={styles.plan}>Choose Plan</button>
        </div>
        <div className={styles.card}>
            <img src={Img1} className={styles.img}></img>
            <p style={{marginTop:"-170px",marginLeft:"30px", fontSize:"50px"}}>< QrCodeIcon/></p>
            <p style={{marginLeft:"8px", marginTop:"-20px"}}><b>Scan Me!</b></p>
            <h3 style={{paddingLeft:"280px" ,marginTop:"-80px"}}><b>₹ 20</b></h3>
            <h3 style={{paddingLeft:"110px", marginTop:"80px", color:"black", fontFamily:"timesnewroman"}}><b>Individual</b></h3>
            <p style={{marginTop:"20px"}}>&nbsp;&nbsp;<FaMap style={{color:"orangered", marginLeft:"50px"}}/>&nbsp;  &nbsp;Self-guided map included</p>
            <p>&nbsp;&nbsp;<FaCameraRetro style={{color:"orangered", marginLeft:"50px"}}/>&nbsp;&nbsp;Photo booth access</p>
            <p>&nbsp;&nbsp;<FaMugHot style={{color:"orangered", marginLeft:"50px"}}/>&nbsp;&nbsp;Discount at on-site cafe</p>
            <button type="submit" onClick={plan} className={styles.plan}>Choose Plan</button>
        </div>
        <div className={styles.card}>
            <img src={Img3} className={styles.img}></img>
             <p style={{marginTop:"-170px",marginLeft:"30px", fontSize:"50px"}}>< QrCodeIcon/></p>
            <p style={{marginLeft:"8px", marginTop:"-20px"}}><b>Scan Me!</b></p>
            <h3 style={{paddingLeft:"280px" ,marginTop:"-80px"}}><b>₹ 30</b></h3>
            <h3 style={{paddingLeft:"155px", marginTop:"80px", color:"black", fontFamily:"timesnewroman"}}><b>Trip</b></h3>
            <p style={{marginTop:"20px"}}>&nbsp;&nbsp;<FaBus style={{color:"orangered", marginLeft:"50px"}}/>&nbsp;  &nbsp;Group transport available</p>
            <p>&nbsp;&nbsp;<FaMicrophone style={{color:"orangered", marginLeft:"50px"}}/>&nbsp;&nbsp;Live guide for groups</p>
            <p>&nbsp;&nbsp;<FaTree style={{color:"orangered", marginLeft:"50px"}}/>&nbsp;&nbsp;Picnic area reservation included</p>
           <button type="submit" onClick={plan} className={styles.plan}>Choose Plan</button>
        </div>
        </>
    )
}

export default Price