import React from 'react'

class FrontPage extends React.Component {

  render() {
    let imgUrl = '/Users/ronishabo/Flatiron/Portfolio/portfolio-frontend/public/purple.png'
    const style = {
      width: '100%',
      height: '800px',
      backgroundColor: '#ffbd7a',
      backgroundSize: 'cover'
    };
    return (
      <div>
        <div class="bg-component" style={style} >
          <h1 class="portfolio-header" align="center">Portfolio</h1>
        </div>
      </div>
    )
  }


}

export default FrontPage
