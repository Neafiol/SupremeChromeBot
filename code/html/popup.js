
$.get(chrome.extension.getURL('/shoppage2.js'), 
function(data) {
	var href =document.location.href;
	var re1 = new RegExp('\d');

	if(re1.test(href)){
		var script = document.createElement("script");
		script.setAttribute("type", "text/javascript");
		script.innerHTML = data;
		document.getElementsByTagName("head")[0].appendChild(script);
		//document.getElementsByTagName("body")[0].setAttribute("onLoad", "buy();");
	}	
}
);

$.get(chrome.extension.getURL('/bot.js'), 
	function(data) {
		var href =document.location.href;
		if(href.indexOf("checkout")+1){
			var script = document.createElement("script");
			script.setAttribute("type", "text/javascript");
			script.innerHTML = data;
			document.getElementsByTagName("head")[0].appendChild(script);
			document.getElementsByTagName("body")[0].setAttribute("onLoad", "injected_main();");
		}
		
		//document.getElementByName('commit').click();
		
	}
);
