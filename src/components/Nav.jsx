import airbnbLogo from '/assets/airbnb-logo.svg'
function Nav() {
    return (
        <nav className="nav">
            <img className='nav--airbnb-logo' src={airbnbLogo} alt="airbnb-logo" />
        </nav>
    )
}
export default Nav;