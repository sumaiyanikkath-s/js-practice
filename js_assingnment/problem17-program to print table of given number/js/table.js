var num=prompt("enter  number");
var i=0;
document.write('<table border="3" cellspacing="3">');
for(i=1; i<=20; i++)
{
document.write("<tr><td bgcolor=pink>"+num+"X"+i+"="+num*i+"</td></tr>");
}
document.write("</table>");