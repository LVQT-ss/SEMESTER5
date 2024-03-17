import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/detail.css';
export default function DetailNew() {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        axios.get(`https://65f432e3f54db27bc020cdd2.mockapi.io/sectionManagement/${id}`)
            .then(response => setPlayer(response.data))
            .catch(error => console.log(error));
    }, [id]);
    if (!player) {
        return <div>Loading...</div>;
    }
    return (

        <div className='container-detail'>
            <img src={player.image} alt={player.name} className='detail-anh' />

            <div className='container-detail-content'>
                <h1 className='tieude'>NAME : {player.sectionName}</h1>
                <h3>Description: {player.sectionDescription}</h3>
                <h4>Duration: {player.duration} </h4>
                <h4>isMaintask: {String(player.isMainTask)}</h4>
            </div>
        </div>

    );
}
