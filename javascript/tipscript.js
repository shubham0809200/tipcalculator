function calculateTip()
{
	
	var billamt = document.getElementById("billamt").value;
	
	var percent = document.getElementById("selection").value;
	
	var people = document.getElementById("numberOfPeople").value;


	if(billamt == "" || people == 0 )
		{
			alert("please enter value");
			return;
		}
	if(people == "" || people <=1 )
		{
			people=1;
			document.getElementById("each").style.display="none";
		}
	else{
			document.getElementById("each").style.display="block";
		}
		
	var total= (billamt * percent)/people;
		total=Math.round(total);
		
		document.getElementById("totaltip").style.display="block";
		document.getElementById("tip").innerHTML= total;
}


		//Hide the tip amount on load
		document.getElementById("totaltip").style.display = "none";
		document.getElementById("each").style.display = "none";


	//click to call function
	document.getElementById("calculateButton").onclick = function() {
	calculateTip();
	
	}