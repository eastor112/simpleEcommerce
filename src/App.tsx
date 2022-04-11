import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <nav>NavBar👉</nav>
      <hr />
      <Outlet />
    </>
  );
};

export default App;
