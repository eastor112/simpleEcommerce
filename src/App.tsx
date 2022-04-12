import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <hr />
      <Outlet />
    </>
  );
};

export default App;
