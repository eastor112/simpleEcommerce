import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import './productDetail.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveProduct,
  setIsFavourite,
  setIsActiveProduct,
} from '../../context/action-creators/index';
import { RootState } from '../../context/reducers/index';
import { IProductState } from '../../interfaces/productsInterface';
import { calcRemainingtime } from '../../helpers/timeHelper';

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { activeProduct: product }: IProductState = useSelector(
    (state: RootState) => state.store,
  );

  const [remain, setRemain] = useState<string>('');

  const { description, image, price, rating, title, category, isFavourite } =
    product || {};

  useEffect(() => {
    if (productId) {
      dispatch(setActiveProduct(productId));
    }
  }, []);

  useEffect(() => {
    let updateTime: NodeJS.Timer;

    if (product) {
      updateTime = setInterval(() => {
        const { remain, seconds, hours, minutes } = calcRemainingtime(
          product.finishOffer,
        );

        setRemain(remain);

        if (hours <= 0 && seconds <= 0 && minutes <= 0) {
          setRemain('00:00:00');
          clearInterval(updateTime);
          if (productId) dispatch(setIsActiveProduct(productId, false));
        }
      }, 1000);
    }

    return () => {
      clearInterval(updateTime);
    };
  }, [product]);

  const handleLiked = () => {
    if (productId) {
      dispatch(setIsFavourite(productId, !isFavourite));
    }
  };

  return (
    <section className="main__section product__detail">
      <div className="product__detail__position">
        <Link to="/">
          <i className="fa-solid fa-angle-left" />
          Back to products
        </Link>
        <div className="product__detail__category">
          <span>Category: </span>
          <Link className="category" to={`/detail/${productId}`}>
            {category}
          </Link>
        </div>
      </div>

      {product?.id && (
        <div className="product__detail__container">
          <div className="left">
            <button type="button" className="card__like" onClick={handleLiked}>
              {isFavourite ? (
                <i className="fas fa-heart" />
              ) : (
                <i className="far fa-heart" />
              )}
            </button>

            <figure className="product__detail__image">
              <img src={image} alt={title} />
            </figure>
          </div>

          <div className="right">
            <div className="top">
              <p className="product__detail__condition">new | 152 sold</p>
              <p className="product__detail__title">{title}</p>
              <div className="product__detail__rating">
                <StarRatings
                  rating={rating?.rate}
                  starRatedColor="#ffb400"
                  starDimension="18px"
                  starSpacing="1px"
                  numberOfStars={5}
                  name="rating"
                />
                <p className="rate">{rating?.rate} of 5</p>
                <Link className="count" to={`/detail/${productId}`}>
                  ({rating?.count} ratings)
                </Link>
              </div>

              <div className="product__detail__price">
                <p className="real__price">
                  S/ {((price || 0) * 1.18).toFixed(2)}
                </p>
                <p className="discounted__price">
                  S/{price}
                  <span>45% OFF</span>
                </p>
                <p className="saving">
                  You save S/ <span>{((price || 0) * 0.18).toFixed(2)}</span>
                </p>
                <p className="card__credit">
                  <i className="fa-regular fa-credit-card" />
                  12x S/ {((price || 0) / 12).toFixed(2)} no interest
                </p>
              </div>

              <div className="product__detail__limit">
                This offer finish in
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-alarm"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                  </svg>
                  {remain}
                </span>
              </div>

              <div className="product__detail__shipping">
                <p className="info">
                  No Import Fees Deposit & Free shipping Shipping to Peru
                </p>
                <p className="arrive">
                  <i className="fa-solid fa-truck-fast" />
                  Arrive for free between Monday and Thursday, April 21
                </p>
                <Link className="link" to={`/detail/${productId}`}>
                  See shipping details
                </Link>
              </div>

              <div className="product__detail__return">
                <p className="cost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-return-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                  Free return.
                </p>
                <p className="time_limit">
                  You have 30 days from when you receive it.
                </p>
                <Link className="link" to={`/detail/${productId}`}>
                  See return policy
                </Link>
              </div>
              <div className="product__detail__description">
                <h4>About this item:</h4>
                <p>{description}</p>
              </div>
            </div>

            <div className="bottom">
              <button className="cart" type="button">
                <i className="fa-solid fa-cart-shopping" />
                Add to cart
              </button>
              <button className="now" type="button">
                <i className="fa-solid fa-file-invoice-dollar" />
                Buy now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
