import React from 'react'
import _ from 'lodash'

const rowStyle = { clear: 'left' }

class Row extends React.Component {
  render () {
    let style = _.clone(rowStyle)
    if (this.props.isEven) {
      style.marginLeft = '53px'
    }
    return <div style={style}>
      {this.props.children}
    </div>
  }
}

Row.propTypes = {
  isEven: React.PropTypes.bool,
  children: React.PropTypes.any
}

export default Row
