class Player extends ChenImage {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }

    setup() {
        this.speed = 12
        this.cooldown = 0
    }

    update() {
        if (this.cooldown > 0) {
            this.cooldown--
        }
    }

    moveLeft() {
        this.x -= this.speed
    }

    moveRight() {
        this.x += this.speed
    }
    
    moveUp() {
        this.y -= this.speed
    }

    moveDown() {
        this.y += this.speed
    }

    fire() {
        if (this.cooldown === 0) {
            var x = this.x + this.w / 2
            var y = this.y + 5
            var b = Bullet.new(this.game)
            b.x = x - b.w / 2
            b.y = y
            this.scene.addElement(b)    
            this.cooldown = 2
        }
    }
}