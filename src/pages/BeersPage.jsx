import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ListItem from '../components/ListItem';

export default function BeersPage() {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => setBeers(response.data))
        .catch(error => console.log(error));
    }, [])

    return beers.length !== 0 ? (
        <div>
            <Header />
            {beers.map(beer => (
                <Link to={`/beers/${beer._id}`} className='listLink'>
                    <ListItem beer={beer}/>
                    <hr/>
                </Link>
            ))}
        </div>
    ) : (
        <div>
            <Header />
            <h1>Please wait, beers are coming...</h1>
        </div>
    );
};