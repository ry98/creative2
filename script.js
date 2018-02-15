$(document).ready(function() {
	   $("#search").keypress(function(e) {
	   	if(e.which==13)
	   	{
	   		document.getElementById("main").style.backgroundImage="none";
	   		//window.location.href="recipes.html";
	   		console.log("hi");
	   		console.log($("#search").val());
	   		var value=$("#search").val();
	   		$("#search").val("");
	   		var myurl="http://food2fork.com/api/search?key=d5c259cb75343029d93022cf126bbaa4&q="+value;
	   		var first="https://cors-anywhere.herokuapp.com/"
        $.ajax({

	   
	    type: "GET",
	   // headers: { "Access-Control-Allow-Origin": "*"},
	     url : first+myurl,
	   // key: "d5c259cb75343029d93022cf126bbaa4",
	    dataType : "json",
	    //jsonp: "callback",
	    //data: { format: "json"},
	    success : function(json) {
		console.log(json);
		console.log("here");
		var results = "";
		results += "<h2> Results </h2>\n<br>\n<div class='mylist'>\n"+"<div class='wrapper'>\n";
		for (var i=0; i<json.recipes.length; i++) {
		    results += "<div class='image'>\n"+"<img src='"+
		    json.recipes[i].image_url +"' alt='1' >\n"+
    "<a  class=\"recipe\" href='"+json.recipes[i].source_url+"'>\n"+json.recipes[i].title+"</a>\n"+"</div>\n";
}
		results+='</div>\n</div>\n';
		console.log(results);

		$("#stackResults").html(results);
	    }

	   });
	
    }

    });
	   

});