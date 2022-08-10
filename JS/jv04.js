function Solve(){
    var a=parseInt(document.forms["Form"]["a"].value);
    var b=parseInt(document.forms["Form"]["b"].value);
    var pt=document.forms["Form"]["kq"].value;
    var kq;
    console.log(a,b,pt);
    switch (pt)
    {
        case "+":
            kq=a+b;
            break;
        case "-":
            kq=a-b;
            break;
        case "*":
            kq=a*b;
            break;
        case "/":
            if(b==0) kq="Lỗi chia 0!";
            else kq=a/b;
            break;
    }

    document.forms["Form"]["solve"].value=kq;
    return false;
}