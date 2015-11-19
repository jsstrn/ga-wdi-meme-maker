function drawCanvas (img, textTop, textBottom) {
  let canvas = document.getElementById('canvas')
  let context = canvas.getContext('2d')
  canvas.width = Math.min(500, window.innerWidth - 100)
  canvas.height = Math.min(500, window.innerWidth - 100)
  console.log(img)
  if (!img || img.src === '') {
    // load default image
    img = new Image()
    img.src = 'img/doge.jpg'
  }
  img.onload = function () {
    // render image
    context.drawImage(img, 0, 0, canvas.width, canvas.height)
    // define text styles
    context.font = 'bold 3em sans-serif'
    context.textAlign = 'center'
    context.fillStyle = 'black'
    //  render text top)
    context.fillText(textTop, canvas.width / 2, canvas.height - 420)
    //  render text (bottom)
    context.fillText(textBottom, canvas.width / 2, canvas.height - 50)
  }
}

let submitButton = document.getElementById('submitButton')
submitButton.addEventListener('click', submitButtonClicked, false)
function submitButtonClicked (event) {
  let reader = new FileReader()
  reader.onloadend = function () {
    console.log(reader.result)
  }

  let img = new Image()
  img.src = event.target.value

  let textTop = document.getElementById('textTop').value
  let textBottom = document.getElementById('textBottom').value

  drawCanvas(img, textTop, textBottom)
}

window.onload = function () {
  drawCanvas(null, 'Yo', 'Wassup????')
  let uploadFile = document.querySelector('input[type=file]')
  uploadFile.addEventListener('change', submitButtonClicked, false)
}
