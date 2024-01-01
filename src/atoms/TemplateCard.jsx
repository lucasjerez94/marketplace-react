import { useStyles } from '../StylesContext';

const TemplateCard = ({ title, content, imageSrc }) => {
  const { styles } = useStyles();

  return (
    <div className="templatecard-container" style={{ background: styles.backgroundColor, color: styles.textColor }}>
      <div className="img-templatecard">
        <img className="card-image" src={imageSrc} alt={title} />
      </div>
      <h3 className="h3-templatecard">{title}</h3>
      <p className="p-templatecard">{content}</p>
    </div>
  );
};

export default TemplateCard;