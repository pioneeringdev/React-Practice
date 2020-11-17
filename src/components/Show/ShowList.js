import React, { useState, useEffect } from 'react'
import Loader from '../Loader/Loader';
import Show from './Show';


const SHOWS_URL = 'https://api.tvmaze.com/search/shows?q=';

export default function ShowList({ search }) {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`${SHOWS_URL}${search}`)
      .then(response => response.json())
      .then(results => {
        setShows(results);
      })
      .catch(error => {
        console.error(error.message);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      })
    return () => { }
  }, [search]);

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <p>{error}</p>
  }
  if (shows.length === 0) {
    return <p>No Results Found!</p>
  }
  return (
    <div>
      {shows.map(show => <Show key={show.show.id} show={show.show} />)}
    </div>
  )
}
