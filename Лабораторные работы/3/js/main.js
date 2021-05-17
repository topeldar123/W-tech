$(document).ready(function(){
	loadContent();
	$('#more_films').click(
		function (){
			var count = document.getElementById('main__items').getElementsByClassName('film_place').length;
			$.post("php/get_more_films.php", {kol: 6, tek: count}, successMoreFilms);
		});
});

function loadContent(){
	$.post("php/get_content.php",{}, successLoad);
}

function successLoad(data){
	data = JSON.parse(data);
	console.log(data);
	for(var i in data)
		{
			let film = 
			`	<div class="film_place">
					<div class="film_cart">
							<div class="picture">
								<img src="${data[i].img}" alt="${data[i].name}">
							</div>

							<div class="film_name">
								${data[i].name}
							</div>

							<div class="film_text">
								<p>
									${data[i].text_p1}
								</p>

								<p>
									${data[i].text_p2}
								</p>
							</div>
						</div>
					</div>
				</div>`;
			document.getElementById("main__items").insertAdjacentHTML('beforeend', film);
		}}

function successMoreFilms(data){
	data = JSON.parse(data);
	console.log(data);
	for(var i in data)
		{
			let film = 
			`	<div class="film_place">
					<div class="film_cart">
							<div class="picture">
								<img src="${data[i].img}" alt="${data[i].name}">
							</div>

							<div class="film_name">
								${data[i].name}
							</div>

							<div class="film_text">
								<p>
									${data[i].text_p1}
								</p>

								<p>
									${data[i].text_p2}
								</p>
							</div>
						</div>
					</div>
				</div>`;
			document.getElementById("main__items").insertAdjacentHTML('beforeend', film);
}}