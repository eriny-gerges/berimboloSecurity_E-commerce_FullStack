import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav
        className="navbar sticky-top navbar-expand-sm  navbar fixed-top     "  
 >
  
        <div className="container ">
          <div>
          <Link className="navbar-brand  color-2" to="/" style={{color:"#F2F2F2", margin:"auto"}}>  
              <h3 style={{textAlign:"center" ,fontWeight:"bolder"}} >Berimbolo</h3>
               <h5 style={{textAlign:"center"}}>Security</h5>
          </Link>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
          </div>
            <div className="collapse navbar-collapse offset-7" id="collapsibleNavId ">
                <ul className="navbar-nav me-auto   mt-2 mt-lg-0  ">
                    
                    <li className="nav-item">
                        <Link style={{color:"#F2F2F2",}} className="nav-link" to="/" >Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{color:"#F2F2F2",}} className="nav-link" to="/Products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{color:"#F2F2F2",}} className="nav-link" to="/Serveses">Serveses</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{color:"#F2F2F2",}} className="nav-link" to="/About">About</Link>
                    </li> 
                    <li className="nav-item">
                        <Link style={{color:"#F2F2F2",}} className="nav-link" to="/Contact">Contact</Link>
                    </li> 
                </ul>
            </div>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar