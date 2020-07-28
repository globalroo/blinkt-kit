const { Blinkt, COLOURS, PI_RAINBOW } = require("../src/index");

const blinkt = new Blinkt({ clearOnExit: true });
const TEST_DELAY = 1000;

const showInitialAnimation = colour =>
	new Promise(resolve => {
		blinkt.showInitialAnimation({ ...colour });
		setTimeout(() => resolve(), TEST_DELAY);
	});

const showFinalAnimation = colour =>
	new Promise(resolve => {
		blinkt.showFinalAnimation({ ...colour });
		setTimeout(() => resolve(), TEST_DELAY);
	});

const flashPixel = (ix, colour) =>
	new Promise(resolve => {
		blinkt.flashPixel({ pixel: ix, times: 2, intervalms: 500, brightness: 0.5, ...colour });
		setTimeout(() => resolve(), TEST_DELAY);
	});

const turnAllOnWithColour = colour =>
	new Promise(resolve => {
		blinkt.setAll({ ...colour });
		blinkt.show();
		setTimeout(() => resolve(), TEST_DELAY);
	});

const turnOnWithColour = (ix, colour) =>
	new Promise(resolve => {
		blinkt.setPixel({ pixel: ix, ...colour });
		blinkt.show();
		setTimeout(() => resolve(), TEST_DELAY);
	});

const runThrough = async () => {
	await showInitialAnimation(COLOURS.GREEN);
	await flashPixel(2, COLOURS.GREEN);
	await turnAllOnWithColour(COLOURS.RED);
	await turnAllOnWithColour(COLOURS.GREEN);
	await turnAllOnWithColour(COLOURS.BLUE);
	await showFinalAnimation(COLOURS.RED);
};

const basicColours = async () => {
	for (let ix = 0, length = PI_RAINBOW.length; ix < length; ix++) {
		await turnOnWithColour(ix, PI_RAINBOW[ix]);
	}
	console.info("Current pixel settings");
	console.log(blinkt.getAll());
};

runThrough().then(async () => {
	await setTimeout(() => basicColours(), TEST_DELAY);
});
