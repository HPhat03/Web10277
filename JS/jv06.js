function print(){
    var name = document.forms["Form"]["username"].value;
        var text = "Chào mừng bạn " + name + "!";
    
    var gender = document.forms["Form"]["gd"].value;
        if (gender == "male") text += "&#13;&#10;Giới tính: nam &#13;&#10;"
        else text+="&#13;&#10;Giới tính: nữ &#13;&#10;";
    
    var pw = document.forms["Form"]["password"].value;
        text+= "Mật khẩu cảu bạn có " + pw.length + " ký tự&#13;&#10;";

    var date = document.forms["Form"]["date"].value;
    var now = new Date;
    var age = now.getFullYear()-parseInt(date.slice(0,4));
        text += "tuổi của bạn là " + age;
    
    var prb = document.forms["Form"]["ch"].value;
    text += "&#13;&#10;Vấn đề bạn quan tâm là " + prb;
    if(name == "" || gender == "" || isNaN(age) || prb=="" || pw=="")
    alert("Vui lòng điền đầy đủ thông tin!");
    else document.getElementById("result").innerHTML=text;
}