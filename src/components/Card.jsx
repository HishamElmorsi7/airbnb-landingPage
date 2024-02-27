import bikeImg from '../assets/bike.jpeg'
import starImg from '../assets/star.svg'
import dotImg from '../assets/dot.svg'
export default function Card() {
    return(
        <section className="card">
            <img className='card--img' src={bikeImg} />
            <div className="card--review">
                <img className='card--star' src={starImg} />
                <p className='card--review--rating'>5.0</p>
                <p className='card--review--count'>(6)</p>
                <img className='card--review--dotImg' src={dotImg}/>
                <p className='card--review--country'>USA</p>
            </div>

            <div className='card--title'>
                <p>Life lessons with Katie Zaferes</p>
            </div>

            <div className='card--price'>
                <p><span>From $136</span> / person</p>
            </div>
        </section>
    )
}