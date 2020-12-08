import "./Header.css";

const Header = (props) => {
    return (
    <header className="Header">
        <h1>My Project 3</h1>
        <nav>
            <ul className="NavLink">
                <li>Logout</li>
                <li>Dashboard</li>
                <li>Signup</li>
                <li>Login</li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;