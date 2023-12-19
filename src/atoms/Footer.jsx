import { useStyles } from '../StylesContext';

export const Footer = () => {

    const { styles } = useStyles();

    return(
        <div className="footer-container" style={{ background: styles.backgroundColor, color: styles.textColor }}>
            <p className="p-footer">@MarketPlace</p>
        </div>
    );
};