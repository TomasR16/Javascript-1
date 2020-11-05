var voornaam = "Tomas";
var achternaam = "Ruiters";
document.getElementById("firstname").innerHTML = voornaam;
document.getElementById("lastname").innerHTML = achternaam;


var x, y, t , w; // variabelen met een een int er in 
var t, z, a, k, i; // variabelen voor som 
x = 5;    
y = 6;
t = 7;    
w = 3;
//som maken 
//reken volgorde
z = x + y;  
s = x + y - t;
a = s / w;
k = (t - x) * w;
i = (x + y) / w;

//document.getElementById("demo").innerHTML = "The value of z is " + z + ".";
//document.getElementById("som").innerHTML = "The value of s is " + s;
//document.getElementById("som2").innerHTML = "The valeu of a is " + a;
//document.getElementById("som3").innerHTML = "The valeu of k is " + k;
//document.getElementById("som4").innerHTML = "The valeu of i is " + i;

//var bereken =  a, b;
a = 10;
b = 10;
operator = '*';

function bereken (p1, p2, op){

    if(op == '+'){
      uitkomst =  p1 + p2;
    }
    else if (op == '-'){
      uitkomst = p1 - p2;
    }
    else if (op == '*'){
      uitkomst = p1 * p2;
    }
    else if (op == '/'){
       uitkomst = p1 / p2;
    }
    else{
        uitkomst = "Niet geldig!";
    }
    return uitkomst;
        }

document.getElementById("rekenen").innerHTML = bereken(a, b, operator);