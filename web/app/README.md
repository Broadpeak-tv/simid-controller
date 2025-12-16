# SIMID demo application for Web platforms

A sample web application to play a video stream and to load SIMID creatives.

This sample appplication displays SIMID creatives from triggers from the Broadpeak [SmartLib agent](https://delivery-platform.broadpeak.tv/smartlib/).

The playback is achieved using the open-source project [shaka-player](https://github.com/shaka-project/shaka-player).

This application is using the SIMID controller from this project [web/controller](../controller), which needs to be built before running the application.

## Run the demo

### Build the SIMID controller

See [web/controller/README.md](../controller/README.md)

### Run the application

```sh
npm ci
npm start
```

The demonstration application will be available at http://localhost:8080

After start, input the URL to a Broadpeak DAI stream in the input field, and click the "LOAD" button.

The input stream URL can also be provided as a query parameter: ``http://localhost:8080?url=<stream_url>``

The loaded stream URL is stored in local storage and re-used when reloading the application.

The application will play the video stream, and at appropriate times (as configured in the Broadpeak DAI solution for that stream) will trigger display of the SIMID creatives.
