var canvas = new fabric.Canvas('myCanvas');

var superhero_block_width = 30;
var superhero_block_height = 30;

var player_x = 10;
var player_y = 10;

var player_image = "";
var block_image = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_image = Img;

        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player_image);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image = Img;

        block_image.scaleToWidth(superhero_block_width);
        block_image.scaleToHeight(superhero_block_height);
        block_image.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(block_image);
    });
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keyPressed = e.keyCode;

    if (e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift keys were pressed together");
        superhero_block_width = superhero_block_width + 10;
        superhero_block_height = superhero_block_height + 10;
        document.getElementById("current_width").innerHTML = superhero_block_width;
        document.getElementById("current_height").innerHTML = superhero_block_height;
    }
    if (e.shiftKey == true && keyPressed == '77'){
        console.log("m and shift keys were pressed together");
        superhero_block_width = superhero_block_width - 10;
        superhero_block_height = superhero_block_height - 10;
        document.getElementById("current_width").innerHTML = superhero_block_width;
        document.getElementById("current_height").innerHTML = superhero_block_height;
    }

    if (keyPressed == '38'){
        up();
        console.log("up");
    }
    if (keyPressed == '40'){
        down();
        console.log("down");
    }
    if (keyPressed == '37'){
        left();
        console.log("left");
    }
    if (keyPressed == '39'){
        right();
        console.log("right");
    }
    if (keyPressed == '70'){
        new_image('thor_face.png');
        console.log("f = face");
    }
    if (keyPressed == '66'){
        new_image('ironman_body.png');
        console.log("b = body");
    }
    if (keyPressed == '76'){
        new_image('spiderman_legs.png');
        console.log("l = legs");
    }
    if (keyPressed == '82'){
        new_image('thor_right_hand.png');
        console.log("r = right arm");
    }
    if (keyPressed == '72'){
        new_image('captain_america_left_hand.png');
        console.log("h = left arm");
    }
}

function up()
{
    if(player_y >= 0)
    {
        player_y = player_y - superhero_block_height;
        console.log("block image height = " + superhero_block_height);
        console.log("When Up Arrow Key Is Pressed X = "+ player_x + "and Y = " + player_y);
        canvas.remove(player_image);
        player_update();
    }
}

function down()
{
    if(player_y <=500)
    {
        player_y = player_y + superhero_block_height;
        console.log("block image height = " + superhero_block_height);
        console.log("When Down Arrow Key Is Pressed, X = " + player_x + "and Y = " + player_y);
        canvas.remove(player_image);
        player_update();
    }
}

function left()
{
    if(player_x >=0)
    {
        player_x = player_x - superhero_block_width;
        console.log("block image width = " + superhero_block_width);
        console.log("When Left Arrow Key Is Pressed, X = " + player_x + "and Y = " + player_y);
        canvas.remove(player_image);
        player_update();
    }
}

function right()
{
    if(player_x <=850)
    {
        player_x = player_x + superhero_block_width;
        console.log("block image width = " + superhero_block_width);
        console.log("When Right Arrow Key Is Pressed, X = " + player_x + "and Y = " + player_y);
        canvas.remove(player_image);
        player_update();
    }
}