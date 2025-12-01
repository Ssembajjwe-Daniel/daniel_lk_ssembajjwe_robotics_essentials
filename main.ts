let distance: number;
//  music.play(music.string_playable("G B A G C5 B A B ", 120),
//  
//  music.PlaybackMode.UNTIL_DONE)
function getmax(a: number, b: number) {
    if (b == a) {
        console.log("b was equal to a")
    } else if (b > a) {
        led.plotBarGraph(a, b)
    } else {
        cuteBot.stopcar()
    }
    
}

let d = 0
let c = 0
//  the basic module provides access to the microbit functionality
basic.showIcon(IconNames.LeftTriangle)
basic.showNumber(12)
basic.pause(1000)
basic.showString("Robotics<..>")
let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
//  function call that controls how long the bot moves
cuteBot.moveTime(cuteBot.Direction.forward, 60, 300)
//  cuteBot.Direction.BACKWARD
//  cuteBot.Direction.FORWARD
getmax(6, 6)
// the cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS) returns a value and assigned
// to the distance variable,then we check if distance is in given range,stop or move left
cuteBot.moveTime(cuteBot.Direction.forward, 60, 3000)
while (true) {
    distance = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (distance < 10) {
        cuteBot.stopcar()
        basic.showString("Turning")
    } else {
        cuteBot.Direction.left
        cuteBot.motors(30, 90)
    }
    
}
