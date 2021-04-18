import '../style/header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/commands">Commands</Link>
                <Link to="/random">Login</Link>
            </nav>
        </div>
    )
}
export default Header;