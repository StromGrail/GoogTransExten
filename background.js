
var contextsList=["selection"];

for(i=0;i<contextsList.length;i++){
	var context=contextsList[i];
	var titlex="translate this  "+context+" ";

chrome.contextMenus.create({title:titlex,contexts:[context],onclick: clickHandler,id: context });

	function clickHandler(data,tab){
		
		switch(data.menuItemId){
			
			case 'selection':
				
				var options = {
					
					type    : "basic",
					title   : "Translated Text",
					iconUrl : "icon.png",
					message : 'location.assign("http://www.w3schools.com")'
					

				};

				//document.getElementById("demo").innerHTML = options.message();
				chrome.notifications.create(options,callback);

				function callback(){
				
				}
				chrome.windows.create({url:"https://translate.google.co.in/#auto/hi/"+data.selectionText,type : "panel"});
				break;
			
		}
		

}
}