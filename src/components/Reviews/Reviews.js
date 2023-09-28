import { ReviewCard } from './ReviewCard';
import { ListReviews } from './Reviews.styled';

export const Reviews = ({ movieReviews }) => {
  return (
    <ListReviews>
      {movieReviews.map(review => (
        <ReviewCard review={review} key={review.id} />
      ))}
    </ListReviews>
  );
};
