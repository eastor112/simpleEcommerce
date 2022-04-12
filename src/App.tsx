import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <nav>
        <Link style={{ marginRight: '15px' }} to="/">
          Home
        </Link>
        <Link style={{ marginRight: '15px' }} to="/about">
          About
        </Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export default App;
