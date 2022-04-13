import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { RootState } from '../context/reducers/index';
import {
  IProductState,
  IProductExtended,
} from '../interfaces/productsInterface';

interface IProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: IProps) => {
  const { products }: IProductState = useSelector(
    (state: RootState) => state.store,
  );

  const { productId } = useParams();

  const product = products.find(
    (product: IProductExtended) => product.id === Number(productId),
  );

  if (!product) {
    return <Navigate to="/" />;
  }
  if (product.isActive) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PrivateRoute;
