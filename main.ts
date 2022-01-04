namespace SpriteKind {
    export const info = SpriteKind.create()
    export const arsenal = SpriteKind.create()
    export const money = SpriteKind.create()
    export const ProjectleEnemy = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    myDirectional = 0
    animation.runImageAnimation(
    mySprite,
    [img`
        5 5 5 5 . 5 . 5 . 5 5 5 5 
        4 4 4 4 . 5 4 5 . 4 4 4 4 
        5 5 5 5 . 5 4 5 . 5 5 5 5 
        4 4 4 4 . 5 4 5 . 4 4 4 4 
        5 5 5 5 . 5 5 5 . 5 5 5 5 
        4 4 4 4 5 5 e 5 5 4 4 4 4 
        5 5 5 5 5 4 e e 5 5 5 5 5 
        4 4 4 4 5 4 5 e 5 4 4 4 4 
        5 5 5 5 5 4 5 e 5 5 5 5 5 
        4 4 4 4 5 4 4 e 5 4 4 4 4 
        5 5 5 5 5 5 4 5 5 5 5 5 5 
        4 4 4 4 . 5 5 5 . 4 4 4 4 
        5 5 5 5 . . . . . 5 5 5 5 
        `,img`
        4 4 4 4 . 5 . 5 . 4 4 4 4 
        5 5 5 5 . 5 4 5 . 5 5 5 5 
        4 4 4 4 . 5 4 5 . 4 4 4 4 
        5 5 5 5 . 5 4 5 . 5 5 5 5 
        4 4 4 4 . 5 5 5 . 4 4 4 4 
        5 5 5 5 5 5 e 5 5 5 5 5 5 
        4 4 4 4 5 4 e e 5 4 4 4 4 
        5 5 5 5 5 4 5 e 5 5 5 5 5 
        4 4 4 4 5 4 5 e 5 4 4 4 4 
        5 5 5 5 5 4 4 e 5 5 5 5 5 
        4 4 4 4 5 5 4 5 5 4 4 4 4 
        5 5 5 5 . 5 5 5 . 5 5 5 5 
        4 4 4 4 . . . . . 4 4 4 4 
        `],
    200 - mySpeed * 5,
    true
    )
    mySprite.setVelocity(0, 0 - mySpeed)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.money, function (sprite, otherSprite) {
    myMoney += 1
    otherSprite.destroy()
    music.playTone(988, music.beat(BeatFraction.Sixteenth))
    moneyInfo.setText(convertToText(myMoney))
    if (myMoney > 10) {
        myForse = 1
        myShield = 0
        mySpeed = 10
        myPause = 2000
    } else if (myMoney > 20) {
        mySpeed = 15
    } else if (myMoney > 30) {
        myPause = 1500
    } else if (myMoney > 30) {
        mySpeed = 20
    } else if (myMoney > 40) {
        myPause = 1200
    } else if (myMoney > 50) {
        myShield = 1
    } else if (myMoney > 60) {
        mySpeed = 25
    } else if (myMoney > 60) {
        myPause = 1000
    } else if (myMoney > 70) {
        myForse = 2
    } else if (myMoney > 80) {
        myPause = 700
    } else if (myMoney > 90) {
        mySpeed = 30
    } else if (myMoney > 100) {
        myShield = 2
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("myFire", myPause, function () {
        if (myArsenal > 0) {
            if (myDirectional == 0) {
                projectile = sprites.createProjectileFromSprite(img`
                    5 
                    5 
                    5 
                    `, mySprite, 0, 0 - mySpeed * 5)
            } else if (myDirectional == 90) {
                projectile = sprites.createProjectileFromSprite(img`
                    5 5 5 
                    `, mySprite, mySpeed * 5, 0)
            } else if (myDirectional == 180) {
                projectile = sprites.createProjectileFromSprite(img`
                    5 
                    5 
                    5 
                    `, mySprite, 0, mySpeed * 5)
            } else {
                projectile = sprites.createProjectileFromSprite(img`
                    5 5 5 
                    `, mySprite, 0 - mySpeed * 5, 0)
            }
            music.zapped.play()
            projectile.z = -1
            scene.cameraShake(2, 50)
            myArsenal += -1
            arsenalInfo.setText(convertToText(myArsenal))
        } else {
            music.knock.play()
            Notification.notify("Пополнить боезапас!", 5)
        }
    })
})
function doDirectional (num: number) {
    if (num == 0) {
        x = 0
        y = -1
    } else if (num == 90) {
        x = 1
        y = 0
    } else if (num == 180) {
        x = 0
        y = 1
    } else {
        x = -1
        y = 0
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    myDirectional = 270
    animation.runImageAnimation(
    mySprite,
    [img`
        5 4 5 4 5 4 5 4 5 4 5 4 5 
        5 4 5 4 5 4 5 4 5 4 5 4 5 
        5 4 5 4 5 4 5 4 5 4 5 4 5 
        5 4 5 4 5 4 5 4 5 4 5 4 5 
        . . . . . 5 5 5 5 5 5 . . 
        5 5 5 5 5 5 e e e e 5 5 . 
        . 4 4 4 5 e e 5 5 4 4 5 . 
        5 5 5 5 5 5 4 4 4 4 5 5 . 
        . . . . . 5 5 5 5 5 5 . . 
        5 4 5 4 5 4 5 4 5 4 5 4 5 
        5 4 5 4 5 4 5 4 5 4 5 4 5 
        5 4 5 4 5 4 5 4 5 4 5 4 5 
        5 4 5 4 5 4 5 4 5 4 5 4 5 
        `,img`
        4 5 4 5 4 5 4 5 4 5 4 5 4 
        4 5 4 5 4 5 4 5 4 5 4 5 4 
        4 5 4 5 4 5 4 5 4 5 4 5 4 
        4 5 4 5 4 5 4 5 4 5 4 5 4 
        . . . . . 5 5 5 5 5 5 . . 
        5 5 5 5 5 5 e e e e 5 5 . 
        . 4 4 4 5 e e 5 5 4 4 5 . 
        5 5 5 5 5 5 4 4 4 4 5 5 . 
        . . . . . 5 5 5 5 5 5 . . 
        4 5 4 5 4 5 4 5 4 5 4 5 4 
        4 5 4 5 4 5 4 5 4 5 4 5 4 
        4 5 4 5 4 5 4 5 4 5 4 5 4 
        4 5 4 5 4 5 4 5 4 5 4 5 4 
        `],
    200 - mySpeed * 5,
    true
    )
    mySprite.setVelocity(0 - mySpeed, 0)
})
function createEnemy () {
    myEnemy = sprites.create(assets.image`Enemy01`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemy, assets.tile`transparency16`)
    sprites.setDataNumber(myEnemy, "speed", randint(5, 40))
    sprites.setDataNumber(myEnemy, "time", -1)
    if (Math.percentChance(50)) {
        if (Math.percentChance(50)) {
            sprites.setDataNumber(myEnemy, "dir", 0)
        } else {
            sprites.setDataNumber(myEnemy, "dir", 180)
        }
    } else {
        if (Math.percentChance(50)) {
            sprites.setDataNumber(myEnemy, "dir", 90)
        } else {
            sprites.setDataNumber(myEnemy, "dir", 270)
        }
    }
    doDirectional(sprites.readDataNumber(myEnemy, "dir"))
    myEnemy.setVelocity(sprites.readDataNumber(myEnemy, "speed") * x, sprites.readDataNumber(myEnemy, "speed") * y)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    myDirectional = 90
    animation.runImageAnimation(
    mySprite,
    [img`
        5 4 5 4 5 4 5 4 5 4 5 4 5 
        5 4 5 4 5 4 5 4 5 4 5 4 5 
        5 4 5 4 5 4 5 4 5 4 5 4 5 
        5 4 5 4 5 4 5 4 5 4 5 4 5 
        . . 5 5 5 5 5 5 . . . . . 
        . 5 5 4 4 4 4 5 5 5 5 5 5 
        . 5 4 4 5 5 e e 5 4 4 4 . 
        . 5 5 e e e e 5 5 5 5 5 5 
        . . 5 5 5 5 5 5 . . . . . 
        5 4 5 4 5 4 5 4 5 4 5 4 5 
        5 4 5 4 5 4 5 4 5 4 5 4 5 
        5 4 5 4 5 4 5 4 5 4 5 4 5 
        5 4 5 4 5 4 5 4 5 4 5 4 5 
        `,img`
        4 5 4 5 4 5 4 5 4 5 4 5 4 
        4 5 4 5 4 5 4 5 4 5 4 5 4 
        4 5 4 5 4 5 4 5 4 5 4 5 4 
        4 5 4 5 4 5 4 5 4 5 4 5 4 
        . . 5 5 5 5 5 5 . . . . . 
        . 5 5 4 4 4 4 5 5 5 5 5 5 
        . 5 4 4 5 5 e e 5 4 4 4 . 
        . 5 5 e e e e 5 5 5 5 5 5 
        . . 5 5 5 5 5 5 . . . . . 
        4 5 4 5 4 5 4 5 4 5 4 5 4 
        4 5 4 5 4 5 4 5 4 5 4 5 4 
        4 5 4 5 4 5 4 5 4 5 4 5 4 
        4 5 4 5 4 5 4 5 4 5 4 5 4 
        `],
    200 - mySpeed * 5,
    true
    )
    mySprite.setVelocity(mySpeed, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    myDirectional = 180
    animation.runImageAnimation(
    mySprite,
    [img`
        5 5 5 5 . . . . . 5 5 5 5 
        4 4 4 4 . 5 5 5 . 4 4 4 4 
        5 5 5 5 5 5 4 5 5 5 5 5 5 
        4 4 4 4 5 e 4 4 5 4 4 4 4 
        5 5 5 5 5 e 5 4 5 5 5 5 5 
        4 4 4 4 5 e 5 4 5 4 4 4 4 
        5 5 5 5 5 e e 4 5 5 5 5 5 
        4 4 4 4 5 5 e 5 5 4 4 4 4 
        5 5 5 5 . 5 5 5 . 5 5 5 5 
        4 4 4 4 . 5 4 5 . 4 4 4 4 
        5 5 5 5 . 5 4 5 . 5 5 5 5 
        4 4 4 4 . 5 4 5 . 4 4 4 4 
        5 5 5 5 . 5 . 5 . 5 5 5 5 
        `,img`
        4 4 4 4 . . . . . 4 4 4 4 
        5 5 5 5 . 5 5 5 . 5 5 5 5 
        4 4 4 4 5 5 4 5 5 4 4 4 4 
        5 5 5 5 5 e 4 4 5 5 5 5 5 
        4 4 4 4 5 e 5 4 5 4 4 4 4 
        5 5 5 5 5 e 5 4 5 5 5 5 5 
        4 4 4 4 5 e e 4 5 4 4 4 4 
        5 5 5 5 5 5 e 5 5 5 5 5 5 
        4 4 4 4 . 5 5 5 . 4 4 4 4 
        5 5 5 5 . 5 4 5 . 5 5 5 5 
        4 4 4 4 . 5 4 5 . 4 4 4 4 
        5 5 5 5 . 5 4 5 . 5 5 5 5 
        4 4 4 4 . 5 . 5 . 4 4 4 4 
        `],
    200 - mySpeed * 5,
    true
    )
    mySprite.setVelocity(0, mySpeed)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.arsenal, function (sprite, otherSprite) {
    myArsenal += 1
    otherSprite.destroy()
    music.playTone(165, music.beat(BeatFraction.Sixteenth))
    arsenalInfo.setText(convertToText(myArsenal))
})
info.onLifeZero(function () {
    blockSettings.clear()
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy()
    music.playTone(494, music.beat(BeatFraction.Sixteenth))
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`Stena0`)) {
        tiles.setTileAt(location, assets.tile`Stena1`)
    } else if (tiles.tileAtLocationEquals(location, assets.tile`Stena1`)) {
        tiles.setTileAt(location, assets.tile`Stena2`)
    } else if (tiles.tileAtLocationEquals(location, assets.tile`Stena2`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setWallAt(location, false)
    }
    sprite.destroy(effects.fire, 100)
})
function showShield () {
    if (myShield > 0 && spriteutils.isDestroyed(shieldInfo)) {
    	
    } else {
    	
    }
}
function startLevel () {
    if (level == 1) {
        tiles.setTilemap(tilemap`level0`)
        numEnemy = 3
        killEnemy = 10
    } else if (level == 2) {
        tiles.setTilemap(tilemap`level4`)
        numEnemy = 10
        mySpeed = 15
        killEnemy = 25
    } else {
        blockSettings.writeNumber("level", 1)
        level = 1
        game.over(true)
    }
    mySprite.setImage(assets.image`myTank`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    myDirectional = 0
    for (let value of sprites.allOfKind(SpriteKind.arsenal)) {
        tiles.placeOnRandomTile(value, assets.tile`transparency16`)
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let index = 0; index < numEnemy; index++) {
        createEnemy()
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.bigCrash.play()
    otherSprite.destroy(effects.fire, 100)
    sprite.destroy(effects.fire, 100)
    killEnemy += -1
    killInfo.setText(convertToText(killEnemy))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.bigCrash.play()
    otherSprite.destroy(effects.fire, 100)
    mySprite.startEffect(effects.fire, 100)
    killEnemy += -1
    info.changeLifeBy(-1)
    killInfo.setText(convertToText(killEnemy))
})
let projectile2: Sprite = null
let y = 0
let x = 0
let projectile: Sprite = null
let myDirectional = 0
let shieldInfo: TextSprite = null
let killEnemy = 0
let killInfo: TextSprite = null
let moneyInfo: TextSprite = null
let arsenalInfo: TextSprite = null
let mySprite: Sprite = null
let myEnemy: Sprite = null
let numEnemy = 0
let mySpeed = 0
let myShield = 0
let myForse = 0
let myPause = 0
let level = 0
let myMoney = 0
let myArsenal = 0
if (blockSettings.exists("arm")) {
    myArsenal = blockSettings.readNumber("arm")
} else {
    blockSettings.writeNumber("arm", 5)
    myArsenal = 5
}
if (blockSettings.exists("money")) {
    myMoney = blockSettings.readNumber("money")
} else {
    blockSettings.writeNumber("money", 0)
    myMoney = 0
}
if (blockSettings.exists("life")) {
    info.setLife(blockSettings.readNumber("life"))
} else {
    info.setLife(3)
    blockSettings.writeNumber("life", 3)
}
if (blockSettings.exists("level")) {
    level = blockSettings.readNumber("level")
} else {
    blockSettings.writeNumber("level", 1)
    level = 1
}
myPause = 2000
myForse = 1
myShield = 0
mySpeed = 20
numEnemy = 2
mySpeed = 10
let arsenalSprite = sprites.create(img`
    . . . . . 
    . . . . . 
    . . . . . 
    . . . . . 
    . . . . . 
    . . . . . 
    `, SpriteKind.arsenal)
myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
spriteutils.setLifeImage(img`
    f f . 4 . f f . 
    4 4 . 4 . 4 4 . 
    f f . 4 . f f . 
    4 4 4 f 4 4 4 . 
    f f 4 f 4 f f . 
    4 4 4 f 4 4 4 . 
    f f 4 4 4 f f . 
    4 4 . . . 4 4 . 
    `)
mySprite = sprites.create(assets.image`myTank`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
startLevel()
arsenalInfo = textsprite.create(convertToText(myArsenal), 15, 1)
arsenalInfo.setIcon(img`
    . . 5 . . . . 
    . 5 5 5 . . . 
    5 5 5 5 5 . . 
    5 5 5 5 5 . . 
    4 4 5 5 5 . . 
    4 4 5 5 5 . . 
    5 5 5 5 5 . . 
    4 4 5 5 5 . . 
    4 4 5 5 5 . . 
    5 5 5 5 5 . . 
    `)
arsenalInfo.setFlag(SpriteFlag.RelativeToCamera, true)
arsenalInfo.setPosition(60, 6)
moneyInfo = textsprite.create(convertToText(myMoney), 15, 1)
moneyInfo.setIcon(img`
    . . . 2 . . . . . 
    . . 2 2 2 . . . . 
    . 2 2 2 2 2 . . . 
    2 2 2 2 2 2 2 . . 
    . . 2 2 2 . . . . 
    . . 2 2 2 . . . . 
    . . 2 2 2 . . . . 
    . . 2 2 2 . . . . 
    . . . . . . . . . 
    . . 2 2 2 . . . . 
    `)
moneyInfo.setFlag(SpriteFlag.RelativeToCamera, true)
moneyInfo.setPosition(80, 6)
killInfo = textsprite.create(convertToText(killEnemy), 15, 1)
killInfo.setIcon(img`
    . 1 1 1 1 . . . . 
    1 . . . . 1 . . . 
    1 1 . . 1 1 . . . 
    1 . . . . 1 . . . 
    . 1 1 1 1 . . . . 
    . . . . . . . . . 
    . 1 1 1 1 . . . . 
    . 1 1 1 1 . . . . 
    . . . . . . . . . 
    . . . . . . . . . 
    `)
killInfo.setFlag(SpriteFlag.RelativeToCamera, true)
killInfo.setPosition(140, 6)
shieldInfo = textsprite.create(convertToText(myShield), 15, 1)
shieldInfo.setIcon(img`
    . . . . . . . . 
    . . . 5 . . . . 
    . 5 5 5 5 5 . . 
    . 5 5 5 5 5 . . 
    . 5 5 5 5 5 . . 
    . 5 5 5 5 5 . . 
    . . 5 5 5 . . . 
    . . . 5 . . . . 
    . . . . . . . . 
    . . . . . . . . 
    `)
game.onUpdateInterval(500, function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
    if (sprites.allOfKind(SpriteKind.arsenal).length < 20 && Math.percentChance(30)) {
        if (Math.percentChance(1)) {
            arsenalSprite = sprites.create(img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                .......22...22......
                ......2322.2222.....
                ......232222222.....
                ......222222222.....
                .......22222b2......
                ........222b2.......
                .........222........
                ..........2.........
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                `, SpriteKind.Food)
        } else if (Math.percentChance(80)) {
            arsenalSprite = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 4 . . . . . 
                . . . . 2 . . . . 4 4 . . . . . 
                . . . . 2 4 . . 4 5 4 . . . . . 
                . . . . . 2 4 d 5 5 4 . . . . . 
                . . . . . 2 5 5 5 5 4 . . . . . 
                . . . . . . 2 5 5 5 5 4 . . . . 
                . . . . . . 2 5 4 2 4 4 . . . . 
                . . . . . . 4 4 . . 2 4 4 . . . 
                . . . . . 4 4 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.money)
        } else {
            arsenalSprite = sprites.create(img`
                . . . . . . . 
                . . . . . . . 
                . . . 4 . . . 
                . . 4 5 4 . . 
                . . 4 5 4 . . 
                . . d 5 d . . 
                . 4 d 5 d 4 . 
                . 4 5 5 5 4 . 
                . 4 5 5 5 d . 
                . d 5 5 5 d . 
                . d 5 5 5 d . 
                . d 5 5 5 d . 
                . 4 d 5 d 4 . 
                . . 4 4 4 . . 
                . . . . . . . 
                . . . . . . . 
                `, SpriteKind.arsenal)
        }
        arsenalSprite.z = -1
        tiles.placeOnRandomTile(arsenalSprite, assets.tile`transparency16`)
    }
    if (sprites.allOfKind(SpriteKind.Enemy).length < numEnemy && Math.percentChance(30)) {
        createEnemy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        sprites.changeDataNumberBy(value, "time", 1)
        if (value.vx + value.vy == 0 && sprites.readDataNumber(value, "time") <= 0) {
            if (Math.percentChance(50)) {
                sprites.setDataNumber(value, "dir", (sprites.readDataNumber(value, "dir") + 90) % 360)
            } else {
                sprites.setDataNumber(value, "dir", (sprites.readDataNumber(value, "dir") - 90) % 360)
            }
            sprites.setDataNumber(value, "time", -1)
        } else if (value.vx + value.vy == 0) {
            if (Math.percentChance(90)) {
                sprites.setDataNumber(value, "dir", (sprites.readDataNumber(value, "dir") + 180) % 360)
            } else {
                sprites.setDataNumber(value, "dir", (sprites.readDataNumber(value, "dir") + 90) % 360)
            }
            sprites.setDataNumber(value, "time", -1)
        } else {
            if (Math.percentChance(5)) {
                sprites.setDataNumber(value, "dir", (sprites.readDataNumber(value, "dir") - 90) % 360)
                sprites.setDataNumber(value, "time", -1)
            } else if (Math.percentChance(5)) {
                sprites.setDataNumber(value, "dir", (sprites.readDataNumber(value, "dir") + 90) % 360)
                sprites.setDataNumber(value, "time", -1)
            }
        }
        doDirectional(sprites.readDataNumber(value, "dir"))
        value.setVelocity(sprites.readDataNumber(value, "speed") * x, sprites.readDataNumber(value, "speed") * y)
        if (sprites.readDataNumber(value, "dir") == 0) {
            animation.runImageAnimation(
            value,
            [img`
                9 9 9 9 . 9 . 9 . 9 9 9 9 
                8 8 8 8 . 9 8 9 . 8 8 8 8 
                9 9 9 9 . 9 8 9 . 9 9 9 9 
                8 8 8 8 . 9 8 9 . 8 8 8 8 
                9 9 9 9 . 9 9 9 . 9 9 9 9 
                8 8 8 8 9 9 6 9 9 8 8 8 8 
                9 9 9 9 9 8 6 6 9 9 9 9 9 
                8 8 8 8 9 8 9 6 9 8 8 8 8 
                9 9 9 9 9 8 9 6 9 9 9 9 9 
                8 8 8 8 9 8 8 6 9 8 8 8 8 
                9 9 9 9 9 9 8 9 9 9 9 9 9 
                8 8 8 8 . 9 9 9 . 8 8 8 8 
                9 9 9 9 . . . . . 9 9 9 9 
                `,img`
                8 8 8 8 . 9 . 9 . 8 8 8 8 
                9 9 9 9 . 9 8 9 . 9 9 9 9 
                8 8 8 8 . 9 8 9 . 8 8 8 8 
                9 9 9 9 . 9 8 9 . 9 9 9 9 
                8 8 8 8 . 9 9 9 . 8 8 8 8 
                9 9 9 9 9 9 6 9 9 9 9 9 9 
                8 8 8 8 9 8 6 6 9 8 8 8 8 
                9 9 9 9 9 8 9 6 9 9 9 9 9 
                8 8 8 8 9 8 9 6 9 8 8 8 8 
                9 9 9 9 9 8 8 6 9 9 9 9 9 
                8 8 8 8 9 9 8 9 9 8 8 8 8 
                9 9 9 9 . 9 9 9 . 9 9 9 9 
                8 8 8 8 . . . . . 8 8 8 8 
                `],
            100,
            true
            )
            if (Math.abs(mySprite.x - value.x) < 6 && mySprite.y < value.y) {
                timer.debounce("actionE", 1500, function () {
                    projectile2 = sprites.createProjectileFromSprite(img`
                        2 
                        2 
                        . 
                        2 
                        . 
                        e 
                        `, value, 0, -30)
                    projectile2.setKind(SpriteKind.ProjectleEnemy)
                })
            }
        } else if (sprites.readDataNumber(value, "dir") == 90) {
            animation.runImageAnimation(
            value,
            [img`
                9 8 9 8 9 8 9 8 9 8 9 8 9 
                9 8 9 8 9 8 9 8 9 8 9 8 9 
                9 8 9 8 9 8 9 8 9 8 9 8 9 
                9 8 9 8 9 8 9 8 9 8 9 8 9 
                . . 9 9 9 9 9 9 . . . . . 
                . 9 9 8 8 8 8 9 9 9 9 9 9 
                . 9 8 8 9 9 6 6 9 8 8 8 . 
                . 9 9 6 6 6 6 9 9 9 9 9 9 
                . . 9 9 9 9 9 9 . . . . . 
                9 8 9 8 9 8 9 8 9 8 9 8 9 
                9 8 9 8 9 8 9 8 9 8 9 8 9 
                9 8 9 8 9 8 9 8 9 8 9 8 9 
                9 8 9 8 9 8 9 8 9 8 9 8 9 
                `,img`
                8 9 8 9 8 9 8 9 8 9 8 9 8 
                8 9 8 9 8 9 8 9 8 9 8 9 8 
                8 9 8 9 8 9 8 9 8 9 8 9 8 
                8 9 8 9 8 9 8 9 8 9 8 9 8 
                . . 9 9 9 9 9 9 . . . . . 
                . 9 9 8 8 8 8 9 9 9 9 9 9 
                . 9 8 8 9 9 6 6 9 8 8 8 . 
                . 9 9 6 6 6 6 9 9 9 9 9 9 
                . . 9 9 9 9 9 9 . . . . . 
                8 9 8 9 8 9 8 9 8 9 8 9 8 
                8 9 8 9 8 9 8 9 8 9 8 9 8 
                8 9 8 9 8 9 8 9 8 9 8 9 8 
                8 9 8 9 8 9 8 9 8 9 8 9 8 
                `],
            100,
            true
            )
            if (Math.abs(mySprite.y - value.y) < 6 && mySprite.x > value.x) {
                timer.debounce("action", 1500, function () {
                    projectile2 = sprites.createProjectileFromSprite(img`
                        e . 2 . 2 2 
                        `, value, 30, 0)
                    projectile2.setKind(SpriteKind.ProjectleEnemy)
                })
            }
        } else if (sprites.readDataNumber(value, "dir") == 180) {
            animation.runImageAnimation(
            value,
            [img`
                9 9 9 9 . . . . . 9 9 9 9 
                8 8 8 8 . 9 9 9 . 8 8 8 8 
                9 9 9 9 9 9 8 9 9 9 9 9 9 
                8 8 8 8 9 6 8 8 9 8 8 8 8 
                9 9 9 9 9 6 9 8 9 9 9 9 9 
                8 8 8 8 9 6 9 8 9 8 8 8 8 
                9 9 9 9 9 6 6 8 9 9 9 9 9 
                8 8 8 8 9 9 6 9 9 8 8 8 8 
                9 9 9 9 . 9 9 9 . 9 9 9 9 
                8 8 8 8 . 9 8 9 . 8 8 8 8 
                9 9 9 9 . 9 8 9 . 9 9 9 9 
                8 8 8 8 . 9 8 9 . 8 8 8 8 
                9 9 9 9 . 9 . 9 . 9 9 9 9 
                `,img`
                8 8 8 8 . . . . . 8 8 8 8 
                9 9 9 9 . 9 9 9 . 9 9 9 9 
                8 8 8 8 9 9 8 9 9 8 8 8 8 
                9 9 9 9 9 6 8 8 9 9 9 9 9 
                8 8 8 8 9 6 9 8 9 8 8 8 8 
                9 9 9 9 9 6 9 8 9 9 9 9 9 
                8 8 8 8 9 6 6 8 9 8 8 8 8 
                9 9 9 9 9 9 6 9 9 9 9 9 9 
                8 8 8 8 . 9 9 9 . 8 8 8 8 
                9 9 9 9 . 9 8 9 . 9 9 9 9 
                8 8 8 8 . 9 8 9 . 8 8 8 8 
                9 9 9 9 . 9 8 9 . 9 9 9 9 
                8 8 8 8 . 9 . 9 . 8 8 8 8 
                `],
            100,
            true
            )
            if (Math.abs(mySprite.x - value.x) < 6 && mySprite.y > value.y) {
                timer.debounce("action", 1500, function () {
                    projectile2 = sprites.createProjectileFromSprite(img`
                        e 
                        . 
                        2 
                        . 
                        2 
                        2 
                        `, value, 0, 30)
                    projectile2.setKind(SpriteKind.ProjectleEnemy)
                })
            }
        } else {
            animation.runImageAnimation(
            value,
            [img`
                9 8 9 8 9 8 9 8 9 8 9 8 9 
                9 8 9 8 9 8 9 8 9 8 9 8 9 
                9 8 9 8 9 8 9 8 9 8 9 8 9 
                9 8 9 8 9 8 9 8 9 8 9 8 9 
                . . . . . 9 9 9 9 9 9 . . 
                9 9 9 9 9 9 6 6 6 6 9 9 . 
                . 8 8 8 9 6 6 9 9 8 8 9 . 
                9 9 9 9 9 9 8 8 8 8 9 9 . 
                . . . . . 9 9 9 9 9 9 . . 
                9 8 9 8 9 8 9 8 9 8 9 8 9 
                9 8 9 8 9 8 9 8 9 8 9 8 9 
                9 8 9 8 9 8 9 8 9 8 9 8 9 
                9 8 9 8 9 8 9 8 9 8 9 8 9 
                `,img`
                8 9 8 9 8 9 8 9 8 9 8 9 8 
                8 9 8 9 8 9 8 9 8 9 8 9 8 
                8 9 8 9 8 9 8 9 8 9 8 9 8 
                8 9 8 9 8 9 8 9 8 9 8 9 8 
                . . . . . 9 9 9 9 9 9 . . 
                9 9 9 9 9 9 6 6 6 6 9 9 . 
                . 8 8 8 9 6 6 9 9 8 8 9 . 
                9 9 9 9 9 9 8 8 8 8 9 9 . 
                . . . . . 9 9 9 9 9 9 . . 
                8 9 8 9 8 9 8 9 8 9 8 9 8 
                8 9 8 9 8 9 8 9 8 9 8 9 8 
                8 9 8 9 8 9 8 9 8 9 8 9 8 
                8 9 8 9 8 9 8 9 8 9 8 9 8 
                `],
            100,
            true
            )
            if (Math.abs(mySprite.y - value.y) < 6 && mySprite.x < value.x) {
                timer.debounce("action", 1500, function () {
                    projectile2 = sprites.createProjectileFromSprite(img`
                        2 2 . 2 . e 
                        `, value, -30, 0)
                    projectile2.setKind(SpriteKind.ProjectleEnemy)
                })
            }
        }
    }
    if (killEnemy <= 0) {
        level += 1
        startLevel()
        game.showLongText("YOU WIN", DialogLayout.Full)
        music.baDing.play()
    }
})
