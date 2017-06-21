import React from 'react'
import Navigation from './Navigation.jsx'
import Table from './Table.jsx'

class Root extends React.Component {
  render () {
    return (
      <div>
        <Navigation titleProp={this.props.titleProp} />

        <div className='container-fluid'>
          <Table />
        </div>
      </div>
    )
  }
}

export default Root
