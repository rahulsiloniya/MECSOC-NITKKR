import '../style/hero.css'

function Hero() {
    return (
        <>
            <div className='hero'>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Teams</a></li>
                        {/* <li><a href="#">Home</a></li> */}
                    </ul>
                </nav>

                <h1 className='name'>MECHSOC</h1>
                <p className='description'>
                    The official society for mechanical 
                    engineers of NIT Kurukshetra.
                </p>

            </div>
        </>
    )
}

export default Hero