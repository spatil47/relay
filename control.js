webiopi().ready(function() {
	webiopi().setFunction(2, "out");
	webiopi().setFunction(3, "out");
	webiopi().setFunction(4, "out");
	webiopi().setFunction(17, "out");
	webiopi().setFunction(27, "out");
	webiopi().setFunction(22, "out");
	webiopi().setFunction(10, "out");
	webiopi().setFunction(9, "out");

	var content, button;
	content = $("#content");
		
// "Relay 1" labeled button for GPIO 2
	button = webiopi().createGPIOButton(2, "Relay 1");
	content.append(button); // append button to content div
// "Relay 2" labeled button for GPIO 3
	button = webiopi().createGPIOButton(3, "Relay 2");
	content.append(button); // append button to content div
// "Relay 3" labeled button for GPIO 4
	button = webiopi().createGPIOButton(4, "Relay 3");
	content.append(button); // append button to content div
// "Relay 4" labeled button for GPIO 17
	button = webiopi().createGPIOButton(17, "Relay 4");
	content.append(button); // append button to content div
// "Relay 5" labeled button for GPIO 27
	button = webiopi().createGPIOButton(27, "Relay 5");
	content.append(button); // append button to content div
// "Relay 6" labeled button for GPIO 22
	button = webiopi().createGPIOButton(22, "Relay 6");
	content.append(button); // append button to content div
// "Relay 7" labeled button for GPIO 10
	button = webiopi().createGPIOButton(10, "Relay 7");
	content.append(button); // append button to content div
// "Relay 8" labeled button for GPIO 9
	button = webiopi().createGPIOButton(9, "Relay 8");
	content.append(button); // append button to content div
       
// "All On" button for all GPIOs used
	button = webiopi().createButton("allOn", "All On", function() {
		webiopi().digitalWrite(2, 1);
		webiopi().digitalWrite(3, 1);
		webiopi().digitalWrite(4, 1);
		webiopi().digitalWrite(17, 1);
		webiopi().digitalWrite(27, 1);
		webiopi().digitalWrite(22, 1);
		webiopi().digitalWrite(10, 1);
		webiopi().digitalWrite(9, 1);
	});
	content.append(button);

// "All Off" button for all GPIOs used
	button = webiopi().createButton("allOff", "All Off", function() {
		webiopi().digitalWrite(2, 0);
		webiopi().digitalWrite(3, 0);
		webiopi().digitalWrite(4, 0);
		webiopi().digitalWrite(17, 0);
		webiopi().digitalWrite(27, 0);
		webiopi().digitalWrite(22, 0);
		webiopi().digitalWrite(10, 0);
		webiopi().digitalWrite(9, 0);
	});

	content.append(button);
	
	webiopi().refreshGPIO(true);
});
	
