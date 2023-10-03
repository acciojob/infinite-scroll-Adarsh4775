
		document.addEventListener("DOMContentLoaded", function(){
			const list = document.getElementById("infi-list");

     function addItems(){
		for(let i=1; i<=2; i++){
		 const listitem = document.createElement("li");
		 listitem.textContent=  "Item" +  (list.children.length+1);
		 list.appendChild(listitem);
	 }
		}	
			window.addEventListener("scroll", function(){
				const scrollTop = document.documentElement.scrollTop;
				const scrollHeight=document.documentElement.scrollHeight;
				const clientHeight = document.documentElement.clientHeight;
		        const buffer = 100;
		if(scrollTop + clientHeight >= scrollHeight)
		{
			addItems();
		}
		});

			addItems();
		});
