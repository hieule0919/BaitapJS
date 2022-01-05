function tinhTong(){
    var soValue = document.getElementById("number").value *1;

    var soHangChuc = soValue %10;
    var soHangDonVi = Math.floor(soValue/10);

    var result = soHangChuc +soHangDonVi; 

    document.getElementById("Result").innerText = "Tong cua 2 so tren la :" + result;
}