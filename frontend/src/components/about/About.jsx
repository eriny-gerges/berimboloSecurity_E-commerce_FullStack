import "./about.css"
import { HiMiniUserCircle } from "react-icons/hi2";
function About() {
  return (
    <div className='contanier'> 
      <div  className='color-main'>
        <h1 style={{textAlign:"center"}}>Berimbolo</h1>
        <h3 style={{textAlign:"center"}}>Security</h3>
      </div>
      <div className=' row justify-content-around m-4 mt-5'> 

        <div className='owner col-3 p-1' >
          <div className='icon col-12 d-flex justify-content-center color-2 m-0 p-2'style={{height:"160px"}} ><HiMiniUserCircle style={{width:"150px",height:"150px"}}/></div>
          <div className='text-center color-main  pb-1' >
          <h4>{"owner1's Name"}</h4>
          </div>
          <div className='info  px-3' >
          <p style={{backgroundColor:"#DBFFFF", lineHeight:"15px"}} className='p-3 rounded-5 text-center fw-bold'>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Voluptatibus aut tempora minus id.Lorem ipsum dolor, sit amet consectetur adipisicing elit .Lorem ipsum dolor, sit amet consectetur adipisicing elit </p> </div>
        </div>
        <div className='owner col-3 p-1' >
          <div className='icon col-12 d-flex justify-content-center color-2 m-0 p-2'style={{height:"160px"}} ><HiMiniUserCircle style={{width:"150px",height:"150px"}}/></div>
          <div className='text-center color-main  pb-1' >
          <h4>{"owner2's Name"}</h4>
          </div>
          <div className='info  px-3' >
          <p style={{backgroundColor:"#DBFFFF", lineHeight:"15px"}} className='p-3 rounded-5 text-center fw-bold'>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Voluptatibus aut tempora minus id.Lorem ipsum dolor, sit amet consectetur adipisicing elit .Lorem ipsum dolor, sit amet consectetur adipisicing elit </p> </div>
        </div>
        <div className='owner col-3 p-1' >
          <div className='icon col-12 d-flex justify-content-center color-2 m-0 p-2'style={{height:"160px"}} ><HiMiniUserCircle style={{width:"150px",height:"150px"}}/></div>
          <div className='text-center color-main  pb-1' >
          <h4>{"owner3's Name"}</h4>
          </div>
          <div className='info  px-3' >
          <p style={{backgroundColor:"#DBFFFF", lineHeight:"15px"}} className='p-3 rounded-5 text-center fw-bold'>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Voluptatibus aut tempora minus id.Lorem ipsum dolor, sit amet consectetur adipisicing elit .Lorem ipsum dolor, sit amet consectetur adipisicing elit </p> </div>
        </div>
      </div>
      <div  className='color-main  '>
        <h3 style={{textAlign:"center"}} className='m-5'>{"owner's info"}</h3>
      </div>
      <div className="feedback container-fluid row  " > 
      <div  className='col-6 color-main' style={{margin:"auto", } }>
        <h1 style={{textAlign:"center" ,fontWeight:"bolder"}} >Berimbolo</h1>
        <h3 style={{textAlign:"center"}}>Security</h3>
      </div>
      <div className='col-6 hist p-5   rounded-5 text-center  ' style={{maxWidth:"35%" ,maxHeight:"600px" ,height:"550px",marginRight:"100px" }} >
      <p style={{overflowY:"scroll" , textWrap:"wrap",maxWidth:"100%" ,maxHeight:"100%" }}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt ex sequi quo quidem,
       explicabo magni blanditiis quod! Accusantium nemo repudiandae quos sequi consectetur ipsam voluptatem officia impedit officiis maxime quidem dicta quisquam veniam,
        delectus aliquid provident, maiores aspernatur doloremque eligendi iure sapiente adipisci nisi placeat. Aspernatur iste id corrupti dolores, 
        ab assumenda voluptas nesciunt veritatis culpa aperiam consequatur quia explicabo et.
         Architecto recusandae quasi quos repellat mollitia ad illo expedita necessitatibus,
          ullam ducimus odit delectus sed velit tempora dolore doloribus, consequatur debitis facere hic nostrum. Veritatis facilis,
           asperiores maxime cupiditate maiores accusantium corporis, qui architecto voluptas deleniti cum nisi!
        </p>
      </div>
      </div>
      <div  className='color-main'>
        <h3 style={{textAlign:"center"}} className='m-5'>Feedback & History</h3>
      </div>
    </div>
  )
}

export default About