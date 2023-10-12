import React from 'react';
import ShowInfo from '../../components/ShowInfo/ShowInfo';
import './ShowList.css';

function ShowList({ shows, searchStarted }) {
  return (
    <div>
      {searchStarted && shows.length === 0 ? (
        <p className='message'>Sorry, nothing found with this search.</p>
      ) : (
        <div className='show-list'>
          {shows.map(show => (
            <ShowInfo key={show.id} show={show} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowList;
