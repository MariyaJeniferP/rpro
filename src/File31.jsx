import Cardsection from "./File3"
import DeerImage from "./assets/deer.jpeg";
import PandaImage from "./assets/panda.jpeg";
import RhinoImage from "./assets/rhino.jpeg";
import CheetahImage from "./assets/Cheetah.jpeg";


function Listofcard(){
  
const Listitems2=[
            {
                photo:DeerImage,
            },
            {
                photo:PandaImage,
            },
            {
                photo:RhinoImage,
            },
            {
                photo:CheetahImage,
            }
        ]
        
        const animallist=Listitems2.map(
          (animal)=>
            <Cardsection head={animal.head} photo={animal.photo} para={animal.para}></Cardsection>
    )
    return(
        <>
        {animallist}
        </>
        
    )
}

export default Listofcard