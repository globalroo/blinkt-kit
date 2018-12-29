# blinkt-kit

Pimoroni Blinkt! NodeJS bindings. Based on node-blinkt. Updated for Node > 8.

```sh
npm install blinkt-kit
```

```javascript

const { Blinkt } = require("blinkt-kit");

const blinkt = new Blinkt();

blinkt.setAllPixels({ r: 179, g: 69, b: 251, brightness: 0.1 });
blinkt.setPixel({ ix: 0, r: 255, brightness: 0.1 });
blinkt.setPixel({ ix: 0, g: 255, brightness: 0.1 });
blinkt.setPixel({ ix: 0, b: 255, brightness: 0.1 });

// Send update applies your changes to the Blinkt!
blinkt.sendUpdate();

// Switch everything off after two seconds.
setTimeout(() => {
	blinkt.clearAll();
	blinkt.sendUpdate();
}, 2000)

```

## API

```javascript
setPixel({ ix = 0, r, g, b brightness = DEFAULT_BRIGHTNESS }
```
Set an individual Blinkt! pixel to the a specific value.
<table class="responsive">
  <tbody>
    <tr>
      <td><b>Parameters</b></td>
    </tr>
    <tr>
      <td>
        <code>ix</code>
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
        The relative brightness for the pixel 0.0 to 1.0<br/>Defaults to 0.1
      </td>
    </tr>

  </tbody>
</table>

```javascript
setAllPixels({ r, g, b, brightness }
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
        The relative brightness for the pixel 0.0 to 1.0<br/>Defaults to 0.1
      </td>
    </tr>

  </tbody>
</table>

```javascript
setBrightness({ pixelNumber, brightness = DEFAULT_BRIGHTNESS })
```
Set the brightness of all the Blinkt! pixels if no pixelNumber specified, or the brightness for all of them if no PixelNumber specified.
<table class="responsive">
  <tbody>
    <tr>
      <td colspan="2"><b>Parameters</b> </td>
    </tr>
	<tr>
      <td>
        <code>pixelNumber</code>
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
       The relative brightness for the pixel 0.0 to 1.0<br/>Defaults to 0.1
      </td>
    </tr>


  </tbody>
</table>

```javascript
clearAll()
```
Unsets all of the Blinkt! Pixels
```javascript
sendUpdate()
```

## Acknowledgements

Based off [node-blinkt](https://github.com/irrelon/node-blinkt). Modified to use [node-wiring-pi](https://github.com/rsg98/node-wiring-pi) rather than [wiringpi-node](https://github.com/WiringPi/WiringPi-Node) which enables Node > version 8 to be used with the examples.

Tested with Node 11.6 on Raspbian which was installed by following this guide:

- https://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi/