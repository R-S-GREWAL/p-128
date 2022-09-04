sound = "";
leftWristX = 0;
leftWristY =0;
rightWristX = 0;
rightWristY =0;
function setup()
{
  canvas=createCanvas(250,250);
  canvas.center();

  video= createCapture(VIDEO);
  video.hide();

  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotPoses);
}
function preload()
{
  sound = loadSound("music.mp3");
}
function draw()
{
  image(video, 0, 0, 250, 250);

}
function play()
{
    sound.play();
    sound.setVolume(1);
    sound.rate(1);
}
function gotPoses(results)
{
    leftWristX= results[0].pose.leftWrist.x;
    leftWristY= results[0].pose.leftWrist.y;
    console.log("LeftWristX= "+leftWristX+"LeftWristY= "+leftWristY);

    rightWristX= results[0].pose.rightWrist.x;
    rightWristY= results[0].pose.rightWrist.y;
    console.log("rightWristX= "+rightWristX+"rightWristY= "+rightWristY);
  }