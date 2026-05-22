import "./contact.css"

function Contact() {
  return (
    <div>
       <div  className='color-main'>
        <h3 style={{textAlign:"center"}} className='m-4'>Send Massage</h3>
      </div>
     <div className='container'>
     <div className='col-12 p-5   rounded-5 text-center  ' style={{maxWidth:"100%" ,maxHeight:"50%" ,height:"550px"  ,backgroundColor:"#F6FBF9"}} >
      <div>
        <h5>Send Massage</h5>
        <h6 style={{fontWeight:"lighter"}} className='m-3 '>Send a message or your feedback !</h6>
      </div>
      <div className='container row'>
       <div className=' ' >
        <form action="" method=''className='form-group  row' > 
          <div className='col-6'>
            <div className='col-12'>
                <input required type="text"     placeholder='Name'   name=''  className='form-item form-control  '  /> 
            </div>
            <div className='col-12'>
                <input required type="email"    placeholder='Email'  name=''  className='form-item form-control '  />
            </div>
            <div className='col-12'>
                <input required type="number"   placeholder='Phone'  name=''  className='form-item form-control '  />
            </div>
          </div>
          <div className='col-6'>
             <div className='col-12'>
                 <input type="text"     placeholder='County' name=''  className='form-item form-control '  />
             </div> 
             <div className=' col-12'>
                <textarea required name="" type="text" id="" height="100%" className='form-item form-control'>Send Massage</textarea>
              </div>
          </div>
       
      
      
      
      
        <br />
       <div className="col-12 ">
       <input type="submit" className='col-6 rounded p-3' value="Send"  style={{
             backgroundColor:"#2b3e3c",
             color:"#F6FBF9",
             fontSize:"larger",
             fontWeight:"bold"


       }}/>
       </div>
        </form>
       </div>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Contact