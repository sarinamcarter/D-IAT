

function shuffle(o){
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

function saveData(filename, filedata){
	$.ajax({
		type:'post',
		cache: false,
		url: 'save_data.php', // this is the path to the above PHP script
		data: {filename: filename, filedata: filedata},
		complete: function() {
			if(orderTask == "B"){
				window.location.href = twoStepLink
			}else{
				window.location.href = qualtricsLink
			}
					
			}
	});
}
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}