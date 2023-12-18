import { useStyles } from '../StylesContext';
import Button from '../atoms/Button';

export const Header = () => {

    const { styles } = useStyles();

    return(
        <div className="header-container" style={{ background: styles.darkMode ? 'black' : 'white' }}>
            <h1 className="h1-header">MarketPlace</h1>
            <div className='nav-container'>
                <nav className="navbar-header">
                    <ul className="ul-header">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Nosotros</a></li>
                    </ul>
                </nav>
                <Button />
            </div>
        </div>
    );
};