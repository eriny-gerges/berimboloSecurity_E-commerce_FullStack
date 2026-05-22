import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import "./Productcard.css"

function Product() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
      setProduct(response.data.data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container row m-5"> 


    <div className='col-6 p-4'>
      <div className='col-12'>
        <h1 className='color-main'>{product.name}</h1>
      </div>
      <div className='col-12 mb-4'>
        <h4 className='color-2'>{product.price}$</h4>
        </div>
        <div className='col-12 mb-4'>
          <h5 style={{fontWeight:"bolder"}} className='text-light' >Description</h5>
          <p className='text-light'>{product.desc}</p>
        </div>
        <div className='col-12'>
          <h5 style={{fontWeight:"bolder"}} className='text-light' >Advanteges</h5>
          <p className='text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, adipisci aut hic aliquam distinctio ipsum repellat corporis exercitationem a corrupti? Minus, odit laudantium. Earum laboriosam quaerat doloribus, facere repellendus commodi unde fuga esse natus id dolor dignissimos cupiditate nostrum tenetur tempora ipsam hic. Autem, pariatur odit odio corporis inventore vitae nesciunt amet tempore asperiores quibusdam quod numquam quidem deleniti porro magni perspiciatis, eaque praesentium minima quas doloribus. Fugiat tenetur voluptatem sequi expedita iure? Atque amet id deleniti exercitationem impedit natus fugit, recusandae aut qui reiciendis distinctio, tempora ut vitae dolor ad error quod maxime laudantium illum officiis modi nam dignissimos.
          </p>
        </div>
    
    </div>


    <div className='col-6 rounded p-5' style={{
      backgroundColor:"#8FBFBF",
      display: 'flex',            
      justifyContent: 'center',   
      alignItems: 'center',       
      textAlign: 'center', 
      }}>
    <div className='  container'>

      <div className='col-12'>
      <img src={product.image} alt={product.name} className='  rounded col-9 ' />
      </div>
      <div>
          <Link to="/contact" className='col-12 detal btn  color-2 btn-link btn btn-lg btn-outline mt-5 ' style={{
                          textDecoration:"none" ,  
                          backgroundColor:"#2b3e3c",
                          fontSize:"larger",
                          fontWeight:"bold"}}>
          Contact Us To Know More</Link>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Product