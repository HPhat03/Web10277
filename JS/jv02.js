function dateIn(m, y){
    
    var year;
    switch (m){
        case 1:
        case 3: 
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
                return 31;
        case 2:
                if((y%400==0) || (y%100!=0 && y%4==0) )
                    return 29;
                else
                    return 28;
        case 4:
        case 6:
        case 9:
        case 11:
                return 30;
        default:
            return 0;
    }
}



function Nowaday(){
    var b = new Date;
    var thu= b.getDay()!=7 ? "Thứ " + b.getDay() : "Chủ Nhật";
    var ngay = b.getDate();
    var thang= b.getMonth();
    var nam=b.getFullYear();
    document.getElementById("Now").innerHTML = "Hôm nay, " + thu +" ngày " + ngay + " tháng " + thang + " năm " + nam;
}
function Clock(){
    var Dongho=setInterval(Clock, 1000);
    var b= new Date;
    var gio = b.getHours();
    var phut = b.getMinutes()<10 ? "0" + b.getMinutes() : b.getMinutes();
    var giay = b.getSeconds()<10 ? "0" + b.getSeconds() : b.getSeconds();
    document.getElementById("Clock").innerHTML = gio + ":" + phut + ":" + giay;
}