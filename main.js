canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

greencar_width=100;
greencar_height=90;

greencar_x=10;
greencar_y=10;

background_image="concrete-road.jpg";
rover_image="car2.png";

function add(){
    background_image1=new Image();
    background_image1.onload=uploadBackground;
    background_image1.src=background_image;

   greencar_image1=new Image();
    greencar_image1.onload=uploadrover;
    greencar_image1.src=greencar_image;
}

function uploadBackground(){
    ctx.drawImage(background_image1, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_image1, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38'){
    up();
    console.log("up");
}

if(keyPressed=='40'){
    down();
    console.log("down");
}

if(keyPressed=='37'){
    left();
    console.log("left");
}

if(keyPressed=='39'){
    right();
    console.log("right");
}
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10
        uploadBackground();
        uploadrover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10
        uploadBackground();
        uploadrover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10
        uploadBackground();
        uploadrover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10
        uploadBackground();
        uploadrover();
    }
}