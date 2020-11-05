
var x;
x = 6;
document.getElementById("demo").innerHTML = x;


let autos = ['Bmw', 'Mercedes', 'Ferari']; 
var mensen = ['Tomas' , 'Roy' , 'Dave'];


for (let index = 0; index < mensen.length; index++) {
    var element = document.createElement("li");
    element.innerHTML = mensen[index];
    document.getElementById("lijsten").appendChild(element);
}


for (let index = 0; index < autos.length; index++) {
    var element = document.createElement("li");
    element.innerHTML = autos[index];
    document.getElementById("lijst").appendChild(element);
    
}



var test = document.createElement("input");
test.setAttribute("name", "alert");
test.setAttribute("onclick", "help()");
test.setAttribute("type", "button");
test.setAttribute("value", "Touch");
document.getElementById("formulier").appendChild(test);

function help(){
    alert('Javascript ');
}

