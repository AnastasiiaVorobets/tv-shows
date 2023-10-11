import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from "../components/Loader/Loader";
import ShowDetails from "../components/ShowDetails/ShowDetails";

function DetailsPage() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error');
        }
        return response.json();
      })
      .then((data) => {
        setShow(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error: ', error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="details-page">
      {loading ? (
        <Loader />
      ) : (
        <ShowDetails show={show} />
      )}
    </div>
  );
}

export default DetailsPage;