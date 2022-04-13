import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import setAllProducts from '../../context/action-creators';
import { IProduct } from '../../interfaces/productsInterface';
import './home.styles.css';

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllproducts = async () => {
      const results = await fetch('https://fakestoreapi.com/products');
      const data = await results.json();

      setProducts(data);
      dispatch(setAllProducts(data));
    };

    getAllproducts();
  }, []);

  return (
    <section className="main__section home">
      {products?.map((product: IProduct) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </section>
  );
};

export default Home;
