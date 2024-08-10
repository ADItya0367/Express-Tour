
import logo from '.././Landing/logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {

  return (
    <div>
        <nav className='nav'>
            <div >
          <img src={logo}  className='img' alt='img'/>
            </div>
            <div >
            <ul className='items'>
            <li className='lih'><NavLink to="/" className="link ">Home</NavLink></li>
            <li className='lih' ><NavLink to="/login" className="link"  >Login</NavLink></li>
            <li className='lih'><NavLink activeClassName='active' to="/register" className="link">Register</NavLink></li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
