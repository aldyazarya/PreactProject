/* eslint-disable quotes */
/* eslint-disable object-curly-spacing */
/* eslint-disable semi */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */
import { h } from 'preact';

const ImageList = (prop) => {
    console.log(prop);

    const arrImages = prop.images.map((img) => {
        return (
            <div className="show-image d-flex justify-content-center align-content-center" align="center">
                <img className="m-3" src={img.urls.regular} style={{maxWidth: "712px"}} alt="images" />
            </div>
        )
    })

    return (
        <div>
            {arrImages}
        </div>
    )
    
}

export default ImageList;