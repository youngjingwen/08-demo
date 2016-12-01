import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'

class ShowGit extends React.Component {
  render () {
    let info = this.props.gitInfo
    let imgstyle={
      width:'100%',
      maxWidth: '130px',
      borderRadius:'50%',

    }
    return(
      <div>
        <img src={info.avatar_url} style={imgstyle}/>
        <h3>{info.login}</h3>
        <div className='show-git'>
          <p>follower<br/> {info.followers+100}</p>
          <p>following<br/> {info.following+100}</p>
          <p>public_repos<br/> {info.public_repos+100}</p>
        </div>
      </div>
    )
  }
}

export default ShowGit;
