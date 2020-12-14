import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
    return (
    <header className="Header">
        <Link to="/">
            <h1 id="animalCrossingVillagers">Animal Crossing Villagers</h1>
        </Link>
        <nav>
            <ul className="NavLink">
                {
                    props.user ? 
                    <>
                        <li><Link to="" onClick={props.handleLogout}>Logout</Link></li>
                        <li><Link to="/villagers">Villagers</Link></li>
                    </>
                    :
                    <>
                        <li><Link to="/signup">Signup</Link>
                        </li>
                        <li><Link to="/login">Login</Link></li>
                    </>
                }
            </ul>
        </nav>
    </header>
    )
}

export default Header;