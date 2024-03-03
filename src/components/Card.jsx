import pinIcon from "../images/pin.svg";

export default function Card() {
    return (
        <div className="card">
            <div className="card__destination">
                <img src= { pinIcon } alt="Pin icon" />
                <p>Cape Verde</p>
                <a href="https://maps.app.goo.gl/EkYeTA5QyEfuKjWc9">View on Google Maps</a>
            </div>
            <h1>Santa Maria</h1>
            <p>Oct 01, 2019 - Oct 21, 2019</p>
            <p>
                Lorem ipsum dolor sit amet, consectetuer 
                adipiscing elit. Mauris suscipit, ligula 
                sit amet pharetra semper, nibh ante cursus 
                purus, vel sagittis velit mauris vel metus. 
                Aliquam ante. 
            </p>
        </div>
    )
}