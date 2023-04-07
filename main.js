
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "red";
radius = "";  
width = "2";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.stroke();

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
    console.log(width);
    
    //addition activity ends
    
     mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);    
}
function my_mousemove(e)
{  mouse_x = e.clientX - canvas.offsetLeft;
 mouse_y = e.clientY - canvas.offsetTop;
 
 if (mouseEvent == "mouseMove"
 {
 console.log("Current position of x and y coordinates = "
  console.log("x = " + current_position_of_mouse_x + "y = " +
  current_position_of_mouse_y);
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.arc(current_position = width_of_line_of_mouse_x, current_position_of_mouse_y, radius ,0 ,2* Math.PI);
  ctx.stroke;

  }
function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.stroke();
}

//additional activity

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

	
