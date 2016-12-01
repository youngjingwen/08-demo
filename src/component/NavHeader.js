import React, { PropTypes } from 'react'

class NavHeader extends React.Component {

  handleBack(){
    this.context.router.goBack()
  }

  render () {
    return(
      <div className='nav-header'>
      <button type="button" className="btn btn-default btn-lg" onClick={this.handleBack.bind(this)}>
        <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span> BACK
      </button>
      <h3>Youngjingwen@{this.props.title}</h3>
      <button type="button" className="btn btn-default btn-lg">
        <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
      </button>
      </div>
    )
  }
}
NavHeader.contextTypes ={
  router:React.PropTypes.object
}
export default NavHeader;
