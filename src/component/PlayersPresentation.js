import React, { useState } from 'react';
import { Players } from '../Share/Players';

export default function Content() {
  const [player, setPlayer] = useState([])
  return (
    <div className='container'>
      <div className='row'>
        {Players.map((player, index) => (
          <div className='col-md-3' key={index}>
            <div className='card text-center'> {/* Added text-center class here */}
              <img src={player.img} alt={player.name} />
              <h3>{player.name}</h3>
              <p className='title'>{player.club}</p>
              <p><button onClick={() => setPlayer(player)}><a href='#popup1' id="openPopUp">Detail</a></button></p>
            </div>
          </div>
        ))}


        <div id="popup1" className='overlay'>
          <div className='popup'>
            <img src={player.img} />
            <h3>{player.name}</h3>
            <a className='close' href='#'>&times;</a>
            <div className='content'>{player.info}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
