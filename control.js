webiopi().ready(function() {
var gpioPins = [2,3,4,17,27,22,10,9];

for(i=0; i<gpioPins.length; i++) {
	webiopi().setFunction(gpioPins[i], "out");
}

	var content, button;
	content = $("#content");
for(i=0; i<gpioPins.length; i++) {
	label = "Outlet ";
	button = webiopi().createGPIOButton(gpioPins[i], label.concat(i+1));
	content.append(button); // append button to content div
}
       
// "All On" button for all GPIOs used
	button = webiopi().createButton("allOn", "All On", function() {
		for(i=0; i<gpioPins.length; i++) {
			webiopi().digitalWrite(gpioPins[i], 0);
		}
	});	content.append(button);

// "All Off" button for all GPIOs used
	button = webiopi().createButton("allOff", "All Off", function() {
		for(i=0; i<gpioPins.length; i++) {
			webiopi().digitalWrite(gpioPins[i], 1);
		}
	});	content.append(button);
	
	webiopi().refreshGPIO(true);
});
	
