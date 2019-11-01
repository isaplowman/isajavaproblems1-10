//ISAS SCRIPT DO NOT TOUCH

//write first method



function sleep_in(weekday,vacation) {
    if(!weekday || vacation){
        return true;
    }else{
        return false;
    }
}


//write second method

function monkey_trouble(a_smile, b_smile) {
    if(a_smile && b_smile){
        return true;
    }
    if(!a_smile && !b_smile){
        return true;
    }else{
        return false;
    }
}


//third

function string_times(string, n){
    var newS = "";
    for(var i = 0; i < n; i++){
        newS = newS + string;
    }
    return newS;
}


//fourth

function front_times(string, n){
    var newS = "";
    for(var i = 0; i < n; i++){
        var firstThree = string.substring(0,3);
        newS = newS + firstThree;
    }
    return newS;
}


//fifth

function string_bits(string){
    var newSt = "";
    for(var i= 0; i < string.length; i= i + 2){
        if(i % 2 == 0){
            newS = string.substring(i, i + 1);
            newSt = newSt + newS
        }
    }
    return newSt;
}



//six

function caughtSpeeding(speed, birthday){
    var ticket = "";
    if(birthday == true){
        if(speed <= 65){
            ticket = 0;
        }
        if(speed >= 66 && speed <= 85){
            ticket = 1;
        }
        if(speed > 85){
            ticket = 2;
        }
    }else{
        if(speed <= 60){
            ticket = 0;
        }
        if(speed > 60 && speed <= 80){
            ticket = 1;
        }
        if(speed > 80){
            ticket = 2;
        }
    }
    return ticket;

}



// seven

function fizz_buzz(string){
    var num = "";
    if(string % 3 == 0 && string % 5 == 0){
        num = "FizzBuzz";
    }
    if(string % 3 == 0 && string % 5 != 0){
        num = "Fizz";
    }
    if(string % 5 == 0 && string % 3 != 0){
        num = "Buzz";
    }
    if(string % 5 != 0 && string % 3 !=0){
        num = string + "!";
    }
    return num;
}



// eight

function teaParty(tea, candy){
    var rate = "";
    if(tea >= 5 && candy >= 5){
        rate = 1;
        if(tea >= candy * 2 || candy>= tea * 2){
            rate = 2;
        }
    }else{
        rate = 0;
    }
    return rate;

}




// nine

function blackjack(x, y){
    var jack = 0;
    if(x > 0 && y > 0){
        if(x == 21 || y == 21){
            jack = 21;
            return jack;
        }
        if(x > 21 && y > 21){
            jack = 0;
            return jack;
        }
        if(x >= y){
            if(x > 21){
                jack = y;
            }else {
                jack = x;
            }
        }
        if(y >= x){
            if(y > 21){
                jack = x;
            }else {
                jack = y;
            }
        }

    }
    return jack;
}




//ten and last

function loneSum(a, b, c){
    var sum = 0;
    sum = a + b +c;
    if(a == b){
        sum = c;
    }
    if(a == c){
        sum = b;
    }
    if(b == c){
        sum = a;
    }
    if(a == b && b == c){
        sum = 0;
    }
    return sum;

}







function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(true, false);
    document.getElementById("output").innerHTML += front_times(true, false);
    document.getElementById("output").innerHTML += string_bits(true, false);
    document.getElementById("output").innerHTML += caughtSpeeding(true, false);
    document.getElementById("output").innerHTML += fizz_buzz(true, false);
    document.getElementById("output").innerHTML += teaParty(true, false);
    document.getElementById("output").innerHTML += blackjack(true, false);
    document.getElementById("output").innerHTML += loneSum(true, false);
}

