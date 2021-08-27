canvas = document.getElementById("myCanvas");
color = "blue";
//Workable Code
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(300,400,40,0,2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);


color = "black";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(400,400,40,0,2*Math.PI);
ctx.stroke();

color = "yellow";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(350, 450, 40 ,0 , 2*Math.PI);
ctx.stroke();

color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(500,400,40,0,2*Math.PI);
ctx.stroke();

color = "green";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(450, 450, 40 ,0 , 2*Math.PI);
ctx.stroke();

function my_mousedown(e)
{
    mouse_x = e.clientX - canvas.offsetLeft;;
    mouse_y = e.clientY - canvas.offsetTop;;

    console.log("X = " + mouse_x + "  ,Y = "+ mouse_y);
    circle(mouse_x , mouse_y);
}

function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth= 2;
    ctx.arc(mouse_x , mouse_y, 40 , 0 , 2*Math.PI);
    ctx.stroke();
}