import autoImage from "../images/car.jpg"
import chadImage from "../images/giga_chad.jpg"


function chooseImage(inputFromPopup){
    let toBeAddedImage;
    switch(inputFromPopup){
        case("Giga chad"):
            toBeAddedImage = chadImage;
            break;
        case("Auto"):
            toBeAddedImage = autoImage
            break;
        default:
            break;
    }
    return toBeAddedImage
}

export default chooseImage;