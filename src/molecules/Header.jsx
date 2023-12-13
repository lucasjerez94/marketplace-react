import Button from '../atoms/Button';

export const Header = () => {
    return(
        <div className="header-container">
            <h1 className="h1-header">MarketPlace</h1>
            <nav className="navbar-header">
                <ul className="ul-header">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Nosotros</a></li>
                </ul>
            </nav>
            <Button />
        </div>
    );
};