import { ReviewItem, ReviewAuthor, ReviewContext } from './ReviewCard.styled';

export const ReviewCard = ({ review }) => {
  const { author, content } = review;
  return (
    <ReviewItem>
      <ReviewAuthor>{author}</ReviewAuthor>
      <ReviewContext>{content}</ReviewContext>
    </ReviewItem>
  );
};
