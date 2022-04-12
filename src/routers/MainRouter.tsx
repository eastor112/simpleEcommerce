import { Routes, Route } from 'react-router-dom';
import App from '../App';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import ProductDetail from '../pages/ProductDetail/ProductDetail';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:productId" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
