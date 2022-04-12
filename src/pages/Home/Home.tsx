import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { IProduct } from '../../interfaces/productsInterface';
import './styles.css';

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getAllproducts = async () => {
      const results = await fetch('https://fakestoreapi.com/products');
      const data = await results.json();

      setProducts(data);
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
