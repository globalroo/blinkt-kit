const { Blinkt, COLOURS, PI_RAINBOW } = require("../src/index");

const blinkt = new Blinkt();
const TEST_DELAY = 1000;

const turnAllOnWithColour = colour =>
	new Promise(resolve => {
		blinkt.setAllPixels({ ...colour });
		blinkt.sendUpdate();
		setTimeout(() => resolve(), TEST_DELAY);
	});

const turnOnWithColour = (ix, colour) =>
	new Promise(resolve => {
		blinkt.setPixel({ ix, ...colour });
		blinkt.sendUpdate();
		setTimeout(() => resolve(), TEST_DELAY);
	});

const runThrough = async () => {
	await turnAllOnWithColour(COLOURS.RED);
	await turnAllOnWithColour(COLOURS.GREEN);
	await turnAllOnWithColour(COLOURS.BLUE);
	for (let ix = 0, length = PI_RAINBOW.length; ix < length; ix++) {
		await turnOnWithColour(ix, PI_RAINBOW[ix]);
	}
};

runThrough().then(async () => {
	await setTimeout(() => {
		blinkt.clearAll();
		blinkt.sendUpdate();
	}, TEST_DELAY);
});
