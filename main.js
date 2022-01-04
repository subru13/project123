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
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}

function gotPoses(result){
    if(results.length>0){
        console.log(results);
    }
}