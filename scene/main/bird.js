class bird extends Animation {
  constructor(game) {
    super(game, 3, 'bird')

    this.setup()
  }

  setup() {
    this.x = 110
    this.y = 250
    //重力和加速度
    this.gy = 10
    this.vy = 0

    this.alive = true
  }

  jump() {
    this.vy = -10
    this.rotation = -45
  }

  collide(pipe) {
    return rectIntersects(this, pipe) || rectIntersects(pipe, this)
  }

  kill() {
    this.alive = false
  }

  draw() {
    // super.draw()
    var context = this.game.context
    context.save()
    var w2 = this.w / 2
    var h2 = this.h / 2
    context.translate(this.x + w2, this.y + h2)
    context.rotate(this.rotation * Math.PI / 180)
    context.translate(-w2, -h2)

    context.drawImage(this.texture, 0, 0)

    context.restore()
  }

  update() {
    super.update()
    
    this.y += this.vy
    this.vy = this.gy * 0.4
    if (this.y > 440) {
      this.vy = 0
    }
    //更新角度
    if (this.rotation < 45) {
      this.rotation += 5
    }
  }
}
