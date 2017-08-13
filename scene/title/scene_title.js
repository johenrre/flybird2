class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)

        this.init()
        this.setupInputs()
    }
    init() {
      this.bird = bird.new(this.game)
      this.bg = GuaImage.new(this.game, 'bg')
      this.land = Land.new(this.game)
      this.pipes = Pipes.new(this.game)

      this.addElement(this.bg)
      this.addElement(this.bird)
      this.addElement(this.pipes)
      this.addElement(this.land)
    }
    update() {
      super.update()
      let pipes = this.pipes.pipes
      for (var i = 0; i < pipes.length; i++) {
        if (this.bird.collide(pipes[i])) {
          this.bird.kill()
          // this.pipes.speed = 0
          // this.land.speed = 0
        }
      }
      // log('text', this.pipes.pipes.length)
    }

    setupInputs() {
      this.game.registerAction('j', () => {
          this.bird.jump()
      })
    }
}
