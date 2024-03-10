function giaiPtb2(a,b,c)
{
    if(a==0)
    {
        if(b==0 && c==0)
        {
            return "Vô số nghiệm"
        }
        else if(b==0 && c!=0)
        {
            return "Vô nghiệm"
        }
        else 
        {
            x=-c/b
            return x
        }
    }
    else
    {
        delta=Math.pow(b,2)-4*a*c
        if(delta<0)
        {
            return "Vô nghiệm"
        }
        else if (delta==0)
        {
            x=-b/(2*a)
            return "Nghiệm kép x1=x2="+x
        }
        else 
        {
            x1=(-b-Math.sqrt(delta))/(2*a)
            x2=(-b+Math.sqrt(delta))/(2*a)
            return "x1="+x1+";x2="+x2
        }
    }
}