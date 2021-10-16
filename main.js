let dragValue;

        move = id => {
            let element = document.getElementById("theDiv");
            element.style.position = "absolute";
            element.onmousedown = () => dragValue = element;
            
        }
        document.onmouseup = e => dragValue = null;
        
        document.onmousemove = e => {
            let x = e.pageX;
            let y = e.pageY;

            dragValue.style.left = x + "px";
            dragValue.style.top = y + "px";
        }