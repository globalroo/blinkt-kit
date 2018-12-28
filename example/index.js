const Blinkt = require("../Blinkt");
const leds = new Blinkt();
leds.setAllPixels({ g: 255, brightness: 0.1 });
leds.sendUpdate();
setTimeout(() => {
	leds.clearAll();
	leds.sendUpdate();
}, 2000);
