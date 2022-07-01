song_name = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreleftWrist = 0;
peter_pan_song = "";
harry_potter_theme_song = "";

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is initialized!");
}

function preload() {
    harry_potter_theme_song = loadSound("music.mp3");
    peter_pan_song = loadSound("music2.mp3");
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#00ff00");
    stroke("#ff0000");

    song_name = peter_pan_song.isPlaying();
    console.log(song_name);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + " Left Wrist Y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX + " Right Wrist Y = " + rightWristY);
    }
}