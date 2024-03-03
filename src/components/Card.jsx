import capeVerde from "../images/capeVerde.jpg";
import pinIcon from "../images/pin.svg";


export default function Card() {
    return (
        <div className="card">
            <img className="card__photo" src= { capeVerde } alt="Sand beach with trees" />
            <div className="card__info">
                <div className="info__destination">
                    <img src= { pinIcon } alt="Pin icon" />
                    <p className="uppercase">Cape Verde</p>
                    <a className="cl-gray" href="https://maps.app.goo.gl/EkYeTA5QyEfuKjWc9">View on Google Maps</a>
                </div>
                <h1 className="info__title">Santa Maria</h1>
                <p className="info__duration">Oct 01, 2019 - Oct 21, 2019</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer 
                    adipiscing elit. Mauris suscipit, ligula 
                    sit amet pharetra semper, nibh ante cursus 
                    purus, vel sagittis velit mauris vel metus. 
                    Aliquam ante. 
                </p>
            </div>
        </div>
    )
}