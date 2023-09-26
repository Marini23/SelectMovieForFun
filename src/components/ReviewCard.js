export const ReviewCard = ({ review }) => {
  const { author, content } = review;
  return (
    <li>
      <p>{author}</p>
      <p>{content}</p>
    </li>
  );
};
