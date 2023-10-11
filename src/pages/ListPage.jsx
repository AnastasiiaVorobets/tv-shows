import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import ShowList from '../components/ShowList/ShowList';
import Loader from '../components/Loader/Loader'

function ListPage() {
  const [query, setQuery] = useState('');
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length >= 2) {
      setLoading(true);
      fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          if (data.length === 0) {
            setShows([]);
          } else {
            setShows(data.map((result) => result.show));
          }
        })
        .catch((error) => {
          console.error('Error: ', error);
          setLoading(false);
        });
    } else {
      setShows([]);
    }
  }, [query]);

  return (
    <div>
      <SearchBar
        setQuery={setQuery}
        query={query}
      />
      {loading ? <Loader /> : <ShowList shows={shows} />}
    </div>
  );
}

export default ListPage;
