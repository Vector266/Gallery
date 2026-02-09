var numImages = 1;
var countDiv=10;

function leftClick()
{
   console.log("нажали кнопку <<");
   numImages--;
   changeImages();
}

function rightClick()
{
    console.log("нажали кнопку >>");
    numImages++;
    changeImages();
}

function changeImages() {
    let delayTime = 0;
    let speedDelay = 200;
    $(".images div").each(function () {
        delayTime++;
        $(this).fadeOut(speedDelay*delayTime, function() {
                $(this).css('background-image', 'url("./'+numImages+'.jpg');
                $(this).fadeIn(speedDelay*delayTime);
            }
        );
    })
}

$(document).ready(function() {
   for(let i=0; i<countDiv; i++)
    {
        html = "<div></div>";
        let  objectDiv = $(html);
        objectDiv.css("width", "70px");
        objectDiv.css('background-image', 'url("./'+numImages+'.jpg');
        objectDiv.css('background-position-x', '-'+i*70+'px');
        objectDiv.appendTo(".images");
    }

});