var d1=parseInt(prompt("enter the distance1"));
var d2=parseInt(prompt("enter the distance2"));
var ms=parseInt(prompt("enter the manspeed"));
var ss=parseInt(prompt("enter the streamspeed"));
var time;
var s1;
var s2;
s1=ms+ss;
alert(s1);
s2=ms-ss;
alert(s2);
time=((d1/s1)+(d2/s2));
alert(time);
  