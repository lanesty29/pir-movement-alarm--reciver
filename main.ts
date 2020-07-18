radio.onReceivedString(function (receivedString) {
    if (receivedString == "moving") {
        basic.showIcon(IconNames.StickFigure)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (receivedString == "still") {
        basic.clearScreen()
    }
})
radio.setGroup(73)
