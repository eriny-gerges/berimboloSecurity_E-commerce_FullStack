import SimpleSlider from '../SimpleSlider'
// import Slider from 'react-slick'
// import ProductCard from '../products/ProductCard'

function Home() {
  // var settings = {
  //   dots: false ,
  //   infinite: true,
  //   speed: 280,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,}
  return (
    <div className='container-fluid' >
      <div className='row'>
        <SimpleSlider/>
      </div>
      <div className='container'>
      <div className='row mt-4 mb-5'id='CCTV' >
         <div  className='col-12 color-main'>
         <h3 style={{textAlign:"center"}} className='m-4'>Some Of Our Prouducts</h3>
         </div>
           <div className='col-12'>
              {/* <Slider {...settings}>
                    <ProductCard {}/>
                    <ProductCard {}/>
                    <ProductCard {}/>
                    <ProductCard {}/> 
               </Slider> */}
             </div> 
         </div>
      </div>
    </div>
  )
}

export default Home