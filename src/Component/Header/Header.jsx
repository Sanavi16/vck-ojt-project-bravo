import { Link } from 'react-router-dom';
import './header.css'


const Header = () => {
  return (
    <div className='header'>
    
      
      <nav className='navbar'>
        <div className="logo">Vivekanand College</div>
        <div className='nav-items'>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/About" className='nav-link'>About</Link>
         
        <Link to="/Courses"className='nav-link'>Courses</Link>
        <Link to="/Contact"className='nav-link'>Contact</Link>
         <Link to="/Admission"className='nav-link'> <button>Apply Now</button></Link>
         </div>
      </nav>
    
    </div>
  );
};

export default Header;