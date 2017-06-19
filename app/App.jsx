import React from 'react'

class App extends React.Component {
  render () {
    var myStyle = {
      fontSize: 100,
      color: '#FF0000'
    }

    var i = 1

    return (
      <div>
        <h1 style={myStyle}>Header</h1>
        <p>{i === 1 ? 'True' : 'False'}</p>
      </div>
    )
  }
}

export default App
