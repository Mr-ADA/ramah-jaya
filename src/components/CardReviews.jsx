import "../styles/CardReviews.css";
export default function CardReviews(props) {
  return (
    <div className="card card-reviews">
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <h6 className="card-subtitle">Rating: {"⭐".repeat(props.rating)}</h6>
        <p className="card-text">
          <i>{props.text}</i>
        </p>
      </div>
    </div>
  );
}
