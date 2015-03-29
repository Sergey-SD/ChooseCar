$(function () {
	var allCars = {
		"Audi": ["A1", "A2", "A3", "A4", "A6", "Q3", "Q7"],
        "Ford": ["Fiesta", "Fokus", "Kuga", "Mondeo"],
        "Skoda": ["Fabia", "Octavia", "Rapid", "Yeti"]
	    };


    function carModel() {
    	var carModels = allCars[$("#car_brand").val()];
    	$("#car_model").empty();
    	for (var i in carModels) {
    		$("#car_model").append('<option>' + carModels[i] + '</option>');
    	};
    };
	$("#car_brand").change(carModel);
    carModel();
    
    function outputCar() {
    	var carBrand = $("#car_brand").val();
    	var carModels = $("#car_model").val();
    	var reg1 = /^\d+(,|\.)?\d*$/;
    	var reg2 = /^0(?=\d)/;
    	var reg3 = /(,|\.)$/;
    	var dist = $("#distance").val();
    	if ((reg1.test(dist)) && (!reg2.test(dist)) && (!reg3.test(dist))) {
    		$(".container").empty();
    		$(".container").append('<div class="output-car">Выбран производитель ' + 
    			carBrand + ', модель ' + carModels + ', с пробегом ' + dist + ' км</div>');
    	}
    	else {
    		$("#alarm").remove();
    		$("#output").append('<div id="alarm" class="alarm">Введите верное значение пробега</div>');
    	}; 
    }

    $("button").click(outputCar);
    $("form").keydown(function(eventObject) {
        if (eventObject.which === 13) {
            outputCar();
            return false;
        };
    });
});