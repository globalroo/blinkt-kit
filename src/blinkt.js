"use strict";

const wpi = require("node-wiring-pi");

const DAT = 23;
const CLK = 24;
const MODE = "gpio";

const DEFAULT_RED = 0;
const DEFAULT_GREEN = 0;
const DEFAULT_BLUE = 0;
const DEFAULT_BRIGHTNESS = 0.1;
const DEFAULT_PIXELS = 8;

class Blinkt {
	constructor({ dat = DAT, clk = CLK, mode = MODE } = {}) {
		this.dat = dat;
		this.clk = clk;

		wpi.setup(mode);
		wpi.pinMode(this.dat, wpi.OUTPUT);
		wpi.pinMode(this.clk, wpi.OUTPUT);

		this.blinktPixels = Array.from(new Array(DEFAULT_PIXELS), (_, ix) => [
			DEFAULT_RED,
			DEFAULT_GREEN,
			DEFAULT_BLUE,
			DEFAULT_BRIGHTNESS
		]);

		this.sendUpdate();
	}

	getBrightness(brightness = DEFAULT_BRIGHTNESS) {
		return parseInt(31.0 * brightness, 10) & 0b11111;
	}

	getPixel({ r = DEFAULT_RED, g = DEFAULT_GREEN, b = DEFAULT_BLUE, brightness = DEFAULT_BRIGHTNESS } = {}) {
		return [parseInt(r, 10) & 255, parseInt(g, 10) & 255, parseInt(b, 10) & 255, this.getBrightness(brightness)];
	}

	setPixel({ ix = 0, r, g, b, brightness = DEFAULT_BRIGHTNESS } = {}) {
		this.blinktPixels[ix] = this.getPixel({ r, g, b, brightness });
	}

	setAllPixels({ r, g, b, brightness } = {}) {
		this.blinktPixels.forEach((_, ix) => this.setPixel({ ix, r, g, b, brightness }));
	}

	setBrightness({ pixelNumber, brightness = DEFAULT_BRIGHTNESS }) {
		if (typeof pixelNumber !== "undefined") {
			this.blinktPixels[pixelNumber][3] = this.getBrightness(brightness);
		} else {
			this.blinktPixels.forEach(pixel => (pixel[3] = this.getBrightness(brightness)));
		}
	}

	clearAll() {
		this.setAllPixels({ r: 0, g: 0, b: 0, brightness: 0 });
	}

	writeByte(byte) {
		for (let i = 0; i < DEFAULT_PIXELS; i++) {
			const bit = (byte & (1 << (7 - i))) > 0 === true ? wpi.HIGH : wpi.LOW;
			wpi.digitalWrite(this.dat, bit);
			wpi.digitalWrite(this.clk, 1);
			wpi.digitalWrite(this.clk, 0);
		}
	}

	sendUpdate() {
		for (let i = 0; i < 4; i++) this.writeByte(0);
		this.blinktPixels.forEach(pixel => {
			const [red, green, blue, brightness] = pixel;
			this.writeByte(0b11100000 | brightness);
			this.writeByte(blue);
			this.writeByte(green);
			this.writeByte(red);
		});
		this.writeByte(0xff);
	}
}

module.exports = {
	Blinkt
};
