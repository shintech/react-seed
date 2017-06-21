import React from 'react'
import Navigation from './Navigation.jsx'

class Root extends React.Component {
  render () {
    return (
      <div>
        <Navigation titleProp={this.props.titleProp} />

        <div className='container-fluid'>
          <div id='main-view' />
        </div>
      </div>
    )
  }
}

export default Root
