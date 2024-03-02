import heroGrid from '/assets/hero-grid.png'
function Hero(){
    return (
        <section className='hero'>
            <img className='hero--grid' src={heroGrid} alt="college of images" />
            <div className="hero--info">
                <h1 className='hero--info-title'>Online Experiences</h1>
                <p className='hero--info--description'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}

export default Hero