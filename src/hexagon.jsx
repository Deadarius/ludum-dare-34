import React from 'react'

const style = {
  root: {
    float: 'left',
    marginLeft: '3px',
    marginBottom: '-26px'
  },
  top: {
    width: 0,
    borderBottom: '30px solid #6C6',
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
    borderTop: '30px solid #6C6',
    borderLeft: '52px solid transparent',
    borderRight: '52px solid transparent'
  }
}

class Hexagon extends React.Component {
  render () {
    return <div style={style.root}>
      <div style={style.top}></div>
      <div style={style.middle}></div>
      <div style={style.bottom}></div>
    </div>
  }
}

Hexagon.propTypes = {
  x: React.PropTypes.number,
  y: React.PropTypes.number
}

export default Hexagon
