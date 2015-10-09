webiopi().ready(function() {
var gpioPins = [2,3,4,17,27,22,10,9];

for(var i=0; i<gpioPins.length; i++) {
	webiopi().setFunction(gpioPins[i], "out");
}

	var content, button;
	content = $("#content");
for(var j=0; j<gpioPins.length; j++) {
	button = webiopi().createGPIOButton(gpioPins[j], "Relay " + gpioPins[j]);
	content.append(button); // append button to content div
}
       
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
	
