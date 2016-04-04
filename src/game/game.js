import Platform from '../game/objects/platform';
import Floor from '../game/objects/floor';
import Enemy from '../game/objects/enemy'

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
var enemies = [];
function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Floor.draw(ctx);
    enemies[enemies.length] = new Enemy(10, "Dwarf");
    for (var i = 0, len = enemies.length; i < len; i++) {
        if(enemies[i] != null){
            enemies[i].draw(ctx);
            if(enemies[i].x <= 0){
                delete enemies[i];
            }
        }
    }
}

canvas.addEventListener("mousedown", function() {
    if(inMenu){
        document.getElementById("gameArea").style.background = 'black';
        inMenu = false;
        setInterval(loop, 10);
    }
});