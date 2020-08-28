const root = document.getElementById("viewpoint");
const c = root.getContext("2d");

//degrees to radians function
function dtr(d) {
    return d *(Math.PI/180);
}

c.lineWidth = 20;

/* This function interchanges the lineTo() function on two radiuses (oR and iR) interpreted as two circles with an inner and outer radius. rX and rY are the mathematical starting point for each calculation.  */
function fivestar(rX, rY, oR, iR) {
    let rotation = Math.PI / 2 * 3;
    let x = rX;
    let y = rY;
    const phase = Math.PI / 5;


    c.beginPath();
    c.moveTo(rX, rY - oR)

    for (i = 0; i < 5; i++) {
        x = rX + Math.cos(rotation) * oR;
        y = rY + Math.sin(rotation) * oR;
        
        c.lineTo(x, y)
        rotation += phase

        x = rX + Math.cos(rotation) * iR;
        y = rY + Math.sin(rotation) * iR;
        c.lineTo(x, y)

        rotation += phase
    }

    c.lineTo(rX, rY - oR)
    c.closePath();

    c.lineWidth = 5;

    c.strokeStyle = 'white';
    c.stroke();

    c.fillStyle = 'white';
    c.fill();

}

function changecolor() {
    
    //WHITE
    c.fillStyle = "#white";
    c.beginPath();
    c.arc(125, 125, 105, 0, 2*Math.PI);
    c.fill();

    //RED
    c.fillStyle = "#db3236";
    c.beginPath();
    c.arc(125, 125, 85, 0, 2*Math.PI);
    c.fill();

    //WHITE
    c.fillStyle = "white";
    c.beginPath();
    c.arc(125, 125, 65, 0, 2*Math.PI);
    c.fill();


    //BLUE
    c.fillStyle = "#001a6e";
    c.beginPath();
    c.arc(125, 125, 45, 0, 2*Math.PI);
    c.fill();
    // WHITE STAR
    fivestar(125, 125, 37, 15);
}

function mainState() {
    
    //RED
    c.fillStyle = "#db3236";
    c.beginPath();
    c.arc(125, 125, 105, 0, 2*Math.PI);
    c.fill();

    //WHITE
    c.fillStyle = "white";
    c.beginPath();
    c.arc(125, 125, 85, 0, 2*Math.PI);
    c.fill();

    //RED
    c.fillStyle = "#db3236";
    c.beginPath();
    c.arc(125, 125, 65, 0, 2*Math.PI);
    c.fill();


    //BLUE
    c.fillStyle = "#001a6e";
    c.beginPath();
    c.arc(125, 125, 45, 0, 2*Math.PI);
    c.fill();

    // WHITE STAR
    fivestar(125, 125, 37, 15);
}



