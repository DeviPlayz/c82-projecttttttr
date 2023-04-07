
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "red";
radius = "";  
width = 2;

canvas.addEventListener("mousedown", my_mousedown);
canvas.addEventListener("mousemove", my_mousemove);


function my_mousedown(e)
{
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
    console.log(color);
    
    radius = document.getElementById("radius").value;
    console.log(radius);
    
    width = document.getElementById("width").value;
    mouseEvent = "mouseDown";

}

function my_mousemove(e)
{ 
	
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;
 
 if (mouseEvent == "mouseDown"
 {
 console.log("Current position of x and y coordinates = "
  console.log("x = " + current_position_of_mouse_x + "y = " +
  current_position_of_mouse_y);
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 ,2* Math.PI);
  ctx.stroke;

  }


function clearArea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

canvas.addEventListener("mouseup", my_mouseup);	
function my_mouseup(e)
{mouseEvent = "mouseup";}

canvas.addEventListener("mouseleave", my_mouseleave);	
function my_mouseleave(e)
{mouseEvent = "mouseleave";}
