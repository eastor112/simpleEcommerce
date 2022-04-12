import { useState } from 'react';
import { IProduct } from '../../interfaces/productsInterface';
import './product.styles.css';

const ProductCard = ({ title, price, image }: IProduct) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [more, setMore] = useState<boolean>(false);

  const handleLiked = (): void => {
    setLiked(!liked);
  };

  const handleMouseEnter = (): void => {
    setMore(true);
  };
  const handleMouseLeave = (): void => {
    setMore(false);
  };

  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={`card__like ${!liked && !more && 'hidden'}`}
        onClick={handleLiked}
      >
        {liked ? (
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
        S/ {price.toString().split('.')[0]}
        <span className="decimal">{price.toString().split('.')[1]}</span>
        <span className="discount">18% OFF</span>
      </p>
      <p className="card__credit">
        <i className="fa-regular fa-credit-card" />
        12x S/ {(price / 12).toFixed(2)} no interest
      </p>
      <p className="card__shipping">Free shipping</p>
      <p className={`card__title  ${!more && 'hidden'}`}>{title}</p>

      <p className="card__duration">
        This offer finish in:<span> 12:36:00 </span>
      </p>
      <button type="button" className="card__button">
        View details
      </button>
    </div>
  );
};
export default ProductCard;
