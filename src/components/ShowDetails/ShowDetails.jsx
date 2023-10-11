import './ShowDetails.css';
import Loader from '../../components/Loader/Loader';

function ShowDetails({ show }) {
  return (
    <div className="container show-details-container">
      {show ? (
        <div className="show-details">
          <div>
            <img
              src={show.image.medium}
              alt={show.name}
              className="image"
          />
          </div>
          <div className='details'>
            <h1>{show.name}</h1>
            <p>Genres: {show.genres.join(', ')}</p>
            <p>Rating: {show.rating.average || '-'}</p>
            <a href={show.url} target="_blank">
              Link to Show
            </a>
            <p>Status: {show.status}</p>
            <p>Schedule: {show.schedule.days.join(', ')} at {show.schedule.time}</p>
            <div
              dangerouslySetInnerHTML={{ __html: show.summary }}
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
