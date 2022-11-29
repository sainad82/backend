const c = document.getElementById('my-canvas')
const ctx = c.getContext('2d')

const loadImage = (src, callback) => {
  const img = document.createElement('img')
  img.onload = () => callback(img)
  img.src = src
}

const imagePath = (frameNumber, animation) => {
  return 'images/' + animation + '/' + frameNumber + '.png'
}
const frames = {
  idle: [1, 2, 3, 4, 5, 6, 7, 8],
  kick: [1, 2, 3, 4, 5, 6, 7],
  punch: [1, 2, 3, 4, 5, 6, 7]
}

const loadImages = (callback) => {
  const images = { idle: [], kick: [], punch: [] }
  let imagesToLoad = 0;

  ['idle', 'kick', 'punch'].forEach((animation) => {
    const animationFrames = frames[animation]
    imagesToLoad = imagesToLoad + animationFrames.length

    animationFrames.forEach((frameNumber) => {
      const path = imagePath(frameNumber, animation)

      loadImage(path, (image) => {
        images[animation][frameNumber - 1] = image
        imagesToLoad = imagesToLoad - 1

        if (imagesToLoad === 0) {
          callback(images)
        }
      })
    })
  })
}
const animate = (ctx, images, animation, callback) => {
  images[animation].forEach((image, index) => {
    setTimeout(() => {
      ctx.clearRect(0, 0, 500, 500)
      ctx.drawImage(image, 0, 0, 500, 500)
    }, index * 100)
  })
  setTimeout(callback, images[animation].length * 100)
}

loadImages((images) => {
  const queuedAnimations = []

  const aux = () => {
    let selectedAnimation

    if (queuedAnimations.length === 0) {
      selectedAnimation = 'idle'
    } else {
      selectedAnimation = queuedAnimations.shift()
    }
    animate(ctx, images, selectedAnimation, aux)
  }

  aux()

  document.getElementById('kick').onclick = () => {
    queuedAnimations.push('kick')
  }

  document.getElementById('punch').onclick = () => {
    queuedAnimations.push('punch')
  }

  document.addEventListener('keyup', (event) => {
    const key = event.key // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"

    if (key === 'ArrowLeft') {
      queuedAnimations.push('kick')
    } else if (key === 'ArrowRight') {
      queuedAnimations.push('punch')
    }
  })
})
