var video = "";
var objects= [];
function preload() {
    video = createVideo('video.mp4');
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video.hide();
}

function draw() {
    image(video, 0, 0, 400, 400);
    if(status != ""){
        objectDetector.detect(video, gotResult);
        for (let index = 0; index < objects.length; index++) {
            const element = objects[index];
            console.log(element);
            name= element.label;
            confidence= element.confidence;
            x= element.x;
            y= element.y;
            width= element.width;
            height= element.height;
            noFill();
            stroke("red");
            text(name, x+20, y+20);
            text(100*(confidence).toFixed(2)+"%", x+20, y+35);
            rect(x, y, width, height);
        }
    }
}

function startfunction() {
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelloaded() {
    console.log("Welcome!!:))):(((Meh");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult(error,results){
    if(error){
        console.log("error");
    }
    console.log(results);
    objects=results
}