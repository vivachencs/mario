class Bullet extends ChenImage {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }
    setup() {
        this.speed = 10
    }
    update() {
        this.y -= this.speed
    }
}