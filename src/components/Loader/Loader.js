import React from 'react'
import spinner from '../../assets/spinner.gif';
import './Loader.css';

export default function Loader() {
  return (
    <div className="loader">
      <img className="loader-spinner" src={spinner} />
    </div>
  )
}
