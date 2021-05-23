$(function(){
	$('#tabs').tabs({ 
			show: { effect: "fade",duration: 300 }, 
			hide: { effect: "fade",duration: 300 },
		});
}); 

$(function(){
		$( "#accordion" ).accordion({
		collapsible: true,
		active: false
		}); 
	});

$(function(){
	$("#create").button().click(function(){
		$('#dialog').dialog("open");
	})

	$('#dialog').dialog({
	autoOpen: false,
	buttons:{
			Создать: function (event, ui) {
					$( "#conf" ).dialog("open");

					var person_name = $("#name").val();
					var person_height = $("#height").val();
					var person_weight = $("#weight").val();
					var person_body = $("#body").val();
					var person_date = $("#date").val();
					var person_class = $("#cls").val();
					var k;
					

					switch (person_class){
						case 'Маг': k = 3;
						break;
						case 'Охотница': k = 4;
						break;
						case 'Воин': k = 2;
						break;
					}

					var rating = Math.round((person_height + person_weight)/k);

					document.getElementById('person_name').value = person_name;
					document.getElementById('person_height').value = person_height;
					document.getElementById('person_weight').value = person_weight;
					document.getElementById('person_body').value = person_body;
					document.getElementById('person_date').value = person_date;
					document.getElementById('person_class').value = person_class;
					document.getElementById('rating').value = rating;

				},
			Отмена: function() {
			$(this).dialog('close');
	}
},
	show: {effect: "fade", duration: 800},
	hide: {effect: "drop", duration: 800},
});

$("#slider_height").slider({
	range: "min",
	value: 150,
	min: 150,
	max: 210,
	step: 1,
	slide: function(event, ui) {
		$("#height").val($("#slider_height").slider("option", "value"));
	},
	change: function(event, ui) { 
		$("#height").val($("#slider_height").slider("option", "value"));
	}
});
$("#height").val($("#slider_height").slider("option", "value"));

$("#slider_weight").slider({
	range: "min",
	value: 50,
	min: 50,
	max: 120,
	step: 1,
	slide: function(event, ui) {
		$("#weight").val($("#slider_weight").slider("option", "value"));
	},
	change: function(event, ui) { 
		$("#weight").val($("#slider_weight").slider("option", "value"));
	}
});
$("#weight").val($("#slider_weight").slider("option", "value"));

$( "#date" ).datepicker({
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
	});

$("#tip").tooltip();

var availableTags = [
		"Воин",
		"Охотница",
		"Маг",
		];
		$( "#cls" ).autocomplete({
		source: availableTags
		});

	$('#conf').dialog({

	autoOpen: false,
	buttons:{
			Подтвердить: function (event, ui) {
				$( "#ok" ).dialog("open");
				$( "#dialog" ).dialog("close")
				$(this).dialog('close');
				},
			Отмена: function() {
			$(this).dialog('close');
	}
},
	show: {effect: "fade", duration: 800},
	hide: {effect: "drop", duration: 800},
});

$('#ok').dialog({
	autoOpen: false,
	show: {effect: "fade", duration: 800},
	hide: {effect: "drop", duration: 800},
});
}) 