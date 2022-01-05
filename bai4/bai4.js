function tinhPS(){

    var lengthValue = document.getElementById("length").value*1;
    var widthValue = document.getElementById("width").value*1;

    var result1 = lengthValue * widthValue ;
    var result2 = (lengthValue + widthValue) *2;

    document.getElementById("Result2").innerText = "Chu vi hinh chu nhat la: " +result2  ;
    document.getElementById("Result1").innerText = "Dien tich hinh chu nhat la: " +result1 ;
    
}