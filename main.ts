basic.forever(function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(90)
    if (true) {
        music.play(music.stringPlayable("G C A F C5 A D C5 ", 123), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.No)
        basic.pause(5000)
    } else {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.Yes)
        basic.pause(5000)
    }
})
