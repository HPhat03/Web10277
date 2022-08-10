function Statistic(){
    var Str = document.getElementById("string").value;
    Str = Str.toUpperCase();
    var WordArr = Str.split(" ");
    var i, word=0;
    for(i=0; i<WordArr.length; i++)
    {
        if(WordArr[i].trim() != "")
            word++;
    }
    var kq = "Characters: " + Str.length +"<br>Words: " + word + "<br>";
    var split = [];
    for(i=0; i<128; i++)
        split[i]=0;
    for(i=0; i<Str.length; i++)
    {   
        if(isNumAl(Str.charCodeAt(i)))
            split[Str.charCodeAt(i)]++;
    }
    for(i=0; i<=128; i++)
    {
        if(split[i]>0)
        kq += "Character " + String.fromCharCode(i) + ": " + split[i] + "<br>";
    }
    document.getElementById("result").innerHTML = kq;
}

function isNumAl(x){
    if(x<=47 || (x>=58 && x<=64) || (x>=91 && x<=96) || x>=123)
    return false;
    else
    return true;
}