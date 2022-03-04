export default function ListItem(props){
    return(
        <div className="listItem">
            <div className='imgContainer'>
                <img src={props.beer.image_url} alt={props.beer.name} style={{'height':'150px'}}  />
            </div>
            <div className="itemTextContainer">
                <h1>{props.beer.name}</h1>
                <h2>{props.beer.tagline}</h2>
                <p>Created by: {props.beer.contributed_by}</p>
            </div>
        </div>
    );
};