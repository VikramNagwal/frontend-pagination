interface CardProps {
  title: string;
  thumbnail: string;
  price: number;
  rating: number;
  description?: string;
}

const Card = ({ title, thumbnail, price, rating, description }: CardProps) => {
  return (
    <div className="card">
      <h4>{title}</h4>
      <img src={thumbnail} alt={title} loading="lazy" />
      <p className="card-description">{description}</p>
      <div className="price-rating">
        <p>⭐{rating}</p>
        <p>
          Price: <span className="price">{price}</span>
        </p>
      </div>
      <button className="card-button">Buy Now</button>
    </div>
  );
};

export default Card;
