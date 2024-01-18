# SIMID plugin framework

Library/module that provides SIMID protocol implementation and base SIMID player and creative.


## SIMID plugin library

The SIMID plugin library is a javascript library that can be plugged with an HTML5 player in order to support non-linear interactive ads insertion of SIMID creatives.

This plugin implements:
- the SIMID protocol framework
- A base SIMID creative that can be used by any SIMID creative
- A base SIMID player that can be used as a media player plugin to support SIMID creatives display 

### Build the library

``# npm run build``

This will generate a library bundle ``dist/simid.js``


## Demo application

The folder app contains a demonstration application that integrates the SIMID library and that is able to load and display non-linear ad-insertion using SIMID creatives.


### Run the demo

``# npm start``

The demonstration application will be available at http://localhost:8080/app/index.html


## WebOS application

The folder tvapps/webos contains a WebOS application that is able to load a remote application from a remote web server.

The remote hosted application url is specified in file index.html:

```html
<head>
  <script>location.href='https://explo.broadpeak.tv:8343/simid/app/demo.html';</script>
<head>
```

### Package the application

``# npm run webos:package``

### Install the package

``# npm run webos:install -- -d <device_name>``

with ``device_name`` the name of the connected device as returned by ``ares-device-info``

### Run the application

``# npm run webos:run -- -d <device_name>``