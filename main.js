noseX = 0;
noseY = 0;
RightWristX = 0;
LeftWristX = 0;
difference =0;

function setup() {

video = createCapture(VIDEO);
video.size(350,300);
video.position(120,220);

canvas = createCanvas(300,300);
canvas.position(810,220);

poseNet = ml5.poseNet(video,modelLoaded);

poseNet.on("pose",gotposes);
}



function modelLoaded(){

console.log("Posenet is Initialized");

}


function draw() {

background("white");
document.getElementById("font_size").innerHTML = "font size = " + difference ;
word = document.getElementsByTagName("input")[1].value;
textSize(difference);
fill(document.getElementsByTagName("input")[0].value);
text(word,noseX,noseY)
    
}



function gotposes(results) {
if (results.length > 0) {

console.log(results);
noseX = results[0].pose.nose.x ; 
noseY = results[0].pose.nose.y ; 

RightWristX = results[0].pose.rightWrist.x ;
LeftWristX = results[0].pose.leftWrist.x ;

difference = floor(LeftWristX - RightWristX);


}}