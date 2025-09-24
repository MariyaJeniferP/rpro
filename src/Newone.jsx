import Cardsection from "./Card"
import Img1 from "./assets/panda.jpeg"
import Img2 from "./assets/gangaroo.jpeg"

function Listofcard(){
const Listitems=[
            {
                head:"HTML",
                photo:Img1,
                para:"HyperText Markup Language"
            },
            {
                head:"CSS",
                photo:Img2,
                para:"CaseCading Style Sheet"
            },
            {
                head:"JS",
                photo:Img1,
                para:"JavaScript"
            }
        ]
        
        const courselist=Listitems.map(
          (course)=>
            <Cardsection head={course.head} photo={course.photo} para={course.para}></Cardsection>
    )
    return(
        <>
        {courselist}
        </>
        
    )
}

export default Listofcard