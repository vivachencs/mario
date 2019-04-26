// 调试模式
var enableDebugMode = function(game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function (event) {
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function (event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function () {
    var images = {
        sky: 'img-airplane/sky.png',
        player: 'img-airplane/player.gif',
        bullet: 'img-airplane/bullet.png',
        'enemy-0': 'img-airplane/enemy0.png',
        'enemy-1': 'img-airplane/enemy1.png',
        'enemy-2': 'img-airplane/enemy2.png',
    }
    var game = Game.instance(30, images, function(g){
        var s = Scene.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
