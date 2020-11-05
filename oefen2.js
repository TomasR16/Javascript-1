var homesweethome  = {
    inhoud: "120m3",
    oppervlakte: "160m2",
    plaats: "Assen",
    soortwoning: "Twee onder een kap" 
};
document.write("<h2>Soort woning:</h2>");
document.write(homesweethome.inhoud + "<br>");
document.write(homesweethome.oppervlakte + "<br>");
document.write(homesweethome.plaats + "<br>");
document.write(homesweethome.soortwoning + "<br>");

// a)
document.write("<br>");
document.write("<h2>Applicatie Ontwikkelaar</h2>");
var zin = "Applicatie Ontwikkelaar ";
document.write(zin.length + " is de lengte van de zin: <br>");
// b)
var plek = zin.indexOf("Ontwikkelaar");
document.write(plek + " Hier staat Ontwikkelaar <br>");
// c)
var zoeken = zin.search("wikkelaar");
document.write(zoeken + " op deze plek staat wikkelaar <br>");
//d)
var slicen = zin.slice(14,-6);
document.write(slicen + "<br>");
//e)
var vervang = zin.replace("Ontwikkelaar" , "programmeur");
document.write(vervang + "<br>");
//f)
var hoofd = zin.toUpperCase();
document.write(hoofd + "<br>")

//opdracht 3 
var woord = "Opleiding";
for(x = 0; x < woord.length; x++){
    document.write(woord.charAt(x) + "<br>");
}
document.write("<br>");


//opdracht 4

var cijfer = 6.325;

function myFunction(){
    //to fixed is voor afronden 
    var num = 6.325;
    var n = num.toFixed(2);
    document.getElementById("demo").innerHTML = n;
    // valueOf Is voor hele getal 
    var nummer = 15.454;
    var t = nummer.valueOf();
    document.getElementById("demo1").innerHTML = t;
}

// opdracht 5
//a 
var namen = ['Zoe', 'Bram', 'Clarissa', 'Isa'];
for (i=0; i < namen.length; i++){
    document.write(namen[i] + "<br>")
}
//b
document.write("<br>");
var p = 0;
while (p < namen.length){
    document.write(namen[p] + "<br>");
    p++;
} 




