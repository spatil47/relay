# NJIT IEEE Automation Project Phase 1
A [WebIOPi](http://webiopi.trouch.com)-based system for turning outlet-powered devices on and off.

## Installation
1. Install the dependencies listed.
2. Clone repository into your home directory.
3. Run `./setup`, and follow the interactive prompts.
### Dependencies
- Python
- WebIOPi

## Issues/ToDo
- When the WebIOPi server is started in standalone mode, the relays turn on and off for a second. This needs to be fixed soon.
- When the web interface is loaded for the first time after starting the WebIOPi server, the relays all turn on at the same time. This needs to be fixed soon.
