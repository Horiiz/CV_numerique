$(document).ready(function () {
    console.log('Le code Javascript est en cours de chargement');
    $("#prenom").css({"background-color":"#ff6961"});
    $("#email").css({"background-color":"#ff6961"});
    
    $("#prenom").on("keyup", function () {
        var content = $(this).val()
        //console.log(content.length)
        if(content.length == 0)
        {
            $(this).css({"background-color":"#ff6961"})
        }
        else
        {
            $(this).css({"background-color":"#77DD77"})
        }
    });
})
