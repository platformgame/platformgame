import platform from './platform';

var canvas = document.getElementById("gameArea");
var ctx = canvas.getContext("2d");
var inMenu = true;
(function() {
        window.addEventListener('resize', resizeCanvas, false);
        
        function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                if(inMenu){
                    ctx.font = "120px monospace";
                    ctx.fillStyle = "white";
                    ctx.textAlign = "center";
                    ctx.fillText("Platform Game", canvas.width/2, canvas.height/2);
                    ctx.font = "50px monospace";
                    ctx.fillText("Click to begin!", canvas.width/2, canvas.height/2+50)
                }
        }
        resizeCanvas();
})();

canvas.addEventListener("mousedown", function() {
    if(inMenu){
        document.getElementById("gameArea").style.background = 'black';
        inMenu = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //var platform = new Platform(1, 50, 3, 50);
    }
});