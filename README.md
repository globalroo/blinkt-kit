# blinkt-kit

Pimoroni Blinkt! NodeJS bindings. Based on node-blinkt. Updated for Node > 8.

```sh
npm install blinkt-kit --save
```
## Basic example

```javascript

const { Blinkt } = require("blinkt-kit");

const blinkt = new Blinkt();

blinkt.setAll({ r: 128, g: 0, b: 128, brightness: 0.2 });
blinkt.setPixel({ pixel: 0, r: 255 });
blinkt.setPixel({ pixel: 1, g: 255 });
blinkt.setPixel({ pixel: 2, b: 255 });

// Send update applies your changes to the Blinkt!
blinkt.show();

// Switch everything off after two seconds.
setTimeout(() => {
	blinkt.clear();
}, 2000);

```

## Other examples

```javascript

const { Blinkt, COLOURS, PI_RAINBOW } = require("blinkt-kit");

const blinkt = new Blinkt({ clearOnExit: true });
const TEST_DELAY = 1000;

const showInitialAnimation = colour =>
	new Promise(resolve => {
		blinkt.showInitialAnimation({ ...colour });
		setTimeout(() => resolve(), TEST_DELAY);
	})

const showFinalAnimation = colour =>
	new Promise(resolve => {
		blinkt.showFinalAnimation({ ...colour });
		setTimeout(() => resolve(), TEST_DELAY);
	})

const flashPixel = (ix, colour) =>
	new Promise(resolve => {
		blinkt.flashPixel({ pixel: ix, times: 2, intervalms: 500, brightness: 0.5, ...colour });
		setTimeout(() => resolve(), TEST_DELAY);
	})

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
};

runThrough().then(async () => {
	await setTimeout(() => basicColours(), TEST_DELAY);
});

```

## API

```javascript
setPixel({ pixel = 0, r, g, b, brightness = DEFAULT_BRIGHTNESS })
```
Set an individual Blinkt! pixel to the a specific value.
<table class="responsive">
  <tbody>
    <tr>
      <td><b>Parameters</b></td>
    </tr>
    <tr>
      <td>
        <code>pixel</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The Pixel to update 0 to 7<br/> Defaults to 0
      </td>
    </tr>
	<tr>
      <td>
        <code>r</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The RED value for the Pixel 0 to 255<br/> Defaults to 0
      </td>
    </tr>
	<tr>
      <td>
        <code>g</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The GREEN value for the Pixel 0 to 255<br/>Defaults to 0
      </td>
    </tr>
	<tr>
      <td>
        <code>b</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The BLUE value for the Pixel 0 to 255<br/>Defaults to 0
      </td>
    </tr>
	<tr>
      <td>
        <code>brightness</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The relative brightness for the pixel 0.0 to 1.0<br/>Defaults to 0.2
      </td>
    </tr>

  </tbody>
</table>

```javascript
setAll({ r, g, b, brightness })
```
Set all of the Blinkt! pixels to the same values.
<table class="responsive">
  <tbody>
    <tr>
      <td colspan="2"><b>Parameters</b> </td>
    </tr>
	<tr>
      <td>
        <code>r</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The RED value for the Pixel 0 to 255<br/> Defaults to 0
      </td>
    </tr>
	<tr>
      <td>
        <code>g</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The GREEN value for the Pixel 0 to 255<br/>Defaults to 0
      </td>
    </tr>
	<tr>
      <td>
        <code>b</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The BLUE value for the Pixel 0 to 255<br/>Defaults to 0
      </td>
    </tr>
	<tr>
      <td>
        <code>brightness</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The relative brightness for the pixel 0.0 to 1.0<br/>Defaults to 0.2
      </td>
    </tr>

  </tbody>
</table>

```javascript
getAll()
```
Return the current state of the Blinkt! pixels.

```javascript
flashPixel({pixel, times, intervalms, r, g, b, brightness})
```
<table class="responsive">
  <tbody>
    <tr>
      <td colspan="2"><b>Parameters</b> </td>
    </tr>
    <tr>
      <td>
        <code>pixel</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The Pixel to update 0 to 7<br/> Defaults to 0
      </td>
    </tr>
    <tr>
      <td>
        <code>times</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The number of times to flash the pixel<br/> Defaults to 0
      </td>
    </tr>
    <tr>
      <td>
        <code>intervalms</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The milliseconds to pause between state changes<br/> Defaults to 0
      </td>
    </tr>
	<tr>
      <td>
        <code>r</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The RED value for the Pixel 0 to 255<br/> Defaults to 0
      </td>
    </tr>
	<tr>
      <td>
        <code>g</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The GREEN value for the Pixel 0 to 255<br/>Defaults to 0
      </td>
    </tr>
	<tr>
      <td>
        <code>b</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The BLUE value for the Pixel 0 to 255<br/>Defaults to 0
      </td>
    </tr>
	<tr>
      <td>
        <code>brightness</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The relative brightness for the pixel 0.0 to 1.0<br/>Defaults to 0.2
      </td>
    </tr>
  </tbody>
</table>

```javascript
setBrightness({ pixel, brightness = DEFAULT_BRIGHTNESS })
```
Set the brightness of all the Blinkt! pixels if no pixel specified, or the brightness for all of them if no PixelNumber specified.
<table class="responsive">
  <tbody>
    <tr>
      <td colspan="2"><b>Parameters</b> </td>
    </tr>
	<tr>
      <td>
        <code>pixel</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The pixel number 0 to 7
      </td>
    </tr>
	<tr>
      <td>
        <code>brightness</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
       The relative brightness for the pixel 0.0 to 1.0<br/>Defaults to 0.2
      </td>
    </tr>


  </tbody>
</table>

```javascript
showInitialAnimation({r, g, b})
```
Show an animation that starts with two pixels in the center fading up, extends outwards at full brightness and then turns off.
<table class="responsive">
  <tbody>
    <tr>
      <td colspan="2"><b>Parameters</b> </td>
    </tr>
	<tr>
      <td>
        <code>r</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The RED value for the Pixel 0 to 255<br/> Defaults to 0
      </td>
    </tr>
	<tr>
      <td>
        <code>g</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The GREEN value for the Pixel 0 to 255<br/>Defaults to 0
      </td>
    </tr>
	<tr>
      <td>
        <code>b</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The BLUE value for the Pixel 0 to 255<br/>Defaults to 0
      </td>
    </tr>
  </tbody>
</table>

```javascript
showFinalAnimation({r, g, b})
```
<table class="responsive">
  <tbody>
    <tr>
      <td colspan="2"><b>Parameters</b> </td>
    </tr>
	<tr>
      <td>
        <code>r</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The RED value for the Pixel 0 to 255<br/> Defaults to 0
      </td>
    </tr>
	<tr>
      <td>
        <code>g</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The GREEN value for the Pixel 0 to 255<br/>Defaults to 0
      </td>
    </tr>
	<tr>
      <td>
        <code>b</code>
      </td>
      <td>
        <code>Number (optional)</code><br>
        The BLUE value for the Pixel 0 to 255<br/>Defaults to 0
      </td>
    </tr>
  </tbody>
</table>

```javascript
clear()
```
Unsets all of the Blinkt! Pixels

```javascript
setClearOnExit(true|false)
```
Will undo all Blinkt! configuration and reset LEDs if the process ends or is interrupted with CTRL C.
<table class="responsive">
  <tbody>
    <tr>
      <td colspan="2"><b>Parameters</b> </td>
    </tr>
	<tr>
      <td>
        <code>shouldClearOnExit</code>
      </td>
      <td>
        <code>Boolean Default: true</code><br>
      </td>
    </tr>



  </tbody>
</table>

### Importantly!

```javascript
show()
```
*Commits all the 'set' operations to the Blinkt! (Nothing will show without this!)*

## Acknowledgements

- Original python code: http://docs.pimoroni.com/blinkt/
- Based off [node-blinkt](https://github.com/irrelon/node-blinkt). Modified to use [node-wiring-pi](https://github.com/rsg98/node-wiring-pi) rather than [wiringpi-node](https://github.com/WiringPi/WiringPi-Node) which enables Node > version 8 to be used with the examples.

Tested with Node 11.6 on Raspbian which was installed by following this guide:

- https://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi/