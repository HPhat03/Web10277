
function normal(){
    var S1 = document.getElementById("S1").value;
    if(S1 == "") {alert("S1 rỗng"); return false;}
    S1 = S1.trim();
    var arr = S1.split(" ");
    var i, kq="";
    for(i = 0; i<arr.length; i++)
    {
        console.log(arr[i]);
        arr[i]=arr[i].toLowerCase();
        if(arr[i]!=""){
        kq += arr[i].substr(0,1).toUpperCase() + arr[i].substr(1);
        kq += " ";
        }
    }

    document.getElementById("S1").value= kq.trim();
}

function reverse(){
    var S1 = document.getElementById("S1").value;
    if(S1 == "") {alert("S1 rỗng!"); return false;}
    var arr=S1.split(" ");
    arr=arr.reverse();
    var text = arr.join(" ");
    document.getElementById("S1").value=text;
}

function Original(){
    return document.getElementById("S1").value=origin;
}

function replace1(){
    var S1 = document.getElementById("S1").value;
    var S2 = document.getElementById("S2").value;
    var S3 = document.getElementById("S3").value;
    var token = new RegExp(S2, "ig");
    S1= S1.replace(token,S3);
    document.getElementById("S1").value= S1;
}

function delete1(){
    var S1 = document.getElementById("S1").value;
    var S2 = document.getElementById("S2").value;
    var S3 = document.getElementById("S3").value;
    var token = new RegExp(S2, "ig");
    S1= S1.replace(token,"");
    document.getElementById("S1").value= S1;
}

function insert(){
    var S1 = document.getElementById("S1").value;
    if(S1 == "") {alert("S1 rỗng!"); return false;}
   
    var S2 = document.getElementById("S2").value;
    if(S2 == "") {alert("S2 rỗng!"); return false;}
   
    var index = document.getElementById("index").value;
    
    if(index == "") {alert("Chưa nhập vị trí cần chèn!"); return false;}
    index = Number(index);
    if(isNaN(index)|| index <0 || index >S1.length)
    {alert("Vị trí cần chèn không hợp lệ!"); return false;}
    var kq = S1.slice(0,index) + S2 + S1.slice(index);
    document.getElementById("S1").value= kq;
}

function flip()
{
    var kq = document.getElementById("title").innerHTML;
    var tmp = kq.slice(1) + kq.slice(0,1);
    document.getElementById("title").innerHTML=tmp;
}
