//  Chemin relatif : reponses/script-04.js
//  Chemin relatif : files/user.json

const get = $.ajax({
    url: "../../exercices_jquery/files/users.json",  // Replace with the correct path to your users.json file
    dataType: "json",
    success: function(users) {
        
        $("#ce").append("<table>")
        var tableId = $("#ce table").css("border",2)
        var tbody = $("<tbody></tbody>").appendTo(tableId)
        var thead = $("<thead></thead>").appendTo(tableId)
        var newCol = $("<tr></tr>").appendTo(thead)
        var newRow1 = $("<td></td>").appendTo(newCol).text("Email")
        var newRow2 = $("<td></td>").appendTo(newCol).text("Token")
        
        $.each(users, function(index, user) {
        
           
            var newRow = $("<tr></tr>").appendTo(tbody)
            
            newRow.append($("<td>").text(user.email));
            newRow.append($("<td>").text(user.token));
            
            $("#userTable tbody").append(newRow);
        });
    },
    error: function(xhr, status, error) {
        console.error("Error loading users.json:", error);
    }
});

console.log(get)






