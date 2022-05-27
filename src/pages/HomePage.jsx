import { Link } from 'react-router-dom';
import imgBeers from '../assets/beers.png';
import imgRandom from '../assets/random-beer.png';
import imgNew from '../assets/new-beer.png';

export default function HomePage(){
    return (
        <div>
            <Link to='/beers' className='HP1'>
                <div>
                <img src={imgBeers} alt=''/>
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a elementum tortor, ullamcorper pharetra eros. Nunc iaculis quam vel risus cursus, sed molestie velit hendrerit. Sed vel ante tempus ante scelerisque sagittis.</p>
                </div>
            </Link>
            <Link to='/random-beer' className='HP1'>
                <div>
                <img src={imgRandom} alt=''/>
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a elementum tortor, ullamcorper pharetra eros. Nunc iaculis quam vel risus cursus, sed molestie velit hendrerit. Sed vel ante tempus ante scelerisque sagittis.</p>
                </div>
            </Link>
            <Link to='/new-beer' className='HP1'>
                <div>
                <img src={imgNew} alt=''/>
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a elementum tortor, ullamcorper pharetra eros. Nunc iaculis quam vel risus cursus, sed molestie velit hendrerit. Sed vel ante tempus ante scelerisque sagittis.</p>
                </div>
            </Link>
        </div>
    );
};
