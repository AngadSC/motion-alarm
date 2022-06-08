let distance = 0
function red () {
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
}
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P12,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P12,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
    if (distance > 15) {
        pins.analogWritePin(AnalogPin.P14, 1023)
    } else if (distance < 15 && distance > 10) {
        pins.analogWritePin(AnalogPin.P15, 1023)
    } else if (distance < 10) {
        pins.analogWritePin(AnalogPin.P13, 1023)
    }
})
basic.forever(function () {
    if (distance < 10) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        pins.digitalWritePin(DigitalPin.P0, 1)
        music.playMelody("C B F - D G A C ", 51)
    }
})
