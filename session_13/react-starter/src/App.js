import React, { Component } from 'react';
import './App.css';
import Text from './components/Text'
import TextEffect from './components/TextEffect'

// class Component
class App extends Component {
  render() {
    let name = 'Linh'
    let email = 'linhnt28031995@gmail.com'
    let number = 26
    let array = [1, 2, 3, 4]
    // let obj = { a: 123 }

    return (
      <div className="App">
        {/* render html */}
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <input name="email" placeholder="Enter your email" />
        
        {/* render variable */}
        <div>Hello {name}, email: {email}!</div>
        <div>Number: {number}</div>
        <div>Array: {array}</div>
        {/* <div>Object: {obj}</div> */}

        {/* render component children */}
        <Text
          color="red"
          size={50}>
          123
        </Text>
        <TextEffect>
          New text
        </TextEffect>

        {/* render conditional */}
        {
          number % 2 == 0
            ? (<div>Even</div>)
            : (<div>Odd</div>)
        }

        {/* render list */}
        {[1, 'abc', 'xyz', 20.1]}
        {[
          <span key="s1">1</span>,
          <span key="s2">abc</span>,
          <span key="s3">xyz</span>,
          <span key="s4">20.1</span>
        ]}
        {
          ['Linh', 'Nam', 'Phượng'].map((item, i) => {
            return <div key={i}>Hello {item}!</div>
          })
        }
        <select>
          {
            ['1', '2', '3'].map((item, i) => {
              return <option value={item} key={i}>{item}</option>
            })
          }
        </select>
      </div>
    )
  }
}

// function Component

// function App() {
//   return (
//     <div className="App">
//       React starter
//     </div>
//   );
// }

export default App;
