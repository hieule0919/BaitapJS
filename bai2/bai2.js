function tinhTrungBinh(){
    var number1Value = document.getElementById("number1").value*1;
    var number2Value = document.getElementById("number2").value*1;
    var number3Value = document.getElementById("number3").value*1;
    var number4Value = document.getElementById("number4").value*1;
    var number5Value = document.getElementById("number5").value*1;

    var result = (number1Value + number2Value + number3Value + number4Value + number5Value ) / 5;
    console.log(result);
    document.getElementById("Result").innerText = "Trung binh cua 5 so tren la: " + result;
    
}