import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      header: 'Header',
      content: 'Page Content...',
      data:
      [
        {
          'id': 1,
          'name': 'Foo',
          'age': '20'
        },

        {
          'id': 2,
          'name': 'Bar',
          'age': '30'
        },

        {
          'id': 3,
          'name': 'Baz',
          'age': '40'
        }
      ]
    }
  }

  render () {
    return (
      <div>
        <Header headerProp={this.state.header} />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key={i} data={person} />)}
          </tbody>
        </table>
        <div>
          <Content contentProp={this.state.content} />
        </div>
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    var myStyle = {
      fontSize: 35,
      color: '#FF0000'
    }

    return (
      <div>
        <h1 style={myStyle}>{this.props.headerProp}</h1>
      </div>
    )
  }
}

class TableRow extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    )
  }
}

class Content extends React.Component {
  render () {
    return (
      <div>
        <p>{this.props.contentProp}</p>
      </div>
    )
  }
}

export default App
