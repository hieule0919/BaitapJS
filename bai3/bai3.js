function convertMoney(){

    var dollarsValue = document.getElementById("dollars").value*1;

    var result = dollarsValue * 23500;
    console.log(result);

    document.getElementById("Result").innerText = "So tien viet cua ban la: " + result;
}