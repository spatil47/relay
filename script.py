# Imports
import webiopi

# Enable debug output
webiopi.setDebug()

# Retrieve GPIO lib
GPIO = webiopi.GPIO
PINS = [2,3,4,17,27,22,10,9]

# Called by WebIOPi at script loading
def setup():
    webiopi.debug("Basic script - Setup")
    # Setup GPIOs
for p in PINS:
    GPIO.setFunction(p, GPIO.OUT)

# Called by WebIOPi at server shutdown
def destroy():
    webiopi.debug("Basic script - Destroy")
    # Reset GPIO functions
for p in PINS:
    GPIO.setFunction(p, GPIO.IN)
