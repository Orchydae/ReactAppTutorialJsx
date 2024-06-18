import profilePic from './assets/shiba.jpg'
import './Card.css';

function Card() {

    return (
        <div className="card">
            {/*<img src="https://via.placeholder.com/150" alt="Placeholder profile picture"></img>*/}

            <img className="card-image" src={profilePic} alt="Profile picture"></img>
            <h2 className="card-title">Banh</h2>
            <p className="card-text">Dietitian and future software engineer</p>
        </div>
    );

}

export default Card;