import React from 'react'
import Graphic from './Graphic'
import AboutMe from './AboutMe'

class FrontPage extends React.Component {

  render() {
    return (
      <div class="front-page">
        <Graphic />
        <AboutMe />
      </div>
    )
  }


}

export default FrontPage

// <div class="background-silhouette-right">
//   <div class="animated slideInRight">
//     <Image src={require("/Users/ronishabo/Flatiron/Portfolio/portfolio-frontend/src/images/ORANGE-2.png")} style={{width:"500px", height:"800px", position:"fixed", zIndex:"-1", right:"0", top:"10vh"}} />
//   </div>
// </div>
// let imgUrl = '/Users/ronishabo/Flatiron/Portfolio/portfolio-frontend/public/purple.png'
// const style = {
//   width: '100%',
//   height: '800px',
//   backgroundColor: '#e8e8e8',
//   backgroundSize: 'cover'
// };

// <div class="bg-component" style={style} >
// </div>
