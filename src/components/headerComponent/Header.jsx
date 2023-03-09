import React from 'react'
import './header.scss';
import { Link, useLocation } from 'react-router-dom';



const mainNav = [
  {
    display: 'Home',
    icon: 'bx bx-home',
    path: '/'
  },
  {
    display: 'About',
    icon: 'bx bxs-user',
    path: '/about'
  },
  {
    display: 'Skills',
    icon: 'bx bxs-cog',
    path: '/skills'
  },
  {
    display: 'Projects',
    icon: 'bx bx-folder-open',  
    path: '/projects'
  },
  {
    display: 'Contact',
    icon: 'bx bx-message-rounded-dots',
    path: '/contact'
  }
] 




const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex(e => e.path === pathname);
  return (
    <header className='header'>
      <div className="container">
          <div className="header-container">
            <nav>
              <ul>
                  {
                    mainNav.map((item,index) => (
                      <li key={index}
                        className={`list ${index === activeNav ? 'active' : ''}`}
                      >
                          <Link to={item.path}>
                            <span className='icon'>
                              <i class={item.icon}></i>
                            </span>
                            <span className='text'>
                              {item.display}
                            </span>
                          </Link>
                      </li>
                      
                    ))
                  }
                  
              </ul>
            </nav>
          </div>
      </div>
    </header>
  )
}

export default Header