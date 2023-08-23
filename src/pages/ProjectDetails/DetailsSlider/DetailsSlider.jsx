import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const DetailsSlider = () => {
    const images = [
        {
            original: "https://i.ibb.co/ncQvHQj/img-1.png",
            thumbnail: "https://i.ibb.co/ncQvHQj/img-1.png"
        },
        {
            original: "https://i.ibb.co/t8QXgG9/img-2.png",
            thumbnail: "https://i.ibb.co/t8QXgG9/img-2.png"
        },
        {
            original: "https://i.ibb.co/G7GYYYt/img-4.png",
            thumbnail: "https://i.ibb.co/G7GYYYt/img-4.png"
        },
        {
            original: "https://i.ibb.co/S0P9W9n/img-3.png",
            thumbnail: "https://i.ibb.co/S0P9W9n/img-3.png"
        }
    ];
    return (
        <div className="bgImage bg-cover text-sm rounded-[20px]">
            <ImageGallery
                items={images}
                slideInterval={500}
                slideOnThumbnailOver={true}
                
            />
        </div>
    );
};

export default DetailsSlider;