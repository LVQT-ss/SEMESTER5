import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/home.css';
const URL = 'https://65f432e3f54db27bc020cdd2.mockapi.io/sectionManagement';


const Home = () => {
    const [players, setPlayer] = useState([]);

    useEffect(() => {

        fetchData();
        console.log(players);
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${URL}`);
            setPlayer(response.data)
            console.log(players);
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    };

    return (


        <div className='card-container'>
            {players && players.map((player) => {
                if (player.isMainTask === true) {
                    return (
                        <div className='card' key={player.id}>

                            <div className='card-header'>
                                {player.sectionName}
                            </div>

                            <div className='card-body'>

                                <img src={player.image} alt={player.name} className='anh-nho' />
                                <p>{player.sectionDescription}</p>
                            </div>

                            <div className='card-footer'>
                                <Link to={`/detail/${player.id}`}><button className='btdt'>Detail</button></Link>
                            </div>

                        </div>

                    );
                }
            })}
        </div>
    );
};

export default Home;