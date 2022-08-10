for(var i = 2; i<=9; i++)
{   
    var text ="";
    for(var j = 1; j<=10; j++)
    {
        text  += i + " x " + j + " = " + i*j +"<br>";
    }
    document.getElementById(i).innerHTML = text;
}