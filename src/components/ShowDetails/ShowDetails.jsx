import './ShowDetails.css';
import Loader from '../../components/Loader/Loader';

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
    <div className="container">
      {show ? (
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
            <p>Schedule: {schedule.days.join(', ')} at {schedule.time}</p>
            <div
              dangerouslySetInnerHTML={{ __html: summary }}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default ShowDetails;
