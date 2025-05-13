# SIMID SDKs

This repository provides an SDK with reference implementations for base SIMID controllers, for the following platforms:

- [Web](web/README.md)
- [Android](android/README.md)

SIMID controllers are required in video player applications, to load and play SIMID ad creatives. Its primary role is to communicate with the SIMID creatives through the SIMID protocol.

## Sample applications

This SDK also provides sample applications to illustrate the integration and use of such SIMID controllers. Those are designed to be used within Broadpeak Click2 scenarios, in which:
- the Broadpeak Dynamic Ad Insertion (DAI) solution gets ads from the ad server, and originates ABR streams (HLS or DASH)
- the Broadpeak SmartLib SDK communicates with the Broadpeak DAI solution to acquire information about the ad break timings and creatives to load
- The SmartLib SDK notifies the application accordingly.
