namespace SpriteKind {
    export const info = SpriteKind.create()
    export const arsenal = SpriteKind.create()
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("action", 500, function () {
        if (myArsenal > 0) {
            if (myDirectional == 0) {
                projectile = sprites.createProjectileFromSprite(img`
                    5 
                    5 
                    5 
                    `, mySprite, 0, 0 - mySpeed * 4)
            } else if (myDirectional == 90) {
                projectile = sprites.createProjectileFromSprite(img`
                    5 5 5 
                    `, mySprite, mySpeed * 4, 0)
            } else if (myDirectional == 180) {
                projectile = sprites.createProjectileFromSprite(img`
                    5 
                    5 
                    5 
                    `, mySprite, 0, mySpeed * 4)
            } else {
                projectile = sprites.createProjectileFromSprite(img`
                    5 5 5 
                    `, mySprite, 0 - mySpeed * 4, 0)
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
    myEnemy = sprites.create(enemyImages._pickRandom(), SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemy, assets.tile`transparency16`)
    sprites.setDataNumber(myEnemy, "speed", randint(5, 40))
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy()
    music.playTone(494, music.beat(BeatFraction.Sixteenth))
})
function startLevel () {
    if (level == 1) {
        tiles.setTilemap(tilemap`level0`)
        numEnemy = 3
    } else if (level == 2) {
        tiles.setTilemap(tilemap`level4`)
        numEnemy = 10
        mySpeed = 15
    } else {
        game.over(true)
    }
    mySprite.setImage(assets.image`myTank`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    myDirectional = 0
    myArsenal = 5
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
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.bigCrash.play()
    otherSprite.destroy(effects.fire, 100)
    mySprite.startEffect(effects.fire, 100)
    info.changeScoreBy(1)
    info.changeLifeBy(-1)
})
let y = 0
let x = 0
let projectile: Sprite = null
let myDirectional = 0
let arsenalInfo: TextSprite = null
let mySprite: Sprite = null
let myEnemy: Sprite = null
let level = 0
let numEnemy = 0
let mySpeed = 0
let myArsenal = 0
let enemyImages: Image[] = []
enemyImages = [assets.image`Enemy01`, img`
    9 9 9 . 9 8 6 . 9 9 9 
    6 6 6 . 9 8 6 . 6 6 6 
    9 9 9 . 9 8 6 . 9 9 9 
    6 6 6 . 9 9 6 . 6 6 6 
    9 9 9 9 9 8 6 6 9 9 9 
    6 6 6 9 6 8 8 6 6 6 6 
    9 9 9 9 6 9 8 6 9 9 9 
    6 6 6 9 6 9 8 6 6 6 6 
    9 9 9 9 6 6 8 6 9 9 9 
    6 6 6 9 9 6 6 6 6 6 6 
    9 9 9 . . . . . 9 9 9 
    `, img`
    6 6 6 6 . . 9 8 6 . . 6 6 6 6 
    9 9 9 9 . . 9 8 6 . . 9 9 9 9 
    6 6 6 6 . . 9 8 6 . . 6 6 6 6 
    9 9 9 9 . . 9 8 6 . . 9 9 9 9 
    6 6 6 6 . 9 9 8 9 6 . 6 6 6 6 
    9 9 9 9 . 9 6 8 9 6 . 9 9 9 9 
    6 6 6 6 9 9 6 8 9 9 6 6 6 6 6 
    9 9 9 9 9 6 6 8 9 9 6 9 9 9 9 
    6 6 6 6 9 6 8 8 8 9 6 6 6 6 6 
    9 9 9 9 9 6 8 8 8 9 6 9 9 9 9 
    6 6 6 6 9 6 6 6 9 9 6 6 6 6 6 
    9 9 9 9 9 9 6 6 9 9 6 9 9 9 9 
    6 6 6 6 . 9 9 6 6 6 . 6 6 6 6 
    9 9 9 9 . . . . . . . 9 9 9 9 
    6 6 6 6 . . . . . . . 6 6 6 6 
    `]
let enemyImages2 = [img`
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
    `, img`
    9 6 9 6 9 6 9 6 9 6 9 
    9 6 9 6 9 6 9 6 9 6 9 
    9 6 9 6 9 6 9 6 9 6 9 
    . . . . 6 6 6 6 6 6 . 
    6 6 6 6 6 8 8 8 8 6 . 
    8 8 8 9 8 8 9 9 6 6 . 
    9 9 9 9 9 6 6 6 6 9 . 
    . . . . 9 9 9 9 9 9 . 
    9 6 9 6 9 6 9 6 9 6 9 
    9 6 9 6 9 6 9 6 9 6 9 
    9 6 9 6 9 6 9 6 9 6 9 
    `, img`
    6 9 6 9 6 9 6 9 6 9 6 9 6 9 6 
    6 9 6 9 6 9 6 9 6 9 6 9 6 9 6 
    6 9 6 9 6 9 6 9 6 9 6 9 6 9 6 
    6 9 6 9 6 9 6 9 6 9 6 9 6 9 6 
    . . . . . . 6 6 6 6 6 6 . . . 
    . . . . 6 6 9 9 9 9 9 9 6 . . 
    6 6 6 6 9 9 9 9 8 8 9 9 6 . . 
    8 8 8 8 8 8 8 8 8 8 6 6 6 . . 
    9 9 9 9 9 6 6 6 8 8 6 6 9 . . 
    . . . . 9 9 9 6 6 6 6 9 9 . . 
    . . . . . . 9 9 9 9 9 9 . . . 
    6 9 6 9 6 9 6 9 6 9 6 9 6 9 6 
    6 9 6 9 6 9 6 9 6 9 6 9 6 9 6 
    6 9 6 9 6 9 6 9 6 9 6 9 6 9 6 
    6 9 6 9 6 9 6 9 6 9 6 9 6 9 6 
    `]
myArsenal = 5
mySpeed = 10
numEnemy = 2
mySpeed = 10
myArsenal = 5
level = 1
let arsenalSprite = sprites.create(img`
    5 5 5 
    4 4 5 
    5 5 5 
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
info.setLife(3)
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
startLevel()
arsenalInfo = textsprite.create(convertToText(myArsenal), 15, 1)
arsenalInfo.setIcon(img`
    . 5 5 . . . . 
    . 5 5 . . . . 
    . 5 5 . . . . 
    . 5 5 . . . . 
    5 5 5 5 . . . 
    5 5 5 5 . . . 
    5 5 5 5 . . . 
    5 5 5 5 . . . 
    5 5 5 5 . . . 
    5 5 5 5 . . . 
    5 5 5 5 . . . 
    5 5 5 5 . . . 
    `)
arsenalInfo.setFlag(SpriteFlag.RelativeToCamera, true)
arsenalInfo.setPosition(70, 6)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(500, function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
    if (sprites.allOfKind(SpriteKind.arsenal).length < 20 && Math.percentChance(30)) {
        if (Math.percentChance(1)) {
            arsenalSprite = sprites.create(img`
                1 1 2 2 1 1 
                1 1 2 2 1 1 
                2 2 2 2 2 2 
                2 2 2 2 2 2 
                1 1 2 2 1 1 
                1 1 2 2 1 1 
                `, SpriteKind.Food)
        } else {
            arsenalSprite = sprites.create(img`
                5 5 5 
                4 4 5 
                5 5 5 
                `, SpriteKind.arsenal)
        }
        arsenalSprite.z = -1
        tiles.placeOnRandomTile(arsenalSprite, assets.tile`transparency16`)
    }
    if (sprites.allOfKind(SpriteKind.Enemy).length < numEnemy && Math.percentChance(30)) {
        createEnemy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.vx + value.vy == 0) {
            if (Math.percentChance(90)) {
                sprites.setDataNumber(value, "dir", (sprites.readDataNumber(value, "dir") + 180) % 360)
            } else {
                sprites.setDataNumber(value, "dir", (sprites.readDataNumber(value, "dir") + 90) % 360)
            }
        } else {
            if (Math.percentChance(5)) {
                sprites.setDataNumber(value, "dir", (sprites.readDataNumber(value, "dir") - 90) % 360)
            } else if (Math.percentChance(5)) {
                sprites.setDataNumber(value, "dir", (sprites.readDataNumber(value, "dir") + 90) % 360)
            }
        }
        doDirectional(sprites.readDataNumber(value, "dir"))
        value.setVelocity(sprites.readDataNumber(value, "speed") * x, sprites.readDataNumber(value, "speed") * y)
        value.sayText("" + convertToText(value.vx) + ":" + convertToText(value.vy) + ":" + sprites.readDataNumber(value, "speed"))
    }
})
