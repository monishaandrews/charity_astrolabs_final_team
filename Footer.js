import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li><Link to="/"  className="nav-item nav-link px-2 text-muted">HOME</Link></li>
                
                </ul>
                <p className="text-center text-muted">© 2022 CHARITY | Designed by: Bhavya, Emmanuel, Monisha, Tamara</p>
            </footer>
        </div>
    )
}

export default Footer;