import Button from "./componente/button.js";
import Input from "./componente/input.js";
import Video from "./componente/video.js";

let mySuperArrayofStrings = ["Login", "Signup", "Reset", "Cancel"];
let inputArray = ["Username", "Surname", "E-mail", "Password"];
let inputArrayFiltered = inputArray.filter( element => element=="Password");


function RenderButton(text) {
    let myButton = new Button("myApp", text);
    myButton.render();
}

function RenderInput(type) {

    let input_type = "none"

    switch (type) {
        case "Password":
            input_type = "password"
            break;
        case "E-mail":
            input_type = "email";
            break;
        default:
            input_type = "text"
            break;
            
    }

    let myInput = new Input("myApp", input_type);
    myInput.render();
}


mySuperArrayofStrings.forEach(element => {
    RenderButton(element)
});

inputArrayFiltered.forEach(function (element) {
    RenderInput(element);
});

let myVideo = new Video("videoID", "https://www.youtube.com/watch?v=rsTLyukvxGU&t=68s", 289, 320, "video/mp4");
myVideo.render();