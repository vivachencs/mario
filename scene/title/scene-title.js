class SceneTitle extends Scene {
    constructor(game) {
        super(game)
        game.registerAction('k', function(){
            var s = scene(game)
            game.replaceScene(s)
        })
    }
    draw() {
        // draw labels
        this.game.context.fillText('按 k 开始游戏', 100, 190)
    }
}
