import '../style/header.css';
import { Link } from "react-router-dom";
import discordLogo from "../static/discord_ava.png"

function Header() {
    return (
        <div className="Header">
            <Link to="/">
                <img className="header-logo" src={discordLogo}/>
            </Link>
                
            <nav>
                <Link className='header-link' to="/">Home</Link>
                <Link className='header-link' to="/commands">Commands</Link>
                <Link className='header-link' to="/random">Login</Link>
            </nav>
        </div>
    )
}
export default Header;