noseX = 0;
noseY = 0;

function preload()
{
 clown_nose = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png", modelLoaded)
}

function setup()
{
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    video.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is inittialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw()
{
 image(video,0, 0, 300, 300);
 image(clown_nose, noseX-20, noseY+29, 30, 30);
}

function take_snapshot()
{
      SVGAKlement('myFilterImage.png')
}