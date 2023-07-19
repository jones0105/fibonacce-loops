var n=parseInt(prompt("Enthr The Value"));
var a=0;
var b=1;
var c=a+b;
for(let i=1;i<=n;i++)
{		
       c=a+b;
        a=b;
		b=c;
document.write(c+" ");	
}

