import React from 'react'
import { Image } from 'react-bootstrap'

class Graphic extends React.Component {

  render() {
    return(
      <div class="graphic-logo">
        <Image src={require("/Users/ronishabo/Flatiron/Portfolio/portfolio-frontend/src/images/ORANGE-1.png")} style={{width:"500px", height:"800px", position:"fixed", zIndex:"-1", left:"0", top:"10vh"}} />
      </div>

    )
  }

}

export default Graphic
