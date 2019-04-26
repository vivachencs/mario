class Scene extends ChenScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        // 初始化
        var game = this.game
        this.numberOfEnemis = 5
        this.bg = ChenImage.new(game, 'sky')
        this.player = Player.new(game)
        this.player.x = 130
        this.player.y = 430
        this.addElement(this.bg)
        this.addElement(this.player)
        this.addEnemis()
    }
    addEnemis() {
        for (let i = 0; i < this.numberOfEnemis; i++) {
            var e = Enemy.new(this.game)
            this.addElement(e)
        }
    }
    setupInputs() {
        var g = this.game
        g.registerAction('a', () => {
            this.player.moveLeft()
        })
        g.registerAction('d', () => {
            this.player.moveRight()
        })
        g.registerAction('w', () => {
            this.player.moveUp()
        })
        g.registerAction('s', () => {
            this.player.moveDown()
        })
        g.registerAction('j', () => {
            this.player.fire()
        })
    }
    update() {
        super.update()
    }
}

// var scene = function(game) {
//     var s = {
//         game: game,
//     }
//     // 初始化
    

//     // var score = 0

//     // game.registerAction('a', function(){
//     //     paddle.moveLeft()
//     // })
//     // game.registerAction('d', function(){
//     //     paddle.moveRight()
//     // })
//     // game.registerAction('f', function(){
//     //     ball.fire()
//     // })

//     s.draw = function() {
//         // draw 背景
        
//         // draw
//         game.drawImage(player)
//         // draw labels
//         // game.context.fillText('分数: ' + score, 10, 290)
//     }
//     s.update = function() {
//         if (window.paused) {
//             return
//         }
//     }

//     // // mouse event
//     // var enableDrag = false
//     // game.canvas.addEventListener('mousedown', function(event) {
//     //     var x = event.offsetX
//     //     var y = event.offsetY
//     //     log(x, y, event)
//     //     // 检查是否点中了 ball
//     //     if (ball.hasPoint(x, y)) {
//     //         // 设置拖拽状态
//     //         enableDrag = true
//     //     }
//     // })
//     // game.canvas.addEventListener('mousemove', function(event) {
//     //     var x = event.offsetX
//     //     var y = event.offsetY
//     //     // log(x, y, 'move')
//     //     if (enableDrag) {
//     //         log(x, y, 'drag')
//     //         ball.x = x
//     //         ball.y = y
//     //     }
//     // })
//     // game.canvas.addEventListener('mouseup', function(event) {
//     //     var x = event.offsetX
//     //     var y = event.offsetY
//     //     log(x, y, 'up')
//     //     enableDrag = false
//     // })

//     return s
// }
