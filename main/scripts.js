var date = new Date();
var month = date.getMonth() + 1; //months from 1-12
var day = date.getDate();
var year = date.getFullYear();

var newdate = month + "/" + day + "/" + year;

document.getElementById("date").innerHTML = newdate;


function myFunction() {
 	var x = document.getElementById("spinner");
  	if (x.style.display === "block") {
    	x.style.display = "none";
  		} else {
    	x.style.display = "block";
  	} 
    document.getElementById("globe").style.display = "none"
    document.getElementById("bubblewrap").style.display = "none"
    document.getElementById("milkcup").style.display = "none"
     document.getElementById("tp").style.display = "none"
      document.getElementById("cubes").style.display = "none"
      document.getElementById("mms").style.display = "none"
}

function myFunctionglobe(){
var x = document.getElementById("globe");
    if (x.style.display === "block") {
        x.style.display = "none";
        } else {
        x.style.display = "block";
    }
    document.getElementById("spinner").style.display = "none"
    document.getElementById("bubblewrap").style.display = "none"
    document.getElementById("milkcup").style.display = "none"
     document.getElementById("tp").style.display = "none"
      document.getElementById("cubes").style.display = "none"
      document.getElementById("mms").style.display = "none"
}
function myFunctionbubblewrap(){
var x = document.getElementById("bubblewrap");
    if (x.style.display === "flex") {
        x.style.display = "none";
        } else {
        x.style.display = "flex";
    }
    document.getElementById("spinner").style.display = "none"
    document.getElementById("globe").style.display = "none"
    document.getElementById("milkcup").style.display = "none"
    document.getElementById("tp").style.display = "none"
     document.getElementById("cubes").style.display = "none"
     document.getElementById("mms").style.display = "none"
}

function myFunctionmilk(){
var x = document.getElementById("milkcup");
    if (x.style.display === "block") {
        x.style.display = "none";
        } else {
        x.style.display = "block";
    }
    document.getElementById("spinner").style.display = "none"
    document.getElementById("globe").style.display = "none"
    document.getElementById("bubblewrap").style.display = "none"
    document.getElementById("tp").style.display = "none"
     document.getElementById("cubes").style.display = "none"
     document.getElementById("mms").style.display = "none"
}

function myFunctiontp(){
var x = document.getElementById("tp");
    if (x.style.display === "block") {
        x.style.display = "none";
        } else {
        x.style.display = "block";
    }
    document.getElementById("milkcup").style.display = "none"
    document.getElementById("spinner").style.display = "none"
    document.getElementById("globe").style.display = "none"
    document.getElementById("bubblewrap").style.display = "none"
    document.getElementById("cubes").style.display = "none"
    document.getElementById("mms").style.display = "none"
}

function myFunctioncube(){
var x = document.getElementById("cubes");
    if (x.style.display === "block") {
        x.style.display = "none";
        } else {
        x.style.display = "block";
    }
    document.getElementById("milkcup").style.display = "none"
    document.getElementById("spinner").style.display = "none"
    document.getElementById("globe").style.display = "none"
    document.getElementById("bubblewrap").style.display = "none"
    document.getElementById("tp").style.display = "none"
    document.getElementById("mms").style.display = "none"
}

function myFunctionmm(){
var x = document.getElementById("mms");
    if (x.style.display === "block") {
        x.style.display = "none";
        } else {
        x.style.display = "block";
    }
    document.getElementById("milkcup").style.display = "none"
    document.getElementById("spinner").style.display = "none"
    document.getElementById("globe").style.display = "none"
    document.getElementById("bubblewrap").style.display = "none"
    document.getElementById("tp").style.display = "none"
     document.getElementById("cubes").style.display = "none"
}

// spinner crefit: https://code.sololearn.com/WCCvRnAP9bnW/#html

onload=main;
var vel,theta,t,spinner;
function main()
{
    vel=0;
    theta=0;
    spinner=document.getElementById("fidget-spinner");
    
}
function accelerate()
{
    navigator.vibrate(50);
    vel+=400;
    if(vel==400)
    {
        t=setInterval(spin,10);
    }
}
function spin()
{
    theta+=vel*0.01;
    theta=theta%360; spinner.style.transform="rotate("+theta+"deg)";
    theta=theta%360; spinner.style.transform="translate("-50%", "-50%")";
    theta=theta%360; spinner.style.transformOrigin="center";
   
    if(vel<=0)
    {
        clearInterval(t);
        return;
    }
    vel=vel-vel*vel/500000;
}
function stopper()
{	navigator.vibrate(100);
    clearInterval(t);
    vel=0;
}

//stressball
function globe(){
    document.getElementById("globe").classList.toggle('globe');
}

// bubblewrap
function pop() {
  event.target.src = "https://res.cloudinary.com/dznxo1ydn/image/upload/v1588129056/IMG_3282_4_b02jqf.jpg"
}

var x = document.getElementById("myAudio"); 

        function playAudio() { 
          x.play(); 
   
            } 


// milk

var clickCounter = 0;
function milk() {
        document.getElementById("carton").classList.toggle('pour');
        clickCounter++;
        if (clickCounter == 1) {

            document.getElementById("cup2").style.display = "block"
        }
        if (clickCounter == 2) {
            document.getElementById("cup3").style.display = "block"
        }
        if (clickCounter == 3) { 
            document.getElementById("cup4").style.display = "block"
        }
    };

//toothpaste 


function squeeze1() {
     // event.target.src = "https://res.cloudinary.com/dznxo1ydn/image/upload/v1588643159/t1_nocgak.png"
    document.getElementById("squeeze2").style.display = "block"
    document.getElementById("squeeze1").style.display = "none"
    document.getElementById("squeeze3").style.display = "none"
    document.getElementById("squeeze4").style.display = "none"
}

function squeeze2() {
    document.getElementById("squeeze3").style.display = "block"
    document.getElementById("squeeze2").style.display = "none"
    document.getElementById("squeeze1").style.display = "none"
      document.getElementById("squeeze4").style.display = "none"
}
function squeeze3() {
    document.getElementById("squeeze4").style.display = "block"
     document.getElementById("squeeze2").style.display = "none"
     document.getElementById("squeeze3").style.display = "none"
     document.getElementById("squeeze1").style.display = "none"
}

function squeeze4() {
    document.getElementById("squeeze1").style.display = "block"
     document.getElementById("squeeze2").style.display = "none"
     document.getElementById("squeeze3").style.display = "none"
     document.getElementById("squeeze4").style.display = "none"
}


// cube 
function rotate() {
   document.getElementById("cubegif").style.display = "block"
    document.getElementById("cube1").style.display = "none"
}


dragElement(document.getElementById("blue"));
dragElement(document.getElementById("blue1"));
dragElement(document.getElementById("blue2"));
dragElement(document.getElementById("blue3"));
dragElement(document.getElementById("blue4"));
dragElement(document.getElementById("blue5"));
dragElement(document.getElementById("blue6"));
dragElement(document.getElementById("red1"));
dragElement(document.getElementById("red2"));
dragElement(document.getElementById("red3"));
dragElement(document.getElementById("red4"));
dragElement(document.getElementById("red5"));
dragElement(document.getElementById("red6"));
dragElement(document.getElementById("red7"));
dragElement(document.getElementById("ye1"));
dragElement(document.getElementById("ye2"));
dragElement(document.getElementById("ye3"));
dragElement(document.getElementById("ye4"));
dragElement(document.getElementById("ye5"));
dragElement(document.getElementById("ye6"));
dragElement(document.getElementById("ye7"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id )) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}







