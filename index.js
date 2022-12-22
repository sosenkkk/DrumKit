for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var button= this.innerHTML;
        makesound(button);
        moveButton(button);
    });
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    moveButton(event.key);
})

function makesound(key){
    switch (key) {
        case "w":
            playsound("sounds/tom-1.mp3");
                          
            break;
        case "a":
            playsound("sounds/tom-2.mp3");
                   
            break;
        case "s":
            playsound("sounds/tom-3.mp3");
                     
            break;
        case "d":
            playsound("sounds/tom-4.mp3");
                          
            break;
        case "l":
            playsound("sounds/snare.mp3");
                          
            break;
        case "j":
            playsound("sounds/crash.mp3");
                           
            break;
        case "k":
            playsound("sounds/kick-bass.mp3");
                         
            break;
        default:
            break;
    }
}
function playsound(location){
    sound = new Audio(location);
    sound.play();
}
function moveButton(currentKey){
    var active=document.querySelector("."+currentKey);
    active.classList.toggle("pressed");
    setTimeout(function(){
        active.classList.toggle("pressed");
    }, 100);

}