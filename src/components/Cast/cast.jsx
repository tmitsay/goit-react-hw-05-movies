import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'components/API/api';
import { Loader } from 'components/Loader/Loader';
import css from './cast.module.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const addCast = async () => {
      try {
        const cast = await getMovieCast(movieId);
        setCast(cast);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    addCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}

      <ul className={css.list}>
        {cast.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              width={250}
              alt={original_name}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
            />
            <p className={css.text}>{name}</p>
            <p className={css.text}>Character : {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
