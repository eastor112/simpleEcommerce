import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { IProduct } from '../interfaces/productsInterface';

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
    <div className="">
      <h3>Home</h3>
      {products?.map((product: IProduct) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Home;
