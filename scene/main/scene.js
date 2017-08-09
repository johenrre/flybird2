
class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
      const game = this.game
      this.numberOfEnemies = 5
      this.bullets = []
      this.bg = GuaImage.new(game, 'sky')
      this.cloud = Cloud.new(game)
      this.player = Player.new(game)

      this.debug = 1

      // this.player = GuaImage.new(game, 'player')
      // this.player.x = 100
      // this.player.y = 150

      this.addElement(this.bg)
      this.addElement(this.cloud)
      this.addElement(this.player)
      // enemy3
      this.addEnemies()
    }

    addEnemies() {
      var es = []
      for (var i = 0; i < this.numberOfEnemies; i++) {
        var e = Enemy.new(this.game)
        es.push(e)
        this.addElement(e)
      }
      this.enimies = es
    }

    setupInputs() {
      var game = this.game
      // var that = this
      game.registerAction('a', () => {
          this.player.moveLeft()
      })
      game.registerAction('d', () => {
          this.player.moveRight()
      })
      game.registerAction('w', () => {
          this.player.moveUp()
      })
      game.registerAction('s', () => {
          this.player.moveDown()
      })
      game.registerAction('j', () => {
          this.player.fire()
      })
    }

    update() {
      super.update()
      this.cloud.y += 1

      for (var i = 0; i < this.numberOfEnemies; i++) {
        // log('text', this.enimies[i].collide(this.player))
        if(this.bullets.length) {
          if (this.enimies[i].collide(this.bullets[0])) {
              log('击中')
              this.enimies[i].kill()
          }
        }
      }
      ///
    }
}






// var Scene = function(game) {
//     var s = {
//         game: game,
//     }
//     // 初始化
//     var paddle = Paddle(game)
//     var ball = Ball(game, 5, 5)
//     var ball2 = Ball(game, -5, 5)
//     var ball3 = Ball(game, -3, 5)
//
//     var score = 0
//     var currLevel = 1
//
//     var blocks = loadLevel(game, currLevel)
//
//     game.registerAction('a', function(){
//         paddle.moveLeft()
//     })
//     game.registerAction('d', function(){
//         paddle.moveRight()
//     })
//     game.registerAction('f', function(){
//         ball.fire()
//         ball2.fire()
//         ball3.fire()
//     })
//
//     s.draw = function() {
//         // draw 背景
//         game.context.fillStyle = "#554"
//         game.context.fillRect(0, 0, 400, 300)
//         // draw
//         game.drawImage(paddle)
//         game.drawImage(ball)
//         game.drawImage(ball2)
//         game.drawImage(ball3)
//         // draw blocks
//         for (var i = 0; i < blocks.length; i++) {
//             var block = blocks[i]
//             if (block.alive) {
//                 game.drawImage(block)
//             }
//         }
//         // 判断是不是应该切换关卡
//         s.reloadLevel()
//         // draw labels
//         game.context.fillText('分数: ' + score, 10, 290)
//     }
//     s.update = function() {
//         if (window.paused) {
//             return
//         }
//
//         ball.move()
//         ball2.move()
//         ball3.move()
//         // 判断游戏结束
//         // if (ball.y > paddle.y) {
//         //     // 跳转到 游戏结束 的场景
//         //     var end = SceneEnd.new(game)
//         //     game.replaceScene(end)
//         // }
//         // 判断相撞
//         if (paddle.collide(ball)) {
//             // 这里应该调用一个 ball.反弹() 来实现
//             ball.反弹()
//         }
//         if (paddle.collide(ball2)) {
//             // 这里应该调用一个 ball.反弹() 来实现
//             ball2.反弹()
//         }
//         if (paddle.collide(ball3)) {
//             // 这里应该调用一个 ball.反弹() 来实现
//             ball3.反弹()
//         }
//         // 判断 ball 和 blocks 相撞
//         for (var i = 0; i < blocks.length; i++) {
//             var block = blocks[i]
//             if (block.collide(ball)) {
//                 // log('block 相撞')
//                 block.kill()
//                 ball.反弹()
//                 // 更新分数
//                 score += 100
//             }
//             if (block.collide(ball2)) {
//                 // log('block 相撞')
//                 block.kill()
//                 ball.反弹()
//                 // 更新分数
//                 score += 100
//             }
//             if (block.collide(ball3)) {
//                 // log('block 相撞')
//                 block.kill()
//                 ball.反弹()
//                 // 更新分数
//                 score += 100
//             }
//         }
//     }
//
//     s.reloadLevel = function () {
//       for (var i = 0; i < blocks.length; i++) {
//         var block = blocks[i]
//         if (block.alive) {
//             return
//         }
//       }
//       currLevel = (currLevel) % levels.length + 1
//       blocks = loadLevel(game, currLevel)
//     }
//
//     // mouse event
//     var enableDrag = false
//     game.canvas.addEventListener('mousedown', function(event) {
//         var x = event.offsetX
//         var y = event.offsetY
//         // 检查是否点中了 ball
//         if (ball.hasPoint(x, y)) {
//             // 设置拖拽状态
//             enableDrag = true
//         }
//     })
//     game.canvas.addEventListener('mousemove', function(event) {
//         var x = event.offsetX
//         var y = event.offsetY
//         // log(x, y, 'move')
//         if (enableDrag) {
//             ball.x = x
//             ball.y = y
//         }
//     })
//     game.canvas.addEventListener('mouseup', function(event) {
//         var x = event.offsetX
//         var y = event.offsetY
//         enableDrag = false
//     })
//
//     return s
// }
