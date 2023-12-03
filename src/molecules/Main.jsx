import TemplateCard from "../atoms/TemplateCard";

export const Main = () => {
    return(
        <div className="main-container">
            <TemplateCard
                title="Titulo1"
                content="Descripcion del producto"
                imageSrc="https://st3.depositphotos.com/1007682/14847/v/450/depositphotos_148478001-stock-illustration-isolated-clean-water-blue-drop.jpg"
            />
        </div>
    );
};