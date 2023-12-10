//  Chemin relatif : reponses/script-03.js
//  Chemin relatif : files/user.json

const addPre = $("#ce").append("<pre></pre>");

const addClass = $("#ce pre").addClass("language-javascript")

const addCode = addClass.append("<code></code>")

const dataa = $.ajax({
    method: "GET",
    url: "../../exercices_jquery/files/users.json",
    dataType: "text",
    success: function(data) {
        // Add the content to the pre element
        $("#ce pre code").text(data);
        Prism.highlight() 
    },
  })

console.log(dataa)



