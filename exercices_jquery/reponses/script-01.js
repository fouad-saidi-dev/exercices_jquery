//  chemin relatif : reponses/script-01.js
// 

//q1
$("#ce div:first").css("color","red");

//q2
$("#ce div:first").clone().appendTo("#ce div:last")

//q3
const lastDiv = $("#ce div:last");
lastDiv.detach().prependTo("#ce");

//q4
const lengthDiv = $("#ce div").length
const newDiv = $("<div>").css("color","gray").text("Nouvelle div "+lengthDiv)
$("#ce").append(newDiv)
console.log(lengthDiv)

//q5
$("#ce div").filter(function (index) {
    $(this).text($(this).text() + " " +(index + 1))
})