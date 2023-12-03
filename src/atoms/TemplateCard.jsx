  const TemplateCard = ({title, content, imageSrc}) => {

  return (
    <div className="templatecard-container">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-container">
        <h3 className="h3-templatecard">{title}</h3>
        <p className= "p-templatecard">{content}</p>
      </div>
    </div>
  );
};

export default TemplateCard;