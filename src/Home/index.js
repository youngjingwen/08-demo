import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
    return(
      <div className='home-wrap'>
        <div className='home-cover'>
          <div className='home-item'>
            <h3>HI,I'M Youngjingwen</h3>
            <p>WEB DEVELOPER</p>
            <button type='button' className='btn btn-primary'>HIRE ME</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
