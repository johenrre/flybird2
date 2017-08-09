class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)

        this.bird = bird.new(this.game)
        this.bg = GuaImage.new(this.game, 'bg')
        this.land = Land.new(this.game)

        this.addElement(this.bg)
        this.addElement(this.bird)
        this.addElement(this.land)
    }
    // draw() {
    //     // draw labels
    //     this.game.context.fillText('按 k 开始游戏', 100, 190)
    // }
}

class bird extends Animation {
  constructor(game) {
    super(game, 3, 'bird')

    this.setup()
  }

  setup() {
    this.x = 140
    this.y = 250
    //重力和加速度
    this.gy = 10
    this.vy = 0
  }

  update() {
    super.update()
    if (this.y < 415) {
      this.y += this.vy
      this.vy = this.gy * 0.3
    }
  }
}

class Land extends GuaImage {
  constructor(game) {
    super(game, 'land')

    this.setup()
  }

  setup() {
    this.y = 450
    this.x = 0
    this.z = 5
  }

  update() {
    this.x -= 5
    this.z --
    if (this.z == 0) {
      this.x = 0
      this.z = 5
    }
  }
}
