var mark = parseInt(prompt("Enter the Marks"));
switch(true)
{
case (mark > 80):
	alert ("grade A");
	break;
	
case (mark>=60 && mark<=80):
	alert ("grade B");
	break;


case (mark>=50 && mark<=59):
	alert ("grade C");
	break;
	
case (mark>=45 && mark <=49):
	alert ("grade D");
	break;
		
case (mark>=25 && mark <=44):
	alert ("grade E");
	break;
			
default:
	alert ("Grade F")		
}