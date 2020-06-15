window.onload = init

async function init() {
  let url = 'http://10.1.8.175:9000/data-product'

  let res = await fetch(url)
  let products = await res.json()
  
  let listProduct = document.querySelector('#list-product')

  initSlider(products)

  for(let product of products) {
    let { title, description, price, imageLink } = product
    let html = `
    <div
      class="col-4 product-item"
      data-toggle="tooltip"
      title="${description}">
      <div class="product-image">
        <img src="./img/${imageLink}" alt="Ảnh sản phẩm">
      </div>
      <div class="display-4 pb-3">${title}</div>
      <div class="text-bold">${price} VND</div>
    </div>
    `

    listProduct.innerHTML += html
  }
}