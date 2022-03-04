import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import axios from 'axios';

export default function NewBeerPage(){

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post(
            `https://ih-beers-api2.herokuapp.com/beers/new`,
            formData
        )
        .then((newData) => navigate(`/`))
        .catch((error) => console.log(error));
    };

    function handleChange(event){
        const inputName = event.target.name;
        const value = event.target.value;

        setFormData((formData) => {
            return {...formData, [inputName]: value};
        });
    }

    return (
        <div>
            <Header />
            <div className="formDiv">
                <form onSubmit={handleSubmit}>
                    <div className="formLabel">
                        <label>Name:</label>
                        <input type='text' name='name' onChange={handleChange} />
                    </div>

                    <div className="formLabel">
                        <label>Tagline:</label>
                        <input type='text' name='tagline' onChange={handleChange} />
                    </div>

                    <div className="formLabel">
                        <label>Description:</label>
                        <input type='textarea' name='description' onChange={handleChange} />
                    </div>

                    <div className="formLabel">
                        <label>First brewed:</label>
                        <input type='text' name='first_brewed' onChange={handleChange} />
                    </div>

                    <div className="formLabel">
                        <label>Brewer tips:</label>
                        <input type='text' name='brewer_tips' onChange={handleChange} />
                    </div>

                    <div className="formLabel">
                        <label>Attenuation level:</label>
                        <input type='number' name='attenuation_level' onChange={handleChange} />
                    </div>

                    <div className="formLabel">
                        <label>Created by:</label>
                        <input type='text' name='contributed_by' onChange={handleChange} />
                    </div>

                    <button type='submit'>Create</button>
                </form>
            </div>
        </div>
    );
}