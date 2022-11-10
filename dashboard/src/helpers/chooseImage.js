import autoImage from "../images/car.jpg"
import chadImage from "../images/giga_chad.jpg"
import sussyImage from "../images/sussy.jpg"
import sadImage from "../images/sad.jpg"
import happyImage from "../images/happy.jpg"
import saulImage from "../images/saul.jpeg"


function chooseImage(inputFromPopup){
    let toBeAddedImage;
    switch(inputFromPopup){
        case("Giga chad"):
            toBeAddedImage = chadImage;
            break;
        case("Auto"):
            toBeAddedImage = autoImage
            break;
        case("Saul"):
            toBeAddedImage = saulImage
            break;
        case("Happy"):
            toBeAddedImage = happyImage
            break;
        case("Sussy"):
            toBeAddedImage = sussyImage
            break;
        default:
            toBeAddedImage = sadImage
            break;
    }
    return toBeAddedImage
}

export default chooseImage;