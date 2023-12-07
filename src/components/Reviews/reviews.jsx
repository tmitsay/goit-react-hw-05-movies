import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/API/api';
import { Loader } from 'components/Loader/loader';
import css from './reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    const addReviews = async () => {
      try {
        const Reviews = await getMovieReviews(movieId);
        setReviews(Reviews);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoader(false);
      }
    };

    addReviews();
  }, [movieId]);

  return (
    <>
      {isLoader && <Loader />}

      {reviews.length !== 0 && (
        <div>
          <ul className={css.list}>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <h2>Sorry, we don't have any reviews for this movies </h2>
      )}
    </>
  );
};
