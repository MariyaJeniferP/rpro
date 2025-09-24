import Carousel from 'react-bootstrap/Carousel';
import Img1 from "./assets/lizards.jpg"
import Img2 from "./assets/chimpanzee.jpg"
import Img3 from "./assets/zebra.jpg"
import Img4 from "./assets/parrot.jpg"
import Img5 from "./assets/Wlion.jpeg"
import Img6 from "./assets/crocodile.jpg"
import Img7 from "./assets/giraff.jpeg"



function Gallerysection() {
  return (
    <>
    <h1 style={{color:"crimson", fontSize:"50px", marginLeft:"620px", marginTop:"50px", fontFamily:"georgia"}}><b>GALLERY</b></h1>
    <div style={{height:"650px", width:"90%", marginLeft:"70px", backgroundColor:"lavender", marginTop:"30px"}}>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img style={{height:"500px", width:"700px", borderRadius:"10%",margin:" 50px 10px 100px 320px"}}
          className="d-block "
          src={Img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>LIZARD</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"500px", width:"700px",borderRadius:"10%", margin:" 50px 10px 100px 320px"}}
          className="d-block w-50"
          src={Img2}
        />
        <Carousel.Caption>
          <h2>CHIMPANZEE</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"500px", width:"100px",borderRadius:"10%", margin:" 50px 10px 100px 320px"}}
          className="d-block w-50"
          src={Img3}
        />
        <Carousel.Caption>
          <h2>ZEBRA</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"500px", width:"100px",borderRadius:"10%", margin:" 50px 10px 100px 320px"}}
          className="d-block w-50"
          src={Img4}
        />
        <Carousel.Caption>
          <h2>PARROT</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"500px", width:"100px",borderRadius:"10%", margin:" 50px 10px 100px 320px"}}
          className="d-block w-50"
          src={Img5}
        />
        <Carousel.Caption>
          <h2>WHITE LION</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"500px", width:"100px",borderRadius:"10%", margin:" 50px 10px 100px 320px"}}
          className="d-block w-50"
          src={Img6}
        />
        <Carousel.Caption>
          <h2>CROCODILE</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"500px", width:"100px",borderRadius:"10%", margin:" 50px 10px 100px 320px"}}
          className="d-block w-50"
          src={Img7}
        />
        <Carousel.Caption>
          <h2>GIRAFFE</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default Gallerysection;