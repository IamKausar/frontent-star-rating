import StarRating from "./StarRatin";
import { useState } from "react";

const MAXSTARS = 5;
type Rating = {
  id: number;
  maxStars: number;
  filledStars: number;
};
export default function RatingList() {
  const [ratingList, setRatingList] = useState<Rating[]>([
    { id: 1, maxStars: MAXSTARS, filledStars: 2 },
    { id: 2, maxStars: MAXSTARS, filledStars: 3 },
    { id: 3, maxStars: MAXSTARS, filledStars: 2 },
    { id: 4, maxStars: MAXSTARS, filledStars: 4 },
    { id: 5, maxStars: MAXSTARS, filledStars: 5 },
  ]);

  const handleStarClick = (newRating: number, id: number): void => {
    setRatingList((prev) =>
      prev.map((el) =>
        // if (el.id === id) el.filledStars = newRating;  ---> Mutation! - react might not know that the object is updated. Hence while set..(value) spread to set it [...value]- this ensures the state is updated as it represents new Array.
        el.id === id ? { ...el, filledStars: newRating } : el
      )
    );
  };

  return (
    <div>
      {ratingList.map((rate) => (
        <StarRating
          key={rate.id}
          id={rate.id}
          maxStars={rate.maxStars}
          filledStars={rate.filledStars}
          handleStarClick={handleStarClick}
        />
      ))}
    </div>
  );
}
