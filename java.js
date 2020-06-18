function calculate() {
    var value1 = parseInt(document.getElementById("value1").value);
    var value2 = parseInt(document.getElementById("value2").value);

    var selected = document.getElementById("selector").value;
    var calcul;

    if (selected == "add") {
        calcul = value1 + value2;
    } else if (selected == "minus") {
        calcul = value1 - value2;
    } else if(selected == "multiply") {
        calcul = value1 * value2; 
    } else if(selected == "divide") {
        calcul = value1 / value2;
    };

    document.getElementById("answer").innerHTML = calcul;
};

