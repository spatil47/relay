#!/usr/bin/python
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

# init list with pin numbers

pinList = [2, 3, 4, 17, 27, 22, 10, 9]

# loop through pins and set mode and state to 'low'

for i in pinList: 
    GPIO.setup(i, GPIO.OUT) 
    GPIO.output(i, GPIO.HIGH)

# time to sleep between operations in the main loop

SleepTimeL = 1

# main loop

try:
  for i in pinList:
    GPIO.output(i, GPIO.LOW)
    time.sleep(SleepTimeL)
  GPIO.cleanup()

# End program cleanly with keyboard
except KeyboardInterrupt:
  print "  Quit"
  GPIO.cleanup()
