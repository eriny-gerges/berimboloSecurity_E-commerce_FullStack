import "./serveses.css"
import  "../../images/alarm2.jpeg" 
import im1 from "../../images/security-cameras-banner.webp"
import im2 from "../../images/door-access-control.jpg"
import im3 from "../../images/alarm.jpeg"
import im4 from "../../images/bell.jpeg"


function Serveses() {
  return (
    <div className='container-fluid row'> 
      <div  className=' m-2 col-12 color-main   '
       style={{ 
        // backgroundImage: "url(/images/alarm2.jpeg)",
        // backgroundSize: 'cover',
  
        // textShadow:"1px 1px 3px black"
         }}>

        <h1 style={{textAlign:"center"}} className='m-5'>Our Services</h1>
       
      </div>
      <div className='container p-3 m-3'>
        
      <div className='blocky row rounded  m-3 mb-5'  style={{}} >
       <div className='col-6 p-5'>
        <h3 className='mb-4' style={{color:"#223d3b" , }}> 
        Security Cameras in Egypt | Sell, Install & Support
        </h3>
        <h5>
        Discover premium security camera systems in Egypt. We offer sales, installation, and support with warranty coverage. Protect your business with expert solutions 
        </h5>
       </div>
       <div className='col-6'>
        <div className="col-12">
          <img src={im1} alt="" style={{maxHeight:"50%",maxWidth:"102%" ,}} className='rounded' />
        </div>
       </div>
      </div>
     
     
      <div className='blocky row rounded  m-3 mb-5'  style={{}} >
       <div className='col-6'>
        <div className="col-12">
          <img src={im2} alt="" style={{maxHeight:"100%", maxWidth:"100%"}} className='rounded' />
        </div>
       </div>
       <div className='col-6 p-5'>
        <h3 className='mb-4' style={{color:"#223d3b" , }}> 
        Door Access Control Systems in Egypt | Sell, Install & Support
        </h3>
        <h5>
        
        Discover premium security camera systems in Egypt. We offer sales, installation, and support with warranty coverage. Protect your business with expert solutions Enhance your security with our door access control systems in Egypt. We provide sales, installation, and support services with warranty coverage. Trusted security solutions
        </h5>
       </div>
      </div>
     
      <div className='blocky row rounded  m-3 mb-5'  style={{}} >
       <div className='col-6 p-5'>
        <h3 className='mb-4' style={{color:"#223d3b" , }}> 
        Burglar Alarm Systems in Egypt | Sell, Install & Support
        </h3>
        <h5>
        Protect your property with top-quality burglar alarm systems in Egypt. We offer sales, installation, and support with warranty. Trusted security solutions
        </h5>
       </div>
       <div className='col-6'>
        <div className='col-12'>
          <img src={im3} alt="" style={{maxHeight:"100%",maxWidth:"100%" , width:"100%"}} className='rounded' />
        </div>
       </div>
      </div>
     
      <div className='blocky row rounded  m-3 mb-5'  style={{}} >
       <div className='col-6'>
        <div className="col-12">
          <img src={im4} alt="" style={{maxHeight:"50%",maxWidth:"102%" ,width:"100%"}} className='rounded' />
        </div>
       </div>
       <div className='col-6 p-5'>
        <h3 className='mb-4' style={{color:"#223d3b" , }}> 
        Smart Bells Systems in Egypt | Sell, Install & Support
        </h3>
        <h5>
        Protect your property with top-quality burglar alarm systems in Egypt. We offer sales, installation, and support with warranty. Trusted security solutions
        </h5>
       </div>
      </div>
     
  
     </div>
    </div>
  )
}

export default Serveses