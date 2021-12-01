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
                    `, mySprite, 0, 0 - mySpeed * 3)
            } else if (myDirectional == 90) {
                projectile = sprites.createProjectileFromSprite(img`
                    5 5 5 
                    `, mySprite, mySpeed * 3, 0)
            } else if (myDirectional == 180) {
                projectile = sprites.createProjectileFromSprite(img`
                    5 
                    5 
                    5 
                    `, mySprite, 0, mySpeed * 3)
            } else {
                projectile = sprites.createProjectileFromSprite(img`
                    5 5 5 
                    `, mySprite, 0 - mySpeed * 3, 0)
            }
            projectile.z = -1
            scene.cameraShake(2, 50)
            myArsenal += -1
            arsenalSprite.setText(convertToText(myArsenal))
        } else {
            Notification.notify("Пополнить боезапас!", 5)
        }
    })
})
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
function startLevel () {
    if (level == 1) {
        tiles.setTilemap(tilemap`level0`)
        numEnemy = 2
    } else if (level == 2) {
        tiles.setTilemap(tilemap`level4`)
        numEnemy = 2
        mySpeed = 15
    } else {
        game.over(true)
    }
    mySprite.setImage(assets.image`myTank`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    myDirectional = 0
    myArsenal = 5
}
let projectile: Sprite = null
let myDirectional = 0
let mySprite: Sprite = null
let arsenalSprite: TextSprite = null
let level = 0
let numEnemy = 0
let mySpeed = 0
let myArsenal = 0
myArsenal = 5
mySpeed = 10
numEnemy = 2
mySpeed = 10
myArsenal = 5
level = 1
arsenalSprite = sprites.create(img`
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
    `, SpriteKind.arsenal)
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
arsenalSprite = textsprite.create(convertToText(myArsenal), 15, 1)
arsenalSprite.setIcon(img`
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
arsenalSprite.setFlag(SpriteFlag.RelativeToCamera, true)
arsenalSprite.setPosition(70, 6)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(500, function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
})
