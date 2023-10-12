import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import './ShowDetails.css';

function ShowDetails({ show }) {
  const {
    name,
    image,
    genres,
    rating,
    url,
    status,
    schedule,
    summary,
  } = show;

  return (
    <div>
      {show ? (
        <div className='container'>
          <div className="details">
            <div>
              <img
                src={image.medium}
                alt={name}
                className="details__image"
              />
            </div>
            <div className='detail__info'>
              <h1>{name}</h1>
              <p>Genres: {genres.join(', ')}</p>
              <p>Rating: {rating.average || '-'}</p>
              <a href={url} target="_blank">
                Link to Show
              </a>
              <p>Status: {status}</p>
              <p>Schedule: {schedule.days.join(', ')} - {schedule.time}</p>
              <div
                dangerouslySetInnerHTML={{ __html: summary }}
              />
            </div>
          </div>
          <Link to={`/`}>
            <button className='back__button'>Back</button>
          </Link>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default ShowDetails;
