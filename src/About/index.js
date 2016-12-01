import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'

import Loading from '../component/loading'
import ShowGit from '../component/ShowGit'

class About extends React.Component {
  constructor(){
    super()
    this.state={
      data:{},
      // 0 没搜索 1 数据搜索中  2  数据完成
      wait:0
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({
      wait:1
    })
    let value = this.refs.gitname.getValue();
    axios.get(`https://api.github.com/users/${value}`)
    .then( res => this.setState({data:res.data,wait:2})  )
    .catch( error => {alert(error);this.setState({wait:0})})
    this.refs.form.reset()
  }
  render () {
    let showGitinfo = this.state.wait==0 ? null : this.state.wait ==1 ? <Loading /> : <ShowGit gitInfo={this.state.data}/>
    return(
      <div className='about-wrap'>
        <div className='git-card'>
          <h2>Search Github Info</h2>
          <form ref='form' className='about-form' onSubmit={this.handleSubmit.bind(this)}>
            <TextField ref='gitname' hintText='github username' underlineFocusStyle={{borderColor:'red'}}/>
            <RaisedButton onClick={this.handleSubmit.bind(this)} label='Search' secondary={true} style={{marginLeft:'10px'}}/>
          </form>
          {showGitinfo}
        </div>
      </div>
    )
  }
}

export default About;
