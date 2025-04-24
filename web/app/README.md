# SIMID demo application for Web platforms

A sample web application to load SIMID creatives.

This sample appplication is able to play a stream and to load SIMID creatives triggered by the Broadpeak [SmartLib agent](https://delivery-platform.broadpeak.tv/smartlib/).

The playback is achieved using open-source project [shaka-player](https://github.com/shaka-project/shaka-player).

This application is using the SIMID controller from this project [web/controller](../controller), which requires to be built before running the application.

## Run the demo

### Build the SIMID controller

See [web/controller/README.md](../controller/README.md)

### Run the application

```sh
# npm start
```

The demonstration application will be available at http://localhost:8080
