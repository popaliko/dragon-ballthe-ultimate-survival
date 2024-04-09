scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Goku.vy == 0) {
        Goku.vy = -250
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(true)
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(projectile)
    game.gameOver(false)
})
let projectile: Sprite = null
let Energie: Sprite = null
let Goku: Sprite = null
scene.setBackgroundColor(9)
Goku = sprites.create(assets.image`Od•`, SpriteKind.Player)
controller.moveSprite(Goku, 100, 0)
Goku.ay = 500
scene.cameraFollowSprite(Goku)
tiles.setCurrentTilemap(tilemap`Level1`)
tiles.placeOnTile(Goku, tiles.getTileLocation(0, 17))
info.startCountdown(120)
for (let Wert of tiles.getTilesByType(assets.tile`myTile5`)) {
    Energie = sprites.create(img`
        . . . . . 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . 8 8 8 6 6 6 6 6 6 6 8 8 8 . 
        . 8 8 8 6 6 9 9 9 9 9 6 6 8 8 8 
        . 8 8 8 6 9 9 9 9 9 9 9 6 8 8 8 
        . 8 8 8 6 9 9 9 9 9 9 9 6 8 8 8 
        . 8 8 8 6 9 9 9 9 9 9 9 6 8 8 8 
        . 8 8 8 6 9 9 9 9 9 9 9 6 8 8 8 
        . 8 8 8 6 9 9 9 9 9 9 9 6 8 8 8 
        . 8 8 8 6 6 9 9 9 9 9 9 6 8 8 8 
        . . 8 8 8 6 6 6 6 6 6 6 6 8 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . 8 8 8 8 8 8 8 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(Energie, assets.tile`myTile5`)
}
forever(function () {
    projectile = sprites.createProjectileFromSide(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .....................1...8888...
        ....................1111.86688..
        ....aaaaa....1aaaaa1111.8869968.
        ....aaaaa1.1111111111111.88668..
        ...111f111.11.............888...
        ...aa111f11111aa1111111111111111
        ...aa111f11111aa1111111111111111
        ...111f111.11................111
        .1..aaaaa..11.................11
        111..aaaa.111.................11
        .111111111111...................
        11111aaaaa11....................
        .1..............................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, -50, 0)
    projectile.y = randint(0, 2000)
    projectile.setKind(SpriteKind.Enemy)
    pause(100)
})
