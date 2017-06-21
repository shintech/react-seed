import React from 'react'

class Navigation extends React.Component {
  render () {
    return (
      <div className='navbar navbar-inverse'>
        <div className='navbar-header'>
          <a href='#' className='navbar-brand active'>{this.props.titleProp}</a>
        </div>
      </div>
    )
  }
}

export default Navigation
