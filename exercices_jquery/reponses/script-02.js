//  chemin relatif : reponses/script-02.js
$("#go").on("click", function () {
    $("#ce .box").map(function (index) {
        $(this).delay(500*index).fadeOut("slow");
    });

    setTimeout(() => {
        $("#ce .box").map(function (index) {
        $(this).delay(500*index).fadeIn("slow");
    });
    }, 5000);
    
});

console.log("test")







