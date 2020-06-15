let length = 0
let currentIndex = 0

function initSlider(products) {
  initSliderHtml(products)
  initSliderEvent()
}

function initSliderHtml(products) {
  let sliderItemsContainer = $('.slider-items')
  sliderItemsContainer.html('')

  for(let product of products) {
    let { title, imageLink, price, description } = product
    let html = `
      <div class="slider-item">
        <div class="product-image">
          <img src="./img/${imageLink}" alt="Ảnh sản phẩm">
        </div>
        <div class="product-info">
          <div class="display-4 pb-3">${title}</div>
          <div class="text-bold">${price} VND</div>
          <div class="text-muted">${description}</div>
        </div>
      </div>
      `

    sliderItemsContainer.append(html)
  }
}

function initSliderEvent() {
  let sliderItems = $('.slider-item')
  let btnNext = $('.slider-next-btn')
  let btnPrev = $('.slider-prev-btn')

  length = sliderItems.length
  currentIndex = 0

  showCurrentSlider(sliderItems, currentIndex)

  btnNext.unbind()
  btnNext.click(function() {
    currentIndex++
    if(currentIndex >= length) {
      currentIndex = 0
    }
    showCurrentSlider(sliderItems, currentIndex)
  })

  btnPrev.unbind()
  btnPrev.click(function() {
    currentIndex--
    if(currentIndex < 0) {
      currentIndex = length - 1
    }
    showCurrentSlider(sliderItems, currentIndex)
  })

  setInterval(function() {
    currentIndex++
    if(currentIndex >= length) {
      currentIndex = 0
    }
    showCurrentSlider(sliderItems, currentIndex)
  }, 3000)
}

function showCurrentSlider(sliderItems, currentIndex) {
  for(let i = 0; i < length; i++) {
    if(i == currentIndex) {
      $(sliderItems[i]).show()
    } else {
      $(sliderItems[i]).hide()
    }
  }
}