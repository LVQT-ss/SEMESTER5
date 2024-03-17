import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../styles/formAddEdit.css';

const URL = 'https://65451fd55a0b4b04436dad71.mockapi.io/Player';

const initialState = {
    sectionName: '',
    sectionDescription: '',
    duration: '',
    isMainTask: false,
    image: '',
}

// sectionName: '',
// sectionDescription: '',
// duration: '',
// isMainTask: false,
// image: '',
const FormAddEdit = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [state, setState] = useState(initialState);
    const { sectionName, sectionDescription, duration, isMainTask, image } = state;

    const getOneP = async (id) => {
        const res = await axios.get(`${URL}/${id}`);
        if (res.status === 200) {
            setState(res.data);
        }
    }

    useEffect(() => {
        if (id) getOneP(id);
        console.log(id);
    }, [id]);

    const addNewP = async (data) => {
        const res = await axios.post(`${URL}`, data);
        if (res.status === 200 || res.status === 201) {
            toast.success("New player has been added successfully ~");
            navigate('/dashboard');
        }
    }

    // validate

    const validateForm = () => {
        let isValid = true;

        return isValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            if (id) updateP(id, state);
            else addNewP(state);
        } else {
        }
    }
    const updateP = (event) => {

    }

    const handleInputChange = (event) => {
        let { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            value = checked;
        }

        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <div className='container'>
            <div className="form">
                <h2>{id ? "Update Form" : "Add New Product"}</h2>
                <form onSubmit={handleSubmit}>
                    <div>


                        <label htmlFor="name">sectionName: </label>
                        <input type="text" name='name' value={state.sectionName} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="img">sectionDescription: </label>
                        <input type="text" name='img' value={state.sectionDescription} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="cost">duration: </label>
                        <input type="number" name='cost' value={state.duration} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="img">image: </label>
                        <input type="text" name='img' value={state.image} onChange={handleInputChange} />
                    </div>
                    <div className='nhap-famous'>
                        <label htmlFor="famous">isMainTask Famous: </label>
                        <div className='nhap-famous1'>
                            <input type="checkbox" name='famous' checked={state.famous} onChange={handleInputChange} />
                        </div>

                    </div>
                    <button type='submit' className='form-button'>{id ? "Update" : "Submit"}</button>
                </form>
            </div>
        </div>
    );
};

export default FormAddEdit;