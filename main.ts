info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
    info.startCountdown(10)
})
info.onLifeZero(function () {
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    food1.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    info.startCountdown(10)
    info.changeScoreBy(1)
    info.changeLifeBy(1)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    music.playMelody("E - E - E - - - ", 300)
})
let food1: Sprite = null
color.setPalette(
color.originalPalette
)
music.playMelody("E B C5 A B G A F ", 120)
controller.startLightAnimation(light.runningLightsAnimation, 1000)
game.splash("Microsoft Pocket Demo")
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 . . . . . . . . . . . . . . 5 
    5 . . . . . . . . . . . . . . 5 
    5 . . 5 5 5 . . . . 5 5 5 . . 5 
    5 . . 5 5 5 . . . . 5 5 5 . . 5 
    5 . . 5 5 5 . . . . 5 5 5 . . 5 
    5 . . . . . . . . . . . . . . 5 
    5 . . . . . . . . . . . . . . 5 
    5 . . 5 5 5 5 5 5 5 5 5 5 . . 5 
    5 . . 5 5 5 5 5 5 5 5 5 5 . . 5 
    5 . . 5 5 5 5 5 5 5 5 5 5 . . 5 
    5 . . . 5 5 5 5 5 5 5 5 . . . 5 
    5 . . . . 5 5 5 5 5 5 . . . . 5 
    5 . . . . . . . . . . . . . . 5 
    5 . . . . . . . . . . . . . . 5 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    `, SpriteKind.Player)
food1 = sprites.create(img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, SpriteKind.Food)
controller.moveSprite(mySprite)
info.startCountdown(10)
info.setLife(5)
let myMinimap = minimap.minimap()
