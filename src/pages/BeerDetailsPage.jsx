import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';


export default function BeerDetailsPage(){

    const [beer, setBeer] = useState({});
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=>{
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then(response => setBeer(response.data))
        .catch(error => console.log(error));
    }, [id])

    return beer._id ? (
        <div>
            <Header />
            <div>
                <div className='detailsImg'>
                    <img src={beer.image_url} alt='' style={{'height':'330px'}}/>
                </div>
                <hr/>
                <div className='divTitles'>
                    <div className='divTitles2'>
                        <h1>{beer.name}</h1>
                        <h1>{beer.attenuation_level}</h1>      
                    </div>
                    <div className='divTitles2'>
                        <h3>{beer.tagline}</h3>
                        <h3>{beer.first_brewed}</h3>
                    </div>
                </div>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                <div>

                </div>
            </div>
        </div>
    ) : (
        <div>
            <Header />
            <h1>Please wait, beers are coming...</h1>
        </div>
    )
};