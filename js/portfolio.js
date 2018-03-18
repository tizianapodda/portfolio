//Attach event when user click item in menu
$("#desktop-menu li a").on("click", function(){
    $("#desktop-menu li a").css("color","#989898");
    $(this).css("color","#ffffff");
});

//Animate outline-circle-2 -> test1 / test2
function addPercentage(elementId)
{
    var percentageX = parseInt($("#" + elementId).css("top"));
    var percentageY = parseInt($("#" + elementId).css("left"));

    percentageX = percentageX + 0.1;
    percentageY = percentageY + 0.1;

    $("#" + elementId).css("top", percentageX + "%");
    $("#" + elementId).css("left", percentageY + + "%");

    console.log(percentageX);
    console.log(elementId);
}