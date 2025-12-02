# music.play(music.string_playable("G B A G C5 B A B ", 120),
# 
# music.PlaybackMode.UNTIL_DONE)
def getmax(a: number, b: number):
    if b == a:
        print("b was equal to a")
    elif b > a:
        led.plot_bar_graph(a, b)
    else:
        cuteBot.stopcar()
c = 0
d = 0
# the basic module provides access to the microbit functionality
basic.show_icon(IconNames.LEFT_TRIANGLE)
basic.show_number(12)
basic.pause(1000)
basic.show_string("Robotics<..>")
strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
strip.show_rainbow(1, 360)
# function call that controls how long the bot moves
cuteBot.move_time(cuteBot.Direction.FORWARD, 20, 160)
# cuteBot.Direction.BACKWARD
# cuteBot.Direction.FORWARD
getmax(6, 6)
# the cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS) returns a value and assigned
# to the distance variable,then we check if distance is in given range,stop or move left
cuteBot.move_time(cuteBot.Direction.FORWARD, 20, 160)
while True:
    distance = cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS)
    if distance <= 10:
        cuteBot.Direction.LEFT
        cuteBot.Direction.forward
        cuteBot.motors(10, 10)
    
        
        
    