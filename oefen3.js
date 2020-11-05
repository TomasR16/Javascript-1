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
document.write("<br>");
//c 
document.write(namen);
//d
document.write("<br>");
document.write("<br>"); 
document.write(namen.length);
//e
document.write("<br>")
document.write("<br>")
namen.push("Gerrit");
document.write(namen + "<br>");
//f
document.write("<br>");
document.write(namen.join(" # "));
//g
document.write("<br>");
document.write("<br>")
document.write(namen.sort() + "<br>");