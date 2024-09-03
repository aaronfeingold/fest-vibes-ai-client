import React from 'react'

const ArtistEvent = ({ ae }) => {
  let artistName;
  let eventHref;

  for (let key in ae) {
    if (ae.hasOwnProperty(key)) {
      eventHref = ae[key];
      artistName = key;
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="card" id={artistName} style={{ width: "30rem" }}>
        <div className="card-body">
          <ul className="card-info">
            <li className="card-info artist-name">{artistName}</li>
            <li className="card-info event-href">
              <button
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  window.open(`https://www.wwoz.org${eventHref}`, "_blank")
                }
              >
                Details Here
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArtistEvent;
