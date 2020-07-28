"use strict";

const rpio = require("rpio");

const DAT = 23;
const CLK = 24;
const MODE = "gpio";

const DEFAULT_RED = 0;
const DEFAULT_GREEN = 0;
const DEFAULT_BLUE = 0;
const DEFAULT_BRIGHTNESS = 0.2;
const DEFAULT_PIXELS = 8;

class Blinkt {
	constructor({ dat = DAT, clk = CLK, mode = MODE, clearOnExit = false } = {}) {
		this.dat = dat;
		this.clk = clk;
		this.cleanedUp = false;

		rpio.init({ mapping: mode, close_on_exit: false });
		rpio.open(this.dat, rpio.OUTPUT, rpio.LOW);
		rpio.open(this.clk, rpio.OUTPUT, rpio.LOW);

		this.blinktPixels = Array.from(new Array(DEFAULT_PIXELS), () => [DEFAULT_RED, DEFAULT_GREEN, DEFAULT_BLUE, 0]);

		if (clearOnExit) {
			this.setClearOnExit();
		}
	}

	getBrightness(brightness = DEFAULT_BRIGHTNESS) {
		return parseInt(31.0 * brightness, 10) & 0b11111;
	}

	getPixel({ r = DEFAULT_RED, g = DEFAULT_GREEN, b = DEFAULT_BLUE, brightness = DEFAULT_BRIGHTNESS } = {}) {
		return [parseInt(r, 10) & 255, parseInt(g, 10) & 255, parseInt(b, 10) & 255, this.getBrightness(brightness)];
	}

	setPixel({ pixel = 0, r, g, b, brightness = DEFAULT_BRIGHTNESS } = {}) {
		this.blinktPixels[pixel] = this.getPixel({ r, g, b, brightness });
	}

	getAll() {
		return this.blinktPixels;
	}

	setAll({ r, g, b, brightness } = {}) {
		this.blinktPixels.forEach((_, pixel) => this.setPixel({ pixel, r, g, b, brightness }));
	}

	setBrightness({ pixel, brightness = DEFAULT_BRIGHTNESS }) {
		if (typeof pixel !== "undefined") {
			this.blinktPixels[pixel][3] = this.getBrightness(brightness);
		} else {
			this.blinktPixels.forEach(pixel => (pixel[3] = this.getBrightness(brightness)));
		}
	}

	flashPixel({ pixel, times, intervalms, r, g, b, brightness = DEFAULT_BRIGHTNESS } = {}) {
		this.setPixel({ pixel, r, g, b, brightness });
		for (let i = 0; i < times; i++) {
			this.setBrightness({ pixel, brightness });
			this.show();
			rpio.msleep(intervalms);
			this.setBrightness({ pixel, brightness: 0 });
			this.show();
			rpio.msleep(intervalms);
		}
	}

	showInitialAnimation({ r, g, b } = {}) {
		this.clear();
		this.setPixel({ pixel: 3, r, g, b });
		this.setPixel({ pixel: 4, r, g, b });
		for (let i = 0; i <= 10; i++) {
			let brightness = i * 0.05;
			this.setBrightness({ pixel: 3, brightness });
			this.setBrightness({ pixel: 4, brightness });
			this.show();
			rpio.msleep(100);
		}

		for (let pixel = 2; pixel >= 0; pixel--) {
			let mirrorPixel = 7 - pixel;
			this.setPixel({ pixel, r, g, b });
			this.setPixel({ pixel: mirrorPixel, r, g, b });
			this.show();
			rpio.msleep(250);
		}

		this.clear();
		this.show();
	}

	showFinalAnimation({ r, g, b } = {}) {
		this.setAll({ r, g, b, brightness: 1.0 });
		this.show();
		rpio.msleep(50);

		for (let pixel = 0; pixel < 3; pixel++) {
			let mirrorPixel = 7 - pixel;
			this.setPixel({ pixel, r: 0, g: 0, b: 0 });
			this.setPixel({ pixel: mirrorPixel, r: 0, g: 0, b: 0 });
			this.show();
			rpio.msleep(250);
		}

		for (let i = 10; i > 0; i--) {
			let brightness = i * 0.05;
			this.setBrightness({ pixel: 3, brightness });
			this.setBrightness({ pixel: 4, brightness });
			this.show();
			rpio.msleep(100);
		}

		this.clear();
		this.show();
	}

	clear() {
		this.setAll({ r: 0, g: 0, b: 0, brightness: 0 });
		this.show();
	}

	cleanup() {
		if (!this.cleanedUp) {
			this.cleanedUp = true;
			this.clear();
			rpio.exit();
			process.exit();
		}
	}

	setClearOnExit(value = true) {
		if (this.clearOnExit) return;
		this.clearOnExit = true;
		process.on("exit", () => this.cleanup());
		process.on("SIGINT", () => this.cleanup());
	}

	writeData(bit) {
		rpio.write(this.dat, bit);
		rpio.write(this.clk, rpio.HIGH);
		rpio.write(this.clk, rpio.LOW);
	}

	writeByte(byte) {
		for (let i = 0; i < DEFAULT_PIXELS; i++) {
			const bit = (byte & (1 << (7 - i))) > 0 === true ? rpio.HIGH : rpio.LOW;
			this.writeData(bit);
		}
	}

	writeDataNTimes(bit, cycles) {
		for (let i = 0; i < cycles; i++) this.writeData(bit);
	}

	// Emit exactly enough clock pulses to latch the small dark die APA102s which are weird
	// for some reason it takes 36 clocks, the other IC takes just 4 (number of pixels/2)

	eof() {
		this.writeDataNTimes(0, 36);
	}

	sof() {
		this.writeDataNTimes(0, 32);
	}

	show() {
		this.sof();
		this.blinktPixels.forEach(pixel => {
			const [red, green, blue, brightness] = pixel;
			this.writeByte(0b11100000 | brightness);
			this.writeByte(blue);
			this.writeByte(green);
			this.writeByte(red);
		});
		this.eof();
	}
}

module.exports = {
	Blinkt
};
