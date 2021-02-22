
// JQUERY AJAX LESSON -- CHAPTER 03
// documentation https://api.jquery.com/jquery.ajax/

// NOTE multiple blocks of code commented out or not.  Read through entire script

//define AJAX function  -- jQuery AJAX

/* function jQueryAjax(){
    //basic jQuery ajax method
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: callback    
    });
};
 */

// same as above, but replace with anonymous callback function.  check console log to see where mydata is accessible 
/* function jQueryAjax(){
    var mydata;
    //basic jQuery ajax method     // replace callback with anonymous callback function 
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: function(response){      
            mydata = response;
            console.log(mydata);     // mydata is avaialble within the anonymous function but undefined outside of anonymous function
        }   
    });
    console.log(mydata);  
};
 */
    
    // alternative methods, would replace the $.ajax.... underneath function
    //JQuery AJAX Alias -- jQuery.get() method HTTP GET request
    //$.get("data/MegaCities.geojson", callback, "json");


    //jQuery AJAX Alias -- jQuery.getJSON() method HTTP GET request JSON specific
    //$.getJSON("data/MegaCities.geojson", callback);

// using jQuery AJAX alias .getJSON()
function jQueryAjax(){
    $.getJSON("data/MegaCities.geojson", callback);
};

//define callback function -- jQuery AJAX
// response data
// status of request // omit
// full jQuery XLMHTTpRequest object  //omit
function callback(response, status, jqXHRobject){
    //tasks using the data go here
    var mydata = response;
    console.log(response);
    nextFunction(mydata);
};

function nextFunction(data){
    console.log(data); //contains response data help by mydata in callback
};

$(document).ready(jQueryAjax);



