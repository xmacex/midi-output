input.onButtonPressed(Button.A, function () {
    midi.playTone(165, music.beat(BeatFraction.Half))
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . # #
        # # . # #
        # # . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    midi.pitchBend(input.lightLevel())
    basic.showNumber(input.lightLevel())
})
midi.useSerial()
basic.forever(function () {
	
})
