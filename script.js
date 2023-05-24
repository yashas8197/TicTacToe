let b1,b2,b3,b4,b5,b6,b7,b8,b9;
b1 = document.getElementById('b1').value;
b2 = document.getElementById('b2').value;
b3 = document.getElementById('b3').value;
b4 = document.getElementById('b4').value;
b5 = document.getElementById('b5').value;
b6 = document.getElementById('b6').value;
b7 = document.getElementById('b7').value;
b8 = document.getElementById('b8').value;
b9 = document.getElementById('b9').value;

function func1(){
// 1
if((b1 == 'x' || b1 == 'X') && (b2 == 'x'|| b2 == 'X') && (b3 == 'x' || b3 == 'X')){
    document.getElementById('directions').innerHTML = "player X won"
    document.getElementById('b4').disabled = true
    document.getElementById('b5').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b8').disabled = true
    document.getElementById('b9').disabled = true
}
// 2
else if((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X')){
    document.getElementById('directions').innerHTML = "player X won"
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b8').disabled = true
    document.getElementById('b9').disabled = true
}
// 3
else if((b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X')){
    document.getElementById('directions').innerHTML = "player X won"
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b5').disabled = true
    document.getElementById('b6').disabled = true
}
// 4
else if((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X')){
    document.getElementById('directions').innerHTML = "player X won"
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b5').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b8').disabled = true
    document.getElementById('b9').disabled = true
}
// 5
else if((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X')){
    document.getElementById('directions').innerHTML = "player X won"
    document.getElementById('b1').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b9').disabled = true
}
// 6
else if((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X')){
    document.getElementById('directions').innerHTML = "player X won"
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b5').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b8').disabled = true
}
// 7
else if((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X')){
    document.getElementById('directions').innerHTML = "player X won"
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b8').disabled = true
}
// 8
else if((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')){
    document.getElementById('directions').innerHTML = "player X won"
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b8').disabled = true
    document.getElementById('b9').disabled = true
}

if((b1 == 'o' || b1 == 'O') && (b2 == 'o'|| b2 == 'O') && (b3 == 'o' || b3 == 'O')){
    document.getElementById('directions').innerHTML = "player O won"
    document.getElementById('b4').disabled = true
    document.getElementById('b5').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b8').disabled = true
    document.getElementById('b9').disabled = true
}

else if((b4 == 'o' || b4 == 'O') && (b5 == 'o' || b5 == 'O') && (b6 == 'o' || b6 == 'O')){
    document.getElementById('directions').innerHTML = "player O won"
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b8').disabled = true
    document.getElementById('b9').disabled = true
}

else if((b7 == 'o' || b7 == 'O') && (b8 == 'o' || b8 == 'O') && (b9 == 'o' || b9 == 'O')){
    document.getElementById('directions').innerHTML = "player O won"
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b5').disabled = true
    document.getElementById('b6').disabled = true
}

else if((b1 == 'o' || b1 == 'O') && (b4 == 'o' || b4 == 'O') && (b7 == 'o' || b7 == 'O')){
    document.getElementById('directions').innerHTML = "player O won"
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b5').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b8').disabled = true
    document.getElementById('b9').disabled = true
}

else if((b2 == 'o' || b2 == 'O') && (b5 == 'o' || b5 == 'O') && (b8 == 'o' || b8 == 'O')){
    document.getElementById('directions').innerHTML = "player O won"
    document.getElementById('b1').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b9').disabled = true
}

else if((b3 == 'o' || b3 == 'O') && (b6 == 'o' || b6 == 'O') && (b9 == 'o' || b9 == 'O')){
    document.getElementById('directions').innerHTML = "player O won"
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b5').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b8').disabled = true
}

else if((b1 == 'o' || b1 == 'O') && (b5 == 'o' || b5 == 'O') && (b9 == 'o' || b9 == 'O')){
    document.getElementById('directions').innerHTML = "player O won"
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b8').disabled = true
}

else if((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')){
    document.getElementById('directions').innerHTML = "player O won"
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b8').disabled = true
    document.getElementById('b9').disabled = true
}

else if((b3 == 'o' || b3 == 'O') && (b5 == 'o' || b5 == 'O') && (b7 == 'o' || b7 == 'O')){
    document.getElementById('directions').innerHTML = "player O won"
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b8').disabled = true
    document.getElementById('b9').disabled = true
}
else if((b1 == 'x' || b1 == 'o') && (b2 == 'x' || b2 == 'o') && (b3 == 'x' || b3 == 'o') && (b4 == 'x' || b4 == 'o') && (b5 == 'x' || b5 == '0') && (b6 == 'x' && b6 == 'o') && (b7 == 'x' && b7 == 'o') && (b8 == 'x' && b8 == 'o') && (b9 == 'x' && b9 == 'o')){
    document.getElementById('directions').innerHTML = "Match is tie"
}
else{
    if(turn == 1){
        document.getElementById('directions').innerHTML = 'player X turn'
    }
    else{
        document.getElementById('directions').innerHTML = 'player o trun'
    }
}

}
