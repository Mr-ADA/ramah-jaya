import { useEffect, useState } from "react";
import { getReviewsData } from "../../backend/reviews.cjs";
import CardReviews from "./CardReviews";
import "../styles/Reviews.css";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await getReviewsData();
      setReviews(reviews);
    };

    fetchReviews();
  }, []);

  return (
    <div className="reviews">
      <h1 className="reviews-title">Ulasan Kami</h1>
      {reviews.map((review) => (
        <CardReviews key={review.time} name={review.author_name} rating={review.rating} text={review.text}></CardReviews>
      ))}
    </div>
  );
}
