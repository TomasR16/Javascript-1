//zwart blok van tr id 13
var zwart = 13;
var buiten = [1, 2, 3, 4, 5];


//als op keycode onkeydown dan drukt begint case 
document.onkeydown = function(e){
    switch(e.keyCode){
        case 38:
        if(zwart == 6 || zwart == 7 || zwart == 8 ||zwart == 9||zwart == 10||zwart == 11||zwart == 12||zwart == 13||zwart == 14||zwart == 15||zwart == 16|| zwart == 17||zwart == 18||zwart == 19|| zwart == 20||zwart == 21|| zwart == 22||zwart == 23||zwart == 24||zwart == 25){
            zwart = zwart - 5;
        }
        
        break;        
        case 40:
        if(zwart <=20){    
            zwart = zwart + 5;
        }
        break;
        
        
        case 39: 
        if(zwart == 1||zwart == 2||zwart == 3||zwart == 4||zwart == 6||zwart == 7||zwart == 8||zwart == 9||zwart == 11||zwart == 12||zwart == 13||zwart == 14||zwart == 16||zwart == 17||zwart == 18||zwart == 19||zwart == 21||zwart == 22||zwart == 23||zwart == 24){
            zwart = zwart  +1;
        }
        break;    
        
        case 37:
        if(zwart == 2||zwart == 3||zwart == 4||zwart == 5||zwart == 7||zwart == 8||zwart == 9||zwart == 10||zwart == 12||zwart == 13||zwart == 14||zwart == 15||zwart == 17||zwart == 18||zwart == 19||zwart == 20||zwart == 22||zwart == 23||zwart == 24||zwart == 25){
            zwart = zwart -1;
        }
        break;
        
        default:
        console.log(e.keyCode);
    }
    update();
};

//de pakt alle tables en geeft ze een lege achtergrond 
function update(){
    for(var i = 1 ; i < 26; i++){
        document.getElementById(i).style.backgroundColor = "";
    }
    // dege met het id van zwart krijgt een black achtergrond
    document.getElementById(zwart).style.backgroundColor = "BLACK";
}

update();