const root = document.getElementById("viewpoint");
const c = root.getContext("2d");

//degrees to radians function
function dtr(d) {
    return d *(Math.PI/180);
}

c.lineWidth = 20;


//RED
c.strokeStyle = "#db3236";
c.beginPath();
c.arc(125, 125, 60, dtr(190), dtr(300), false);
c.stroke();

//YELLOW
c.strokeStyle = "#f4c20d";
c.beginPath();
c.arc(125, 125, 60, dtr(190), dtr(150), true);
c.stroke();

//GREEN
c.strokeStyle = "#3cba54";
c.beginPath();
c.arc(125, 125, 60, dtr(150), dtr(50), true);
c.stroke();

//BLUE
c.strokeStyle = "#4885ed";
c.beginPath();
c.arc(125, 125, 60, dtr(50), dtr(0), true);
c.stroke();

// BLUE LINE
c.beginPath();
c.moveTo(125,125);
c.lineTo(195,125);
c.stroke();
c.closePath();


