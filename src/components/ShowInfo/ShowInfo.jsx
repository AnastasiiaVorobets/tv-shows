import React from 'react';
import { Link } from 'react-router-dom';
import './ShowInfo.css'

function ShowInfo({ show }) {
  const {
    id,
    name,
    image,
    rating,
  } = show;

  return (
    <div className="card">
      <Link to={`/details/${id}`}>
        {image && image.medium && (
          <img
            src={image.medium} 
            alt={name}
            className='card__image'
          />
        )}
        <h3 className='card__name'>{name}</h3>
        <p>Rating: {rating.average || '-'}</p>
      </Link>
    </div>
  );
}

export default ShowInfo;
