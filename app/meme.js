var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
canvas.width = Math.min(500, window.innerWidth - 100)
canvas.height = Math.min(500, window.innerWidth - 100)

var img = new Image()
img.src = 'app/img/doge.jpg'
img.onload = function () {
  console.log('Image has loaded')
  context.drawImage(img, 0, 0, canvas.width, canvas.height)
}
