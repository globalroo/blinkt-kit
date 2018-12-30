const { Blinkt, COLOURS, PI_RAINBOW } = require("../src/index");

const blinkt = new Blinkt({ clearOnExit: true });
const TEST_DELAY = 1000;

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
	await turnAllOnWithColour(COLOURS.RED);
	await turnAllOnWithColour(COLOURS.GREEN);
	await turnAllOnWithColour(COLOURS.BLUE);
};

const basicColours = async () => {
	for (let ix = 0, length = PI_RAINBOW.length; ix < length; ix++) {
		await turnOnWithColour(ix, PI_RAINBOW[ix]);
	}
};

runThrough().then(async () => {
	await setTimeout(() => basicColours(), TEST_DELAY);
});
