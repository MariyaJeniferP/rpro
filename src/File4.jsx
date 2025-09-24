import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LionImage from './assets/lion.jpeg'
import styles from "./file4.module.css"

function Aboutsection() {
  return (
    <Container>
      <Row>
        <Col><img src={LionImage} style={{height:"600px", width:"650px",paddingLeft:"200px",paddingRight:"-800px", topRight:"-50px",marginTop:"60px" , marginLeft:"-200px"}} className={styles.img}></img></Col>
        <Col><h1 className={styles.about}><b>ABOUT US</b></h1></Col>
        <Col>
        <h1 style={{marginTop:"60px", fontSize:"50px", marginLeft:"-100px"}}>You Can Find All The Most Popular Species</h1>
        <p style={{fontSize:"19px", marginLeft:"-100px" }}>Lion is a large wild animal of cat family and it is one of the strongest animals of jungle.
          Lion is called as “King of Jungle” because of its huge size and hunting capacity.
          Lion has a strong body with four legs and a tail with very strong paws.
          Lion’s neck is covered with long hair which is called as “mane”.
          Lion is a carnivore animal and eats flesh by hunting other animals.
          Lion produces “Roaring” sound which can be heard up to 8 kilometre distance.
          Lion sleeps during daytime and hunts in the night.
          The average life of lions is 10 to 14 years in jungle but when they are kept in the zoo, they live up to 20 years.
          The female lion is called “Lioness” and it gives birth to its offspring called as “Cubs”.
          On an average the lioness gives birth to 2-3 cubs but only one remains alive.</p></Col>
      </Row>
      
    </Container>
  );
}

export default Aboutsection