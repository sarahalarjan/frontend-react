import React from 'react'

const MusicCard = ({ songs }) => {
  return (
    <div>
      <center><h1>Music List</h1></center>
      {songs.map((song)  => (
        <div className="card" key={song.id}>
          <div className="card-body">
            <h5 className="card-title">Title: {song.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Album: {song.album}</h6>
            <p className="card-text">Artist: {song.artist}</p>
          </div>
        </div>
      ))}
    </div>
  )
};
export default MusicCard