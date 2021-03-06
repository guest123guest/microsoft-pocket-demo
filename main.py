def on_player2_connected():
    music.play_melody("E - E - E - - - ", 300)
controller.player2.on_event(ControllerEvent.CONNECTED, on_player2_connected)

music.play_melody("E B C5 A B G A F ", 120)
game.splash("Microsoft Pocket Demo")
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)