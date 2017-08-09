class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }

    addElement(image) {
      image.scene = this
      this.elements.push(image)
    }

    static new(game) {
        var i = new this(game)
        return i
    }
    draw() {
      for (var i = 0; i < this.elements.length; i++) {
        var e = this.elements[i]
        if (e.alive === false) {
          return
        }
        this.game.drawImage(e)
      }
    }
    update() {
      for (var i = 0; i < this.elements.length; i++) {
        var e = this.elements[i]
        e.update()
      }
    }
}
