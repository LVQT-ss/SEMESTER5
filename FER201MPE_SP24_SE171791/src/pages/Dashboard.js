import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';

const URL = 'https://65f432e3f54db27bc020cdd2.mockapi.io/sectionManagement';

const Dashboard = () => {

    const [players, serPlayer] = useState([]);

    const getPlayer = async () => {
        const res = await axios.get(`${URL}`);
        serPlayer(res.data)
    }


    const handleDelete = async (id) => {
        if (window.confirm(`Are you sure that you want to delete this player`)) {
            const res = await axios.delete(`${URL}/${id}`);
            if (res.status === 200) {
                getPlayer();
                toast.success("Deleted Successfully ~");
            } else {
                toast.error("Delete: Error!");
            }
        }
    }

    return (
        <div className="staff-table">
            <Link to={'/add/'}>
                <button className='add-staff-btn'>&#x2719;</button>
            </Link>


            <table>
                <thead>
                    <tr>
                        <th>sectionName</th>
                        <th>image</th>
                        <th>sectionDescription</th>
                        <th>duration</th>
                        <th>isMainTask</th>

                    </tr>
                </thead>
                <tbody>
                    {players && players.map((player) => {
                        // if (product.bestseller === true)
                        return (
                            <tr key={player.id}>
                                <td>{player.sectionName}</td>
                                <td><img className='anh-nho-dt' src={player.image} /></td>
                                <td>{player.sectionDescription}</td>
                                <td>{player.duration}</td>
                                <td>{String(player.isMainTask)}</td>


                            </tr>

                        )

                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;