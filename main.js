noseX = 0;
noseY = 0;
difference = 0;
rightWristX=0;
leftWristX=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw(){
    background('#969a97');
    textSize(difference);
    fill(#B2AA);
    text('Suhaila',10, 10);
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

        leftWristX=results[0].pose.leftwrist.x;
        rightWristX=results[0].pose.rightwrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}