# Imports
import webiopi

# Enable debug output
webiopi.setDebug()

# Retrieve GPIO lib
GPIO = webiopi.GPIO
SWITCH1 = 2
SWITCH2 = 3
SWITCH3 = 4
SWITCH4 = 17
SWITCH5 = 27
SWITCH6 = 22
SWITCH7 = 10
SWITCH8 = 9

# Called by WebIOPi at script loading
def setup():
    webiopi.debug("Basic script - Setup")
    # Setup GPIOs
    GPIO.setFunction(SWITCH1, GPIO.IN)
    GPIO.setFunction(SWITCH2, GPIO.IN)
    GPIO.setFunction(SWITCH3, GPIO.IN)
    GPIO.setFunction(SWITCH4, GPIO.IN)
    GPIO.setFunction(SWITCH5, GPIO.IN)
    GPIO.setFunction(SWITCH6, GPIO.IN)
    GPIO.setFunction(SWITCH7, GPIO.IN)
    GPIO.setFunction(SWITCH8, GPIO.IN)

# Called by WebIOPi at server shutdown
def destroy():
    webiopi.debug("Basic script - Destroy")
    # Reset GPIO functions
    GPIO.setFunction(SWITCH1, GPIO.IN)
    GPIO.setFunction(SWITCH2, GPIO.IN)
    GPIO.setFunction(SWITCH3, GPIO.IN)
    GPIO.setFunction(SWITCH4, GPIO.IN)
    GPIO.setFunction(SWITCH5, GPIO.IN)
    GPIO.setFunction(SWITCH6, GPIO.IN)
    GPIO.setFunction(SWITCH7, GPIO.IN)
    GPIO.setFunction(SWITCH8, GPIO.IN)
