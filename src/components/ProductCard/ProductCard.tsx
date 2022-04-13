import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IProductExtended } from '../../interfaces/productsInterface';
import './product.styles.css';
import { calcRemainingtime } from '../../helpers/timeHelper';
import {
  setIsActiveProduct,
  setIsFavourite,
} from '../../context/action-creators/index';

const ProductCard = ({
  id,
  title,
  price,
  image,
  finishOffer,
  isActive,
  isFavourite,
}: IProductExtended) => {
  const dispatch = useDispatch();
  const [more, setMore] = useState<boolean>(false);
  const [remain, setRemain] = useState<string>('');

  useEffect(() => {
    let updateTime: NodeJS.Timer;

    if (isActive) {
      updateTime = setInterval(() => {
        const { remain, seconds, hours, minutes } =
          calcRemainingtime(finishOffer);
        setRemain(remain);

        if (seconds <= 0 && minutes <= 0 && hours <= 0) {
          setRemain('00:00:00');
          clearInterval(updateTime);
          dispatch(setIsActiveProduct(id, false));
        }
      }, 1000);
    }

    return () => {
      clearInterval(updateTime);
    };
  }, [id]);

  const handleLiked = (): void => {
    dispatch(setIsFavourite(id, !isFavourite));
  };

  const handleMouseEnter = (): void => {
    if (isActive) {
      setMore(true);
    }
  };

  const handleMouseLeave = (): void => {
    setMore(false);
  };

  return (
    <div
      className={`card ${!isActive && 'cardDisabled'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={`card__like ${!isFavourite && !more && 'hidden'}`}
        onClick={handleLiked}
        disabled={!isActive}
      >
        {isFavourite ? (
          <i className="fas fa-heart" />
        ) : (
          <i className="far fa-heart" />
        )}
      </button>
      <figure className="card__image_container">
        <img className="card__image" src={image} alt={title} />
      </figure>
      <hr className="card__separator" />

      <div className={`card__upper__price ${!more && 'hidden'}`}>
        <p>S/ 132</p>
        <span className="decimal">95</span>
      </div>
      <hr className={`card__line__through ${!more && 'hidden'}`} />

      <p className="card__price">
        S/ {price.toFixed(2).toString().split('.')[0]}
        <span className="decimal">
          {price.toFixed(2).toString().split('.')[1]}
        </span>
        <span className="discount">18% OFF</span>
      </p>
      <p className="card__credit">
        <i className="fa-regular fa-credit-card" />
        12x S/ {(price / 12).toFixed(2)} no interest
      </p>
      <p className="card__shipping">Free shipping</p>
      <p className={`card__title  ${!more && 'hidden'}`}>{title}</p>

      {remain !== '' && (
        <p className="card__duration">
          This offer finish in:<span> {remain} </span>
        </p>
      )}

      <Link to={`/detail/${id}`}>
        <button
          type="button"
          className={`card__button ${!isActive && 'disabled'}`}
          disabled={!isActive}
        >
          View details
        </button>
      </Link>
    </div>
  );
};
export default ProductCard;
