$(function () {
	var allCars = {
		"Audi": ["A1", "A2", "A3", "A4", "A6", "Q3", "Q7"],
        "Ford": ["Fiesta", "Fokus", "Kuga", "Mondeo"],
        "Skoda": ["Fabia", "Octavia", "Rapid", "Yeti"]
	    };


    function carModel() {
    	var carModels = allCars[$("#car_brand").val()];    // Get car's model's list from first select  
    	$("#car_model").empty();
    	for (var i in carModels) {                         // Push car's model's list to second select
    		$("#car_model").append('<option>' + carModels[i] + '</option>');
    	};
    };
	$("#car_brand").change(carModel);
    carModel();                                            // Initialization second select
    
    function outputCar() {
    	var carBrand = $("#car_brand").val();
    	var carModels = $("#car_model").val();
    	var reg1 = /^\d+(,|\.)?\d*$/;                      // For checking value dintance in order to it don't contain letters, spaces etc. 
    	var reg2 = /^0(?=\d)/;                             // For checking numbers like 02745...
    	var reg3 = /(,|\.)$/;                              // For checking numbere which ended on . or ,
    	var dist = $("#distance").val();
    	if ((reg1.test(dist)) && (!reg2.test(dist)) && (!reg3.test(dist))) {
    		$(".container").empty();                                                                     // Clear page
    		$(".container").append('<div class="output-car">Выбран производитель ' + 
    			carBrand + ', модель ' + carModels + ', с пробегом ' + dist + ' км</div>');
    	}
    	else {
    		$("#alarm").remove();                                                                        // If number is wrong we ask to change it
    		$("#output").append('<div id="alarm" class="alarm">Введите верное значение пробега</div>');
    	}; 
    }

    $("button").click(outputCar);                          // Button event
    $("form").keydown(function(eventObject) {              
        if (eventObject.which === 13) {                    // Check "Enter" button
            outputCar();
            return false;                                  // Forbid to send data to server 
        };
    });
});