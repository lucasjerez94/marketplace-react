import TemplateCard from "../atoms/TemplateCard";

export const Main = () => {
    return(
        <div className="main-container">
            <TemplateCard
                title="Titulo1"
                content="Descripcion del producto"
                imageSrc="https://st3.depositphotos.com/1007682/14847/v/450/depositphotos_148478001-stock-illustration-isolated-clean-water-blue-drop.jpg"
            />
            <TemplateCard
                title="Titulo2"
                content="Descripcion 2 del producto"
                imageSrc="https://png.pngtree.com/png-clipart/20210308/original/pngtree-hand-drawn-public-welfare-water-drop-illustration-png-image_5764590.jpg"
            />
        </div>
    );
};