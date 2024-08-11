
import { useEffect, useState } from 'react';
import logo from '.././Landing/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { Dropdown } from 'antd';
import   lono from './logos.png'
import { message } from 'antd';

function Navbar() {
 
  const [user,setUser] = useState('');
  useEffect(()=>{
    let user = localStorage.getItem('ToDoUser');
    setUser(user);
  },[])


  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('ToDoUser');
    setUser('');
    navigate('/');
  }

  const farewell = ()=>{
    prompt('Please enter your feedback');
    message.success("Thank you for your feedback");
  }

  const items = [
    {
      key:'1',
      label:(
        <span onClick={handleLogout}>Logout</span>
      ),
    },
    {
      key:'2',
      label:(
        <span onClick={farewell}>Bid us Farewell</span>
      ),
    },
  ]

  return (
    <div>
        <nav className='nav'>
            <div >
          <img src={logo}  className='img' alt='img'/>
            </div>
            <div >
            <ul className='items'>
            <li className='lih'><NavLink to="/" className="link ">Home</NavLink></li>
            {user && <li className='lih'><NavLink to="/todo" className="link">Task</NavLink></li>}

            {user ?
            
            <Dropdown
            menu={{items,}}
            placement='bottomCenter'
            arrow
            >
              <div className='userInfoNav' >
                <img className='logoutimg' src={lono} alt='jh'/>
                <span>{user?.firstname ? `Hello ${user?.firstname} ${user?.lastname}`: user?.username}</span>
              </div>

            </Dropdown>
            
            : <>
              <li className='lih' ><NavLink to="/login" className="link"  >Login</NavLink></li>
              <li className='lih'><NavLink activeClassName='active' to="/register" className="link">Register</NavLink></li>
              </>
              }
           
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
