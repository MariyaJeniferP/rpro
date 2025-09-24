import Carousel from 'react-bootstrap/Carousel';
import GangarooImage from "./assets/gangaroo.jpeg";
import TigerImage from "./assets/tiger.jpeg";
import ElephantImage from "./assets/Elephant.jpg";
import styles from "./file2.module.css"


function Carouselsection() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <img src={TigerImage} className={styles.image}></img>
        <Carousel.Caption>
          <h1 className={styles.heading}>
           Enjoy The Wonderful Adventure Of The Animals
          </h1>
          <h3 className={styles.zoo}>Meet the zoo</h3>
        </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item>
        <img src={ElephantImage} className={styles.image} ></img>
        <Carousel.Caption>
          <h1 className={styles.ele}>
            Enjoy The Wonderful Adventure Of The Animals
          </h1>
          <h3 className={styles.zoo}>Meet the zoo</h3>
        </Carousel.Caption>
      </Carousel.Item>

       <Carousel.Item>
      <img src={GangarooImage} className={styles.image}></img>
        <Carousel.Caption>
          <h1 className={styles.heading}>
         Enjoy The Wonderful Adventure Of The Animals
          </h1>
          <h3 className={styles.zoo}>Meet the zoo</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselsection