var e = sel => document.querySelector(sel)

var log = console.log.bind(console)

var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var rectIntersects = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.h) {
        if (b.x > o.x && b.x < o.x + o.w) {
            return true
        }
    }
    return false
}

var rectIntersects2 = function(a, b) {
    // var o = a
    // if (b.y > o.y && b.y < o.y + o.height) {
    //     if (b.x > o.x && b.x < o.x + o.width) {
    //         return true
    //     }
    // }
    if (a.y + a.h > b.y) {
      if (a.x > b.x && a.x < b.x + b.w) {
        return true
      }
    }
    log('text', a, b)
    return false
}

const randomBetween = function (start, end) {
  var n = Math.random() * (end - start + 1)
  return Math.floor(n + start)
}
