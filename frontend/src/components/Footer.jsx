import './Footer.css';
// import { FaShippingFast, FaPhoneVolume, FaUndoAlt, FaTag, FaFacebookF, FaInstagram } from "react-icons/fa";
 import { Link } from 'react-router-dom';

function Footer() {
    

    return (
        <footer className='footer color-2 mt-3'>
            
            {/* Footer Categories */}
            <div className='footer-categories container p-4'>
                <div className='row'>
                    <div className='col-6 col-lg-3 mb-4'>
                        <h6 className='category-title'>footer items</h6>
                        <ul className='list-unstyled '>
                            <li><Link to="/ ">footer item</Link></li>
                            <li><Link to="/ ">footer item</Link></li>
                            <li><Link to="/ ">footer item</Link></li>
                            <li><Link to="/ ">footer item</Link></li>
                        </ul>
                    </div>
                    <div className='col-6 col-lg-3 mb-4'>
                        <h6 className='category-title'>footer items</h6>
                        <ul className='list-unstyled'>
                            <li><Link to="/ ">footer item</Link></li>
                            <li><Link to="/ ">footer item</Link></li>
                            <li><Link to="/ ">footer item</Link></li>
                            <li><Link to="/ ">footer item</Link></li>
                        </ul>
                    </div>
                    <div className='col-6 col-lg-3 mb-4'>
                        <h6 className='category-title'>footer items</h6>
                        <ul className='list-unstyled'>
                            <li><Link to="/ ">footer item</Link></li>
                            <li><Link to="/ ">footer item</Link></li>
                            <li><Link to="/ ">footer item</Link></li>
                            <li><Link to="/ ">footer item</Link></li>
                        </ul>
                    </div>
                    <div className='col-6 col-lg-3 mb-4'>
                        <h6 className='category-title'>footer items</h6>
                        <ul className='list-unstyled'>
                            <li><Link to="/ ">footer item</Link></li>
                            <li><Link to="/ ">footer item</Link></li>
                            <li><Link to="/ ">footer item</Link></li>
                            <li><Link to="/ ">footer item</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}

        

        </footer>
    );
}

export default Footer;
