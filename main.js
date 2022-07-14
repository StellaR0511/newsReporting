



noseX = 0;
noseY = 0;


function setup(){
canvas = createCanvas(400,300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
video.size(400,300);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}
function preload(){
headset = loadImage("https://i.postimg.cc/gkM444yX/headset-picture-id182776995-1.png");
}
function draw(){
image(video,0,0,400,300);
image(headset,noseX,noseY,200,200);
}
function modelLoaded(){
console.log("Model Loaded!");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX = results[0].pose.nose.x-100;
    noseY = results[0].pose.nose.y-130;
    console.log("Nose x = "+noseX);
    console.log("Nose y = "+noseY);
}
}

function changeColor(){
    let colorPicker = document.getElementById("colorInputPicker").value;
    if(colorPicker != null){
    document.body.style.backgroundColor = colorPicker;
   }
}
function changeTextColor(){
    let colorTextPicker = document.getElementById("colorInputTextPicker").value;
    if(colorTextPicker != null){
    document.body.style.color = colorTextPicker;
   }
}

function setHeadline(){
    let headline = document.getElementById("news_headline").value;
    if(headline != null){
        document.getElementById("headline").innerHTML = headline;
    }
}