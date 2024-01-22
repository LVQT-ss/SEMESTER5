import React from 'react';
import { Players } from '../Share/Players';

export default function Content() {
    return (
        <div className='container'>
            <div className='row'>
                {Players.map((player, index) => (
                    <div className='col-md-3' key={index}>
                        <div className='card'>
                            <img src={player.img} alt={player.name} />
                            <h3>{player.name}</h3>
                            <p className='title'>{player.club}</p>
                            <p><button>Detail</button></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
