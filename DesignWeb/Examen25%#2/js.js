$("#pasAssez").hide();
$("#trop").hide();
$("#TypeA").hide();
$("#blanc").click(function(){
    $(".bg1").css("background-image",'url("img/background/blanc.jpg")');
});
$("#bleu").click(function(){
    $(".bg1").css("background-image",'url("img/background/bleu.jpg")');
});
$("#bleuFonce").click(function(){
    $(".bg1").css("background-image",'url("img/background/bleuFonce.jpg")');
});
$("#gris").click(function(){
    $(".bg1").css("background-image",'url("img/background/gris.jpg")');
});
$("#noir").click(function(){
    $(".bg1").css("background-image",'url("img/background/noir.jpg")');
});
$("#rose").click(function(){
    $(".bg1").css("background-image",'url("img/background/rose.jpg")');
});
$("#rouge").click(function(){
    $(".bg1").css("background-image",'url("img/background/rouge.jpg")');
});
$('#GO').click(function () {
    var nom =$('#Mot').val();
    var taille = nom.length;
    nom.toUpperCase();

    if (taille>=3){
        if (taille<=12){
            $("#pasAssez").hide();
            $("#trop").hide();
        }
        else {
            $("#trop").show();
            $("#pasAssez").hide();
        }
    }
    else{
        $("#pasAssez").show();
        $("#trop").hide();
    }
    for(var i = 0;i <= 12; i++){
        if (nom[i] === "*") {
            $("#lettre" +(i)).attr("src","img/CS/CS1.jpg");
        }
        else{
            $("#lettre"  +(i)).attr("src","img/"+nom[i]+"/"+nom[i]+"1.jpg");
        }
    }
    if("#mot".length===3) {
        $("#col1").attr("class", "col-xl-4");
        $("#col2").attr("class", "col-xl-4");
        $("#col3").attr("class", "col-xl-4");
        $("#col4").hide();
        $("#col5").hide();
        $("#col6").hide();
        $("#col7").hide();
        $("#col8").hide();
        $("#col9").hide();
        $("#col10").hide();
        $("#col11").hide();
        $("#col12").hide();
    }
    else
        {
            if ("#mot".length === 4) {
                $("#col1").attr("class", "col-xl-3");
                $("#col2").attr("class", "col-xl-3");
                $("#col3").attr("class", "col-xl-3");
                $("#col4").attr("class", "col-xl-3");
                $("#col5").hide();
                $("#col6").hide();
                $("#col7").hide();
                $("#col8").hide();
                $("#col9").hide();
                $("#col10").hide();
                $("#col11").hide();
                $("#col12").hide();
            } else {
                if ('#mot'.length === 5) {
                    $("#col1").attr("class", "col-xl-2");
                    $("#col2").attr("class", "col-xl-2");
                    $("#col3").attr("class", "col-xl-2");
                    $("#col4").attr("class", "col-xl-2");
                    $("#col5").attr("class", "col-xl-2");
                    $("#col6").attr("class", "col-xl-2");
                    $("#col7").hide();
                    $("#col8").hide();
                    $("#col9").hide();
                    $("#col10").hide();
                    $("#col11").hide();
                    $("#col12").hide();
                } else {
                    if ('#mot'.length === 6) {
                        $("#col1").attr("class", "col-xl-2");
                        $("#col2").attr("class", "col-xl-2");
                        $("#col3").attr("class", "col-xl-2");
                        $("#col4").attr("class", "col-xl-2");
                        $("#col5").attr("class", "col-xl-2");
                        $("#col6").attr("class", "col-xl-2");
                        $("#col7").hide();
                        $("#col8").hide();
                        $("#col9").hide();
                        $("#col10").hide();
                        $("#col11").hide();
                        $("#col12").hide();
                    } else {
                        if ('#mot'.length >= 7) {
                            $("#col1").attr("class", "col-xl-1");
                            $("#col2").attr("class", "col-xl-1");
                            $("#col3").attr("class", "col-xl-1");
                            $("#col4").attr("class", "col-xl-1");
                            $("#col5").attr("class", "col-xl-1");
                            $("#col6").attr("class", "col-xl-1");
                            $("#col7").attr("class", "col-xl-1");
                            $("#col8").attr("class", "col-xl-1");
                            $("#col9").attr("class", "col-xl-1");
                            $("#col10").attr("class", "col-xl-1");
                            $("#col11").attr("class", "col-xl-1");
                            $("#col12").attr("class", "col-xl-1");
                        }
                    }
                }
            }
        }

});

