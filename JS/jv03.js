function Solve()
{
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;

    if(a==0)
    {
        if(b==0)
            if(c!=0)
            document.getElementById("kq").innerHTML = "PT vô nghiệm.";
            else
            document.getElementById("kq").innerHTML = "PT vô số nghiệm.";
        else
        {
            document.getElementById("kq").innerHTML = "PT có 1 nghiệm.<br> x=" + -c/b;
        }
    }
    else
    {
        var x1, x2;
        var del= b*b-4*a*c;
        console.log(del);
        if(del<=0)
        {
            if(del<0)
            document.getElementById("kq").innerHTML = "PT vô nghiệm.";
            else
            document.getElementById("kq").innerHTML = "PT có 1 nghiệm kép. <br> x=" + -b/(2*a);
        }
        else
        document.getElementById("kq").innerHTML = "PT có 2 nghiệm đơn. <br>x<sub>1</sub>=" + (-b + Math.sqrt(del))/(2*a) + "<br>x<sub>2</sub>=" + (-b - Math.sqrt(del))/(2*a);

    }
}