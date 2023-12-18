import { useStyles } from '../StylesContext';

const TemplateCard = ({title, content, imageSrc}) => {

  const { styles } = useStyles();

  return (
    <div className="templatecard-container" style={{ background: styles.darkMode ? 'black' : 'white' }}>
      <div className="card-container">
        <img className="card-image" src={imageSrc} alt={title}/>
        <h3 className="h3-templatecard">{title}</h3>
        <p className= "p-templatecard">{content}</p>
      </div>
    </div>
  );
};

export default TemplateCard;