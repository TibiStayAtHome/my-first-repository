$('p').click((event) => {
console.log("Event Excercise 1")
});

$("#First").click((event) => {
console.log("Log Yeah")
});


$("#Second").click((event) => {
    $("#First").text("Log Yeah Changed by second button")
    });

$(function() {

$('#Third').on('click', function() {
 $('#input1').val('blue')
    });  

});  

$("#Third").click((event) => {
$("#First").css("background", "green")
$("#Second").css("background", "yellow")
$("#Third").css("background", "Blue")
$("#input1").text("Blue")
});

$('#input1').on('click', function() {
    $('#first').css('background', 'blue')
       }); 
