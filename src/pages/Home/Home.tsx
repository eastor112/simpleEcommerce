import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import { setAllProducts } from '../../context/action-creators';
import { RootState } from '../../context/reducers';
import {
  IProductState,
  IProductExtended,
} from '../../interfaces/productsInterface';
import './home.styles.css';

const Home = () => {
  const { products }: IProductState = useSelector(
    (state: RootState) => state.store,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(setAllProducts());
    }
  }, []);

  return (
    <section className="main__section home">
      {products?.map((product: IProductExtended) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </section>
  );
};

export default Home;
