import { Link, NavLink } from 'react-router-dom';
import './navBar.styles.css';

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="brand">
        <i className="fa-solid fa-shop" />
        Fast Shopping
      </Link>

      <div className="right">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
