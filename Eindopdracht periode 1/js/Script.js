//Laat eerst de html laten voordat dit wordt uigevoert, is leeg omdat anders mijn functies niet meer werken.
window.onload = function () { }
//counter om de rondes bij te houden.
var count = 1;
//rng
var random = Math.floor((Math.random() * 10) + 1);
console.log(random);

//laat meteen de onderste 4 functies uitvoeren.
setTimeout(start, 0);
function start() {
    //laat het helpmenu en meermenu weg.
    $("#helpmenu").hide();
    $("#meermenu").hide();
    //haalt het keuzemenu weg en laat het daarna zien met een fadeIn die 600ms duurt.
    $("#div").hide();
    $("#div").fadeIn(600);
}

//functie CheckNumber waar "i" de waarde 1 t/m 10 kan hebben afhankelijk van welke knop je hebt ingedrukt.
function CheckNumber(i) {
    //roept DisableButtons functie aan.
    DisableButtons();
    //als i gelijk is aan random voert hij dit uit.
    if (i == random) {
        $("#jso").hide(0);                                                                                                                              //verbergt het element met id jso.
        document.getElementById("jso").innerHTML = "Gefeliciteerd, je hebt het juiste getal geraden. Het juiste getal was " + random + ".";             //veranderd het element met id jso naar de code tussen quotes.
        setTimeout(congratz, 700);                                                                                                                      //roept functie congratz aan na 700ms.
        setTimeout(congratzsluit, 2000);                                                                                                                //roept functie congratzsluit aan na 2000ms.
        $("#jso").fadeIn(400);                                                                                                                          //laat element met id jso in faden in 400ms.
        $("#div").fadeOut();                                                                                                                            //laat het keuze menu uit faden met 1000ms
        setTimeout(reload, 3000);                                                                                                                       //roept functie reload aan na 3000ms.
        setTimeout(reload2, 2300);                                                                                                                      //roept functie reload2 aan na 2300ms.
        console.log("Joost Roza");
        return;                                                                                                                                         //sluit de gehele functie CheckNumber af.
    }
    //checkt je rondes.
    if (count < 3) {
            //kijkt of je getal groter is aan random
        if (i <= random) {
            //maakt element met id jso onzichtbaar
            $("#jso").hide();
            //geeft je feedback
            document.getElementById("jso").innerHTML = "Het juiste getal is hoger.";
            //laat de feedback in faden in 400ms
            $("#jso").fadeIn(400);
        }

        else {
            //maakt element met id jso onzichtbaar
            $("#jso").hide();
            //geeft je feedback
            document.getElementById("jso").innerHTML = "Het juiste getal is lager";
            //laat de feedback in faden in 400ms
            $("#jso").fadeIn(400);
        }

        //laat het keuzemenu langzaam uit faden
        $("#div").fadeOut(400);
        //roept functie fade aan na 1500ms
        setTimeout(fade, 1500)
        //roept functie clear aan na 2000ms
        setTimeout(clear, 2000);

    } else {
        $("#jso").hide();                                                                                                                   //verbergt element met id jso
        document.getElementById("jso").innerHTML = "Helaas, je hebt het getal niet kunnen raden. Het juiste getal was " + random + ".";     //vervangt de text in element met id jso voor text ussen de quotes
        setTimeout(failed, 700);                                                                                                            //roept functie failed aan na 700ms
        setTimeout(failedstop, 2000);                                                                                                       //roept functie failedstop aan na 2000ms
        $("#jso").fadeIn(400);                                                                                                              //laat het element met id jso in faden in 400ms 
        $("#div").fadeOut(400);                                                                                                             //laat het element met id div uit faden na 400ms
        setTimeout(reload, 3000);                                                                                                           //roept functie reload aan na 3000ms
        setTimeout(reload2, 2300);                                                                                                          //roept functie reload2 aan na 2300ms
        console.log("Joost Roza");
        return;                                                                                                                             //stopt de functie
    }
    count++;                                                                                                                                //add +1 aan var count
    setTimeout(poging, 1650);                                                                                                               //roept functie poging aan na 1650ms
}

function DisableButtons() {
    //disabeled alle buttons in de code.
    $(".buttons").attr('disabled', 'disabled');
}
function EnableButtons() {
    //enabeled alle buttons weer in de code
    $(".buttons").removeAttr('disabled');
}
function reload() {
    //reload te page
    window.location = "spel.html";
}
function reload2() {
    //laat element met id jso uit faden in 400ms
    $("#jso").fadeOut(400);
}
function fade() {
    //laat element met id jso uit faden in 1000ms
    $("#jso").fadeOut();
}
function clear() {
    document.getElementById("jso").innerHTML = "&nbsp;";        //vervangt de text in element met id jso met een spatie
    $("#div").fadeIn(400);                                      //laat het element met id div in faden in 400ms
    $("#jso").show();                                           //laat element met is jso meteen zien
    EnableButtons();                                            //roept functie Enable Buttons aan
}
function poging() {
    //animatie voor de pogingcount
    $('#count').animate({ 'opacity': 0 }, 400, function () {
        $(this).html('poging: ' + count).animate({ 'opacity': 1 }, 400);
    });
}

function helpmenu() {
    $("#helpmenu").fadeIn(600);                             //laat element met id helpmenu in faden in 600ms
    $("#meermenu").fadeOut(600);                            //laat element met id meermenu uit faden na 600ms
}
function sluithelp() {
    $("#helpmenu").fadeOut(600);                            //verbonden aan een knop in html, laat element met id helpmenu uit faden in 600ms.
}
function meermenu() {
    $("#meermenu").fadeIn(600);                             //laat element met id meermenu in faden in 600ms
    $("#helpmenu").fadeOut(600);                            //laat element met id helpmenu uit faden in 600ms
}
function sluitmeer() {                                      //knop verbonden aan knop in html 
    $("#meermenu").fadeOut(600);                            //laat element met id meermenu sluiten in 600ms
}
function congratz() {
    $("#gzzz").fadeIn(600);                                 //laat element met id gzzz in faden in 600ms (winnars gif)
}
function congratzsluit() {                                  //sluit de winnaarsgif in 600ms
    $("#gzzz").fadeOut(600);
}
function failed() {
    $("#failed").fadeIn(600);                               //laat element met id failed infaden in 600ms (als je verliest)
}
function failedstop() {                                     
    $("#failed").fadeOut(600);                              //laat het element met id failed uitfaden in 600ms (als je verliest)
}

//16 ©JoostR.
//All Rights Reserved.