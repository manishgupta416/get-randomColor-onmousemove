
 const colorChange = document.querySelector('#color-change');
 colorChange.addEventListener("mousemove", myScript);

 function myScript(e) {
    console.log(e)
    var x  = e.offsetY;
    var y  = e.y
   var  z = e.offsetX;
    //y = e.offsetY;
    colorChange.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;

    
 }


