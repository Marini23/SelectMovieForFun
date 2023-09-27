import { ReviewCard } from './ReviewCard';

export const Reviews = ({ movieReviews }) => {
  return (
    <ul>
      {movieReviews.map(review => (
        <ReviewCard review={review} key={review.id} />
      ))}
    </ul>
  );
};
