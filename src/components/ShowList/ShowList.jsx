import React from 'react';
import ShowInfo from '../../components/ShowInfo/ShowInfo';
import './ShowList.css'

function ShowList({ shows }) {

  return (
    <div>
      {shows.length === 0 ? (
        <p className='message'>Sorry, nothing found with this search.</p>
      ) : (
        <div className='show__container'>
          {shows.map(show => (
            <ShowInfo key={show.id} show={show} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowList;
