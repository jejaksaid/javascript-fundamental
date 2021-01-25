// Use the var keyword only for declaration or initialization, once for the life of any variable name in a document. You should not re-declare same variable twice.

<script type = "text/javascript">
	var myName;
	var myFirstName, myLastName;

	var myName = "said";
	var job;
	job = "Web Developer";

	var car = "Lambo";
	var price;
	price = 40000;

// Variable Scope

	var myVar = "global"; // declare global variable
	function checkscope() {
		var myVar = "local"; // declare local variable
		document.write(myVar);
	
	}

</script>
