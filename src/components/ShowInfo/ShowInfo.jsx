import React from 'react';
import { Link } from 'react-router-dom';
import './ShowInfo.css'

function ShowInfo({ show }) {
  return (
    <div className="show-card">
      <Link to={`/details/${show.id}`}>
        {show.image && show.image.medium && (
          <img
            src={show.image.medium} 
            alt={show.name}
            className='show_image'
          />
        )}
        <h3 className='name'>{show.name}</h3>
        <p>Rating: {show.rating.average || '-'}</p>
      </Link>
    </div>
  );
}

export default ShowInfo;
