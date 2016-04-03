var canvas = document.getElementById("gameArea");
var ctx = canvas.getContext("2d");
var inMenu = true;
(function() {
        window.addEventListener('resize', resizeCanvas, false);
        
        function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                if(inMenu){
                    ctx.font = "10vw monospace";
                    ctx.fillStyle = "white";
                    ctx.textAlign = "center";
                    ctx.fillText("Platform Game", canvas.width/2, canvas.height/2);
                    ctx.font = "3vw monospace";
                    ctx.fillText("Click to begin!", canvas.width/2, canvas.height/2+50)
                }
        }
        resizeCanvas();
})();

canvas.addEventListener("mousedown", function() {
    if(inMenu){
        inMenu = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});