import React from 'react'
import Hexagon from './hexagon.jsx'
import Row from './row.jsx'
import { connect } from 'react-redux'

function mapStateToProps (state) {
  return {
    bodyData: state.body
  }
}

class Body extends React.Component {
  render () {
    const { bodyData } = this.props
    let rows = []

    for (let y = 0; y < 100; y++) {
      const rowData = bodyData[y]
      let hexagons = []

      for (let x = 0; x < 100; x++) {
        const cellData = rowData[x]
        let hexagon = <Hexagon x={x} y={y} />
        hexagons.push(hexagon)
      }

      rows.push(<Row isEven={!(y % 2)}>{hexagons}</Row>)
    }

    return <div>{rows}</div>
  }
}

Body.propTypes = {
  bodyData: React.PropTypes.array
}

export default connect(mapStateToProps)(Body)
