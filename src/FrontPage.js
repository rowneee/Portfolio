import React from 'react'
import { Image } from 'react-bootstrap'


class FrontPage extends React.Component {

  render() {

    return (
      <>
        <div class="background-silhouette-left">
            <div class="animated slideInLeft">
            <Image src={require("/Users/ronishabo/Flatiron/Portfolio/portfolio-frontend/src/images/ORANGE-1.png")} style={{width:"500px", height:"800px", position:"fixed", zIndex:"-1", left:"0", top:"10vh"}} />
            </div>
        </div>
        <div class="background-silhouette-right">
            <div class="animated slideInRight">
              <Image src={require("/Users/ronishabo/Flatiron/Portfolio/portfolio-frontend/src/images/ORANGE-2.png")} style={{width:"500px", height:"800px", position:"fixed", zIndex:"-1", right:"0", top:"10vh"}} />
            </div>
        </div>
      </>
    )
  }


}

export default FrontPage

// let imgUrl = '/Users/ronishabo/Flatiron/Portfolio/portfolio-frontend/public/purple.png'
// const style = {
//   width: '100%',
//   height: '800px',
//   backgroundColor: '#e8e8e8',
//   backgroundSize: 'cover'
// };

// <div class="bg-component" style={style} >
// </div>
