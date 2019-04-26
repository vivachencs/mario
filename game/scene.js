class ChenScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    addElement(img) {
        img.scene = this
        this.elements.push(img)
    }
    draw() {
        this.elements.forEach((item) => {
            this.game.drawImage(item)
        })
    }
    update() {
        this.elements.forEach((item) => {
            item.update()
        })
    }
}
