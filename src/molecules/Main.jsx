import TemplateCard from "../atoms/TemplateCard";

export const Main = () => {
    return(
        <div className="main-container">
            <TemplateCard
                title="California"
                content="Puente de California"
                imageSrc="https://media.timeout.com/images/105236338/image.jpg"
            />
            <TemplateCard
                title="New York"
                content="La estatua de la libertad"
                imageSrc="https://cdn.tiqets.com/wordpress/blog/wp-content/uploads/2017/08/03134557/24-hours-in-new-york-1.jpg"
            />
            <TemplateCard
                title="Rio de Janeiro"
                content="El Cristo Redentor"
                imageSrc="https://media.staticontent.com/media/pictures/e63f71e3-03fb-4c1b-a1e6-c8b1586a7e73"
            />
            <TemplateCard
                title="Buenos Aires"
                content="Ciudad de Buenos Aires"
                imageSrc="https://www.cronista.com/files/image/482/482394/6346c377ac000.jpg"
            />
            <TemplateCard
                title="Mendoza"
                content="Ciudad de Mendoza"
                imageSrc="https://images.squarespace-cdn.com/content/52efc94ae4b01409c74273d6/1545696838538-BSU2TX40XSCXGBAVE0IE/Mendoza.jpg?content-type=image%2Fjpeg"
            />
            <TemplateCard
                title="Bariloche"
                content="Ciudad de Bariloche"
                imageSrc="https://media-cdn.tripadvisor.com/media/photo-m/1280/15/6d/ea/db/alojamiento-en-bariloche.jpg"
            />
            <TemplateCard
                title="Paris"
                content="La Torre Eiffel"
                imageSrc="https://viajes.nationalgeographic.com.es/medio/2022/07/13/paris_37bc088a_1280x720.jpg"
            />
            <TemplateCard
                title="Mar del plata"
                content="Leon marino, ciudad de Mar del Plata"
                imageSrc="https://www.mardelplata.gob.ar/sites/default/files/texto_slide/xMDP2.jpg.pagespeed.ic.oKataM9oHk.jpg"
            />
            <TemplateCard
                title="Usuahia"
                content="Ciudad del fin del mundo"
                imageSrc="https://radio3cadenapatagonia.com.ar/wp-content/uploads/2023/02/ushuaia_turismo_letras.jpg"
            />
        </div>
    );
};