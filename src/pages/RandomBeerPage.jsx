import Header from "../components/Header";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function RandomBeerPage () {

    const [randomBeer, setRandomBeer] = useState({});

    useEffect(()=>{
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response => setRandomBeer(response.data))
        .catch(error => console.log(error));
    }, [])

    return randomBeer._id ? (
        <div>
            <Header />
            <div>
                <div className='detailsImg'>
                    <img src={randomBeer.image_url} alt='' style={{'height':'330px'}}/>
                </div>
                <hr/>
                <div className='divTitles'>
                    <div className='divTitles2'>
                        <h1>{randomBeer.name}</h1>
                        <h1>{randomBeer.attenuation_level}</h1>      
                    </div>
                    <div className='divTitles2'>
                        <h3>{randomBeer.tagline}</h3>
                        <h3>{randomBeer.first_brewed}</h3>
                    </div>
                </div>
                    <p>{randomBeer.description}</p>
                    <p>{randomBeer.contributed_by}</p>
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
}