//fairy-fruit.github.io

var side = false;


function updateWebsite(){

	console.log("YAY!");

	fetch("https://api.github.com/users/fairy-fruit")
	.then((resp) => resp.json())
	.then(function(data){
		let ff = data;

		document.getElementById("logoLink").href=ff.html_url;
		document.getElementById("logo").src=ff.avatar_url;
		document.getElementById("favicon").href=ff.avatar_url;

		updateGameTiles(ff.repos_url);
	})
	.catch(function(error){
		console.log(error);
	});

}

function updateGameTiles(url){
	fetch(url)
	.then((resp) => resp.json())
	.then(function(data){
		for(var i = 0; i < data.length; i++){
			let link = data[i].homepage;

			if(link!="https://fairy-fruit.github.io/"){
				addGameTile(makeGameTile(link));
			}
		}

	})
	.catch(function(error){
		console.log(error);
	});
}

function addGameTile(element){

	side = !side;

	if(side){
		return document.getElementById("gamesTile1").appendChild(element);
	}else{
		return document.getElementById("gamesTile2").appendChild(element);
	}
}

function makeGameTile(data){
	let element = document.createElement("A");
	element.href=data;

	let pic = document.createElement("IMG");

	pic.src="https://plus.google.com/_/favicon?domain=" + data;

	pic.style.width="100%";

	element.appendChild(pic);

	console.log("element");

	return element;
}

function updateMobileNavBar(){
	let a = document.getElementById("mobileNavBar").childNodes[0].getElementsByTagName("a");

	for(i = 0; i < a.length; i++){
		a[i].style.width = 100/a.length + "%";
	}
}

updateWebsite();
