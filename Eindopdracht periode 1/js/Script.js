var count = 1;
var random = Math.floor((Math.random() * 10) + 1);
    console.log(random);

    setTimeout(start, 0);
    function start(start) {
        $("div").hide();
        $("div").fadeIn(600);
    }

function CheckNumber(i) {
        DisableButtons();

    if (i == random) {
        $("#jso").fadeOut(0);
        document.getElementById("jso").innerHTML = "Gefeliciteerd, je hebt het juiste getal geraden. Het juiste getal was " + random + ".";
        $("#jso").fadeIn(400);
        $("div").fadeOut();
        setTimeout(reload, 3000);
        setTimeout(reload2, 2300);
        return;
    }

        if (count < 3) {
            if (i <= random) {
                $("#jso").hide();
                document.getElementById("jso").innerHTML = "Het juiste getal is hoger.";
                $("#jso").fadeIn(400);
            }

             else {
                $("#jso").hide();
                document.getElementById("jso").innerHTML = "Het juiste getal is lager";
                $("#jso").fadeIn(400);
            }
                    $("div").fadeOut(400);
                    setTimeout(fade, 1500)
                    setTimeout(clear, 2000);
        } else {
            $("#jso").hide();
            document.getElementById("jso").innerHTML =  "Helaas, je hebt het getal niet kunnen raden. Het juiste getal was " + random + ".";
            $("#jso").fadeIn(400);
            $("div").fadeOut(400);
            setTimeout(reload, 3000);
            setTimeout(reload2, 2300);
            return;
        }       
        count++;
        setTimeout(ronde, 1650);  
}
function DisableButtons(){
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
    document.getElementById("button4").disabled = true;
    document.getElementById("button5").disabled = true;
    document.getElementById("button6").disabled = true;
    document.getElementById("button7").disabled = true;
    document.getElementById("button8").disabled = true;
    document.getElementById("button9").disabled = true;
    document.getElementById("button10").disabled = true;
}
function EnableButtons(){
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    document.getElementById("button4").disabled = false;
    document.getElementById("button5").disabled = false;
    document.getElementById("button6").disabled = false;
    document.getElementById("button7").disabled = false;
    document.getElementById("button8").disabled = false;
    document.getElementById("button9").disabled = false;
    document.getElementById("button10").disabled = false;
}
function reload(){
    window.location = "spel.html";
}
function reload2(){
    $("#jso").fadeOut(400);
}
function fade(){
    $("#jso").fadeOut();
}
function clear(){
    document.getElementById("jso").innerHTML = "&nbsp;";
    $("div").fadeIn(400);
    $("#jso").show();
    EnableButtons();
}
function ronde(){
$('#count').animate({'opacity': 0}, 400, function(){
        $(this).html('Ronde: ' + count).animate({'opacity': 1}, 400);    
    });
}
//Copyright 2016 ©JoostR.
//All Rights Reserved.