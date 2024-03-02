import starImg from '/assets/star.svg'
import dotImg from '/assets/dot.svg'

export default function Card(props) {
    let badgeText;
    if(props.item.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.item.location === 'Online') {
        badgeText= 'ONLINE'
    }


    return(
        <section className="card">
            {badgeText && <div className='badge'>{badgeText}</div>}
            <img className='card--img' src={`/assets/${props.item.coverImg}`} />
            <div className="card--review">
                <img className='card--star' src={starImg} />
                <p className='card--review--rating'>{props.item.stats.rating}</p>
                <p className='card--review--count'>({props.item.stats.reviewCount})</p>
                <img className='card--review--dotImg' src={dotImg}/>
                <p className='card--review--country'>{props.item.location}</p>
            </div>

            <div className='card--title'>
                <p>{props.item.title}</p>
            </div>

            <div className='card--price'>
                <p><span>From ${props.item.price}</span> / person</p>
            </div>
        </section>
    )
}