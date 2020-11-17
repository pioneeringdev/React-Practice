import React from 'react'
import './show.css';

export default function Show({ show }) {
  console.log("show", show.image);
  if (!show) {
    return <div> Something went wrong!</div>
  }
  const imageUrl = show && show.image && show.image.original || "";
  return (
    <div class="show-wrapper">
      <img
        src={imageUrl}
        alt={show.name}
        className="show-image"
      />
      <div class="show-info">
        <p className="show-name">{show.name}</p>
        <div className="show-summary" dangerouslySetInnerHTML={{ __html: show.summary }} />
        <button className="show-episodes">
          Show Episodes
        </button>
      </div>
        
    </div>
  )
}
