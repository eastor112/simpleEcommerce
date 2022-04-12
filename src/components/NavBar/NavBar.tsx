import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="brand">
        <i className="fa-solid fa-shop" />
        Happy Shopping
      </Link>

      <div className="right">
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default NavBar;
