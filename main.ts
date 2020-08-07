input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . # #
        # # . # #
        # # . . .
        `)
    midi.playTone(165, music.beat(BeatFraction.Half))
})
basic.forever(function () {
	
})
