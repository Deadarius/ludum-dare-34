import React from 'react'
import _ from 'lodash'

const style = {
  root: {
    float: 'left',
    marginLeft: '3px',
    marginBottom: '-26px'
  },
  top: {
    width: 0,
    borderBottomWidth: '30px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#6C6',
    borderLeft: '52px solid transparent',
    borderRight: '52px solid transparent'
  },
  middle: {
    width: '104px',
    height: '60px',
    backgroundColor: '#6C6'
  },
  bottom: {
    width: 0,
    borderTopWidth: '30px',
    borderTopStyle: 'solid',
    borderTopColor: '#6C6',
    borderLeft: '52px solid transparent',
    borderRight: '52px solid transparent'
  }
}

class Hexagon extends React.Component {
  render () {
    const { colour } = this.props

    let rootStyle = _.extend({}, style.root)
    let topStyle = _.extend({}, style.top, {borderBottomColor: colour})
    let middleStyle = _.extend({}, style.middle, {backgroundColor: colour})
    let bottomStyle = _.extend({}, style.bottom, {borderTopColor: colour})

    return <div style={rootStyle}>
      <div style={topStyle}></div>
      <div style={middleStyle}></div>
      <div style={bottomStyle}></div>
    </div>
  }
}

Hexagon.propTypes = {
  x: React.PropTypes.number,
  y: React.PropTypes.number,
  colour: React.PropTypes.string
}

export default Hexagon
