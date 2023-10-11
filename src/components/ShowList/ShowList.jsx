import React from 'react';
import ShowInfo from '../../components/ShowInfo/ShowInfo';
import './ShowList.css'

function ShowList({ shows }) {
  if (shows.length === 0) {
    return <p className='message'>Sorry, nothing found with this search.</p>;
  }

  return (
    <div className='show__container'>
      {shows.map(show => (
        <ShowInfo key={show.id} show={show} />
      ))}
    </div>
  );
}

export default ShowList;
