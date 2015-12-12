import React from 'react'
import Hexagon from './hexagon.jsx'
import Row from './row.jsx'

class Body extends React.Component {
  render () {
    const { body } = this.props
    let rows = []

    for (let y = 0; y < 100; y++) {
      const rowData = body[y]
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

export default Body
