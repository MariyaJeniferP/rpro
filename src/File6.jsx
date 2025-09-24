import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./file6.module.css"
import Img1 from "./assets/redpanda.jpg"
import Img2 from "./assets/parrot2.jpg"
import  { useState } from "react";

function Floatsection() {
 const [showVideo, setShowVideo] = useState(false);
  return (
    <Container>
      <Row>
        <Col><img src={Img2} style={{height:"400px", width:"300px", marginTop:"100px"}}></img></Col>
        <Col><p style={{marginTop:"50px", color:"red", fontSize:"50px",marginLeft:"-300px"}}><b>Stay With Pets</b></p>
        <p style={{fontSize:"20px", marginLeft:"-300px"}} className={styles.para}>A zoo is a place where many animals, especially the wild ones, live in enclosed boundaries.
            People with families love to visit the zoo to see the animals.
            The zoo is a short name for ‘Zoological Garden’ or ‘Zoological Park’.
            The zoological garden is associated with the term ‘zoology’ which means the study of the animals.
            ‘Animal Safari’ is one of the most famous activities where visitors can drive inside and can watch and feed the animals.</p>
           <button className={styles.see} onClick={() => setShowVideo(true)}>
            See Attraction
          </button>
          {showVideo && (
            <video className={styles.video} controls>
              <source src="https://videocdn.cdnpk.net/videos/fba0f802-ef67-4ca3-8d5c-d240a2c051fd/horizontal/previews/watermarked/small.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          </Col>
        <Col><img src={Img1} className={styles.img} style={{height:"500px", width:"600px",paddingRight:"150px",topRight:"-20px",marginTop:"-500px" , marginLeft:"790px"}} ></img></Col>
      </Row>
    </Container>
  );
}

export default Floatsection;