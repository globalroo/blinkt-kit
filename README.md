# blinkt-js

Pimoroni Blinkt! NodeJS bindings. Based on node-blinkt. Updated for Node > 8.

```sh
npm install blinkt-js
```

```javascript

const { Blinkt } = require("blinkt-js");

const blinkt = new Blinkt();

blinkt.setAllPixels({ r: 179, g: 69, b: 251, brightness: 0.1 });
blinkt.sendUpdate();

```