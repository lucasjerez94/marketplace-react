import { useStyles } from '../StylesContext';

export const Hero = () => {

    const { styles } = useStyles();    

    return(
        <div className="hero-container" style={{ background: styles.backgroundColor, color: styles.textColor }} >
            <h1 className="h1-hero">Find your Template</h1>
            <p className="p-hero">
            Jumpstart your app development process with pre-built solutions from Vercel and our community.
            </p>
        </div>
    );
};