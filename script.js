$(document).ready(function() {
	   $("#search").keypress(function(e) {
	   	if(e.which==13)
	   	{
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
		results += "<h2> Results </h2><br><div class='mylist'>"+"<div class='wrapper'>";
		for (var i=0; i<json.recipes.length; i++) {
		    results += "<div class='image'>"+"<img src="+
		    json.recipes[i].image_url +" alt='1' >"+
    "<a href="+json.recipes[i].source_url+">"+json.recipes[i].title+"</a>"+"</div>";
}
		results+='</div></div>';

		$("#stackResults").html(results);
	    }

	   });
	
    }

    });
	   $("#stackSubmit").click(function(e) {
		e.preventDefault();
		value = $("#stackInput").val();
        console.log(value);
		var myurl="https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle="+value+"&filter=default&site=stackoverflow";

        $.ajax({
	    url : myurl,
	    dataType : "json",
	    success : function(json) {
		console.log(json);
		var results = "";
		results += '<h2> Stack Questions </h2><br><div class="mylist"><div class="in">';
		for (var i=0; i<json.items.length; i++) {
		    results += '<a href='+json.items[i].link+'>'+
		    json.items[i].title+'</a>'+
		    '<br><b>Posted by: </b>'+json.items[i].owner.display_name+'	 <b>View count: </b>'+json.items[i].view_count+'<br><hr>';
		}
		results+='</div></div>';
		$("#stackResults").html(results);
	    }
	   });

    });


});