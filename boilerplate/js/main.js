// Chapter 2 + Chapter 3 
//main_with_debug + debug_ajax


//initialize function called when script loads
//added this as a check mechanism. runs when all other code is commented out.
//$('#mydiv').html('Bugged out');

//CHAPTER 02 -- TABLE
//initialize function called when the script loads
//function is called cities. initialize the function, then detail the function below
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population assigning array to variable cityPop
	//refer to cityPop when need to access
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	// direct add using method jquery chaining strategy - table is added to the DOM 
	$("#mydiv").append("<table>");

	//append a header row to the table
	// direct add using method chaining strategy - <tr>, table row, is added to the <table>
	$("table").append("<tr>");
	
	//add the "City" and "Population" columns to the header row
	// again, using method chaining strategy. label headers within the first <tr> table row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
	//for each element, i, run through this process. stops at length <1
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable, rowHtml, which makes script cleaner
		//referring to our array, variable cityPop
		//use index with element "i" to go thorugh all elements for city and population
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

addColumns(cityPop); // see function below
addEvents(cityPop); // see function below
};

// code block 3
// call the addColumns function on the variable cityPop, which we assigned to our array
function addColumns(cityPop){
    // iterate over each 
	// alias function?  (note to rob and yuying: the alias functions + method chaining is still very difficult to wrap head around!)
    $('tr').each(function(i){

    	if (i == 0){

    		$(this).append('<th>City Size</th>');  //syntax fix
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';  //syntax fix

    		} else {
    			citySize = 'Large';
    		};

    		$(this).append('<td>' + citySize + '</td>'); //syntax fix
    	};
    });
};


// code block 4
function addEvents(){

	$("table").mouseover(function() {   //syntax fix
		
		var color = "rgb(";
		// console.log(color); // success, see in console log
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random; //syntax fix. not a string! refers to variable

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			};

			$(this).css('color', color);
		};
	});

	function clickme() {
		alert('Hey, you clicked me!');
	};

		$("table").on('click', clickme);

	};

//call the initialize function when the document has loaded
$(document).ready(initialize);

// ---------------------------------------------------------------------

// JQUERY AJAX LESSON -- CHAPTER 03
// documentation https://api.jquery.com/jquery.ajax/

function debugCallback(response){    // response declared but its value is never read, ajax internal
	mydata = response;  // need to store as variable, accessible within fxn
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));  // adds the data to the DOM
};

function debugAjax(){
	
	var mydata;

	$.ajax("data/MegaCities.geojson", {  // basic jQuery AJAX syntax where you can manually define datatype and "success" parameter
		dataType: "json",  
		success: function(response){ // the return is calling an anonymous fxn using "response" which is our data under ajax alias?
			mydata = response;  // store as variable. accessible within anonymous fxn
			//console.log(mydata);  
			debugCallback(mydata); // refer to function we wrote above
		}
	});

	//$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata)); // this is unncessary, since we already achieved this through our function
};

// $(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata)); //not defined. also uncessary

$(document).ready(debugAjax); // consolidated syntax for calling ajax request, running through "ready" states
// runs when DOM is ready
// we have a similar syntax for loading the "initialize" function for the Table generation.

