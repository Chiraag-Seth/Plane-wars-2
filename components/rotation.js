AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
        speedOfRotation: {type: "number", default: 0}
    },
    init: function(){
        window.addEventListener("keyDown", (e) => {
            if(keyDown === "rightArrow"){
                if(this.data.speedOfRotation < 0.1){
                    this.data.speedOfRotation += 0.1
                }
            }
            if(e.key === "leftArrow"){
                if(this.speedOfRotation > 0.1){
                    this.data.speedOfRotation -= 0.1
                }
            }
        });
    },
    tick: function(){
        var mapRotation = this.el.getAttribute("rotation")

        mapRotation.y += this.data.speedOfRotation;

        this.el.setAttribute("rotation", {
            x: mapRotation.x,
            y: mapRotation.y,
            z: mapRotation.z
        })
    }
})

AFRAME.registerComponent("plane-rotation-reader", {
    schema: {
        speedOfRotation: {type: "number", default: 0},
        speedOfAscent: {type: "number", default: 0}
    },
    init: function(){
        window.addEventListener("keydown", (e)=>{
            this.speedOfRotation = this.el.getAttribute("rotation")
            this.speedOfAscent = this.el.getAttribute("position")

            var planeRotation = this.data.speedOfRotation;
            var planePosition = this.data.speedOfAscent;

            if(e.key === "ArrowRight"){
                if(planeRotation.x < 10){
                    planeRotation.x += 0.5;
                    this.el.setAttribute("rotation", planeRotation);
                }
            }
            if(e.key === "ArrowLeft"){
                if(planeRotation.x > 10){
                    planeRotation.x -= 0.5;
                    this.el.setAttribute("rotation", planeRotation);
                }
            }
            if(e.key === "ArrowDown"){
                if(planeRotation.z > 20){
                    planeRotation.z -= 0.5;
                    this.el.setAttribute("rotation", planeRotation);
                }
            if(planePosition > -2){
                planePosition.y -=0.01;
                this.el.setAttribute("position", planePosition) 
            }
            }
            if(e.key === "ArrowUp"){
                if(planeRotation.z < 20){
                    planeRotation.z += 0.5;
                    this.el.setAttribute("rotation", planeRotation);
                }
            if(planeRotation < 2){
                planePosition += 0.01;
                this.el.setAttribute("position", planePosition);
            } 
            }
        })
    }
})