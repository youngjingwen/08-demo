import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Routers from './router'
import NavHeader from './component/NavHeader'
import NavFooter from './component/NavFooter'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      title:'blog'
    }
  }
  getChildContext(){
    return {muiTheme:getMuiTheme()}
  }
  componentWillReceiveProps(){
    this.setState({
      title:this.props.router.isActive('/',true) ? 'Home' :
            this.props.router.isActive('blog') ? 'Blog' :
            this.props.router.isActive('work') ? 'Work' : 'About'
    })
  }
  componentWillmount(){
    this.setState({
      title:this.props.router.isActive('/',true) ? 'Home' :
            this.props.router.isActive('blog') ? 'Blog' :
            this.props.router.isActive('work') ? 'Work' : 'About'
    })
  }
  render () {
    return(
      <div className='my-wrap'>
        <NavHeader title={this.state.title}/>
        <div className='main'>
          {this.props.children}
        </div>
        <NavFooter />
      </div>
    )
  }
}
App.contextTypes ={
  router:React.PropTypes.object
}
App.childContextTypes ={
  muiTheme: React.PropTypes.object
}
export default App;
