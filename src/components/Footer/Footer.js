import "./Footer.css";

const Footer = (props) => {
    return (
    <footer className="Footer">
        <div>
            Copyright &copy; My Project {new Date().getFullYear()} All Rights Reserved
        </div>
    </footer>
    )
}

export default Footer;