hhh=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet= ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}


   
   function gotPoses(results)
   {
       if(results.length > 0)
       {
           console.log(results);
           
       
           leftWristX= results[0].pose.leftWrist.x;
           rightWristX= results[0].pose.rightWrist.x;
           hhh = floor (leftWristX - rightWristX)
   
           console.log("leftWristX =" + leftWristX + "rightWristX = " + rightWristX + "hhh = " + hhh);
       }
       
   }
   function draw() {
    background('pink');
    document.getElementById("idkidk").innerHTML="Width & Height of the text will be" + hhh +"px."
    textSize(hhh);
    fill('black');
    text('srishti' , 50, 100)
   }