import React, { Component } from 'react'
import { BASE_URL, API_PATHS } from '../config'

class HomeContent extends Component {
  constructor(props) {
    super(props)
  }

  async callApi() {
    let url = `${BASE_URL}${API_PATHS.DATA}`
    let res = await fetch(url)
    let body = await res.json() // { message: 'hello' }
    alert("Server said: " + body.message)
  }

  showList(products) {
    let rows = []
    for(let i = 0; i < products.length; i += 3) {
      let p1 = products[i]
      let p2 = products[i + 1]
      let p3 = products[i + 2]
      // >>> thiếu key = i (key để react phân biệt các phần tử trong list)
      rows.push(
        <div>
          {this.showItem(p1, i)}
          {this.showItem(p2, i)}
          {this.showItem(p3, i)}
        </div>
      )
    }
    // >>> thiếu return
    return rows
  }

  showItem(product, key) {
    return product
      ? ( // nếu có sản phẩm > trả về thẻ có giá trị
        <div key={key}>
          <div>{product.id}</div>
          <div>{product.title}</div>
        </div>
      )
      : ( // nếu ko có trả về thẻ rỗng
        <div key={key}></div>
      )
  }

  render() {
    let products = [
      { id: 1, tile: 'a' },
      { id: 2, tile: 'b' },
      { id: 3, tile: 'c' },
    ]
    return (
      <div>
        {this.showList(products)}
      </div>
    )
  }
}

export default HomeContent

