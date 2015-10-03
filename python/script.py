import webiopi
import datetime

GPIO = webiopi.GPIO

PIN = [2, 3, 4, 17, 27, 22, 10, 9]

def setup():
    for i in PIN:
        GPIO.setFunction(i, GPIO.OUT)

def loop():
    for i in PIN:
        GPIO.digitalWrite(i, GPIO.HIGH)
        webiopi.sleep(1)

def destroy():
    GPIO.digitalWrite(LIGHT, GPIO.LOW)
