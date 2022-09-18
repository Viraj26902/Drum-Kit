var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){ 
        var ch=this.innerHTML;
        makesound(ch);
    });
}
document.addEventListener("keypress",function(event){
        var ch=event.key;
        makesound(ch);
    });

function makesound(key)
{
    switch(key)
    {
        case "W":
            var audio=new Audio("Sounds/tom-1.mp3");
            audio.play();
            break;
        case "A":
            var audio=new Audio("Sounds/tom-2.mp3");
            audio.play();
            break;
        case "S":
                var audio=new Audio("Sounds/tom-3.mp3");
                audio.play();
                break;
        case "D":
            var audio=new Audio("Sounds/tom-4.mp3");
            audio.play();
            break;
        case "J":
            var audio=new Audio("Sounds/snare.mp3");
            audio.play();
            break;
        case "K":
            var audio=new Audio("Sounds/crash.mp3");
            audio.play();
            break;
        case "L":
            var audio=new Audio("Sounds/kick-bass.mp3");
            audio.play();
            break;
        case "w":
            var audio=new Audio("Sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("Sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
                var audio=new Audio("Sounds/tom-3.mp3");
                audio.play();
                break;
        case "d":
            var audio=new Audio("Sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("Sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("Sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("Sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(ch);
    }
}

